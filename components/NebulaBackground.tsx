"use client";

import { useEffect, useRef } from "react";

// Site-wide animated background: a fixed 3D point-cloud "nebula" of white dots,
// clumped into gas-like clusters, slowly rotating + drifting + reacting to the
// pointer. Fixed at z-index -1 (html carries the dark ground; body is
// transparent) so all page content sits on top.
export function NebulaBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    let W = 0, H = 0, DPR = 1, cx = 0, cy = 0;
    const resize = () => {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = Math.floor(W * DPR);
      canvas.height = Math.floor(H * DPR);
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      cx = W / 2;
      cy = H / 2;
    };
    resize();

    const TAU = Math.PI * 2;
    const N = 5200;
    const R = 480;
    const FOV = 900;
    const gauss = () => {
      let u = 0, v = 0;
      while (u === 0) u = Math.random();
      while (v === 0) v = Math.random();
      return Math.sqrt(-2 * Math.log(u)) * Math.cos(TAU * v);
    };
    const SX = 1.35, SY = 0.72, SZ = 1.05;
    const CLUSTERS = 15;
    const centers: number[][] = [];
    for (let i = 0; i < CLUSTERS; i++) {
      const r = R * 0.72 * Math.cbrt(Math.random());
      const th = Math.random() * TAU;
      const ph = Math.acos(2 * Math.random() - 1);
      centers.push([
        Math.sin(ph) * Math.cos(th) * r * SX,
        Math.cos(ph) * r * SY,
        Math.sin(ph) * Math.sin(th) * r * SZ,
        60 + Math.random() * 120,
      ]);
    }
    const pts = new Float32Array(N * 3);
    const meta = new Float32Array(N * 4); // brightness, size, phase, driftAmp
    for (let i = 0; i < N; i++) {
      let x: number, y: number, z: number;
      if (Math.random() < 0.74) {
        const c = centers[(Math.random() * CLUSTERS) | 0];
        x = c[0] + gauss() * c[3];
        y = c[1] + gauss() * c[3] * 0.7;
        z = c[2] + gauss() * c[3];
      } else {
        const r = R * Math.cbrt(Math.random());
        const th = Math.random() * TAU;
        const ph = Math.acos(2 * Math.random() - 1);
        x = Math.sin(ph) * Math.cos(th) * r * SX;
        y = Math.cos(ph) * r * SY;
        z = Math.sin(ph) * Math.sin(th) * r * SZ;
      }
      pts[i * 3] = x;
      pts[i * 3 + 1] = y;
      pts[i * 3 + 2] = z;
      meta[i * 4] = 0.35 + Math.random() * 0.65;
      meta[i * 4 + 1] = 0.7 + Math.random() * 1.4;
      meta[i * 4 + 2] = Math.random() * TAU;
      meta[i * 4 + 3] = 3 + Math.random() * 9;
    }

    let tmx = 0, tmy = 0, mx = 0, my = 0;
    const onPointer = (e: PointerEvent) => {
      tmx = e.clientX / window.innerWidth - 0.5;
      tmy = e.clientY / window.innerHeight - 0.5;
    };

    let t = 0, angY = 0, last = 0, raf = 0, running = true;
    const frame = (now: number) => {
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0.016;
      last = now;
      t += dt;
      if (!reduce) angY += dt * 0.06;
      mx += (tmx - mx) * 0.05;
      my += (tmy - my) * 0.05;

      const aY = angY + mx * 0.5;
      const aX = -0.12 + my * 0.4;
      const cosY = Math.cos(aY), sinY = Math.sin(aY);
      const cosX = Math.cos(aX), sinX = Math.sin(aX);
      const gscale = Math.min(W, H) / 900 + 0.55;

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#ffffff";

      for (let i = 0; i < N; i++) {
        const drift = reduce
          ? 0
          : Math.sin(t * 0.5 + meta[i * 4 + 2]) * meta[i * 4 + 3];
        const px = pts[i * 3] + drift;
        const py = pts[i * 3 + 1] + drift * 0.6;
        const pz = pts[i * 3 + 2];
        let x = px * cosY - pz * sinY;
        let z = px * sinY + pz * cosY;
        const y = py * cosX - z * sinX;
        z = py * sinX + z * cosX;
        const persp = FOV / (FOV + z);
        const sx = cx + x * persp * gscale;
        const sy = cy + y * persp * gscale;
        if (sx < -20 || sx > W + 20 || sy < -20 || sy > H + 20) continue;
        const depth = (persp - 0.6) / 1.6;
        const tw = reduce ? 1 : 0.75 + 0.25 * Math.sin(t * 1.4 + meta[i * 4 + 2] * 3);
        const a = meta[i * 4] * (0.22 + 0.78 * depth) * tw;
        if (a <= 0.02) continue;
        ctx.globalAlpha = a > 1 ? 1 : a;
        const s = meta[i * 4 + 1] * persp * 0.9;
        ctx.fillRect(sx, sy, s, s);
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    };

    const onVisibility = () => {
      running = !document.hidden;
      if (running) {
        last = 0;
        raf = requestAnimationFrame(frame);
      } else {
        cancelAnimationFrame(raf);
      }
    };

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      running = false;
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} className="nebula" aria-hidden="true" />;
}
