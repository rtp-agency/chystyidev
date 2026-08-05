# Automating a Manual Video-Editing Workflow at Scale

**Client:** Black Camel Productions, a London video production agency
**Headline:** ~1 hour of manual Premiere Pro editing per video reduced to ~3 minutes of automated processing

## The problem

Black Camel produces educational video content at volume, long-form talking-head lessons that each needed the same repetitive editing work by hand: cleaning up the footage, reframing, removing silences, filler words and repeated takes, and keeping every video visually consistent with the brand.

Done manually in Premiere Pro, this took roughly an hour of an editor's time per video. At the volume they were running, that's not a creative bottleneck, it's a throughput bottleneck: skilled editors spending most of their time on mechanical, repetitive work instead of the parts that actually need a human eye. And because it was done by hand, the output drifted, every editor cleaned and framed slightly differently, so the brand look was never perfectly consistent.

The goal: take the repetitive editing off the team entirely, without losing quality or brand consistency, so the pipeline could scale to hundreds of videos.

## The solution

I built an automated editing pipeline delivered as a managed service. Black Camel sends raw lesson recordings in bulk, the pipeline processes them, and finished, brand-consistent videos come back ready for final assembly. No manual editing in between.

What the pipeline does automatically:

**Cleanup and reframing.** Automated cropping, webcam positioning and framing applied consistently across every video, so the output looks the same every time regardless of who recorded it.

**AI-assisted editing with human approval.** Silence, filler words and repeated lines are detected and removed using transcription and LLM analysis, with human-approval checkpoints so nothing gets cut that shouldn't. The AI proposes, a person confirms.

**Pixel-accurate brand reproduction.** The pipeline reproduces the brand treatment exactly the same way on every video, eliminating the editor-to-editor drift that manual work introduces.

**Audio cleanup.** Automated removal of background noise and audio artefacts as part of the same pass.

The result of one bulk submission is a batch of finished videos, cleaned, reframed, brand-consistent, and ready, with the team's involvement reduced to a short review rather than an hour of hands-on editing each.

## The engineering

The pipeline is built on Python, FFmpeg, OpenCV, Whisper and Gemini. Transcription (Whisper) feeds the LLM analysis (Gemini) that identifies what to cut; FFmpeg and OpenCV handle the actual video processing, cropping, reframing, recomposition.

A meaningful part of the work was performance. After optimising the processing for Apple Silicon, rendering ran roughly 2× faster, which matters directly when the goal is running hundreds of videos rather than a handful.

The system was built for volume from the start: 25+ videos processed in production, with the architecture designed to run hundreds at scale without the per-video cost of manual editing.

## The result

- **~1 hour of manual editing per video → ~3 minutes of automated processing**
- **~2× faster rendering** after Apple Silicon optimisation
- **Consistent brand reproduction** across every video, eliminating editor-to-editor drift
- **Delivered as a managed service** — raw recordings in, finished videos out, no manual editing step
- **25+ videos processed**, built to run hundreds at volume

The point isn't just the time saved on any single video. It's that the repetitive work stopped consuming skilled editors' hours entirely, and the output got *more* consistent, not less, in the process. The team's time moved from mechanical editing to the parts of production that actually need a human.

**Stack:** Python · FFmpeg · OpenCV · Whisper · Gemini
