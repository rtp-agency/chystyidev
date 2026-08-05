/**
 * Serialize a JSON-LD object for embedding in a <script> tag.
 *
 * JSON.stringify does not escape `<`, so any string in the graph containing
 * `</script>` would close the tag early and let the rest of the value be parsed
 * as HTML. Today the graph is built from static sources, but case copy in
 * lib/cases.ts is prose that grows over time, and one angle bracket in the wrong
 * place is the difference between a description and an injection.
 *
 * Escaping `<`, `>` and `&` as \uXXXX keeps the payload byte-for-byte equivalent
 * once parsed — they are legal JSON string escapes — while making it impossible
 * to terminate the element. U+2028/U+2029 are escaped too: they are valid in
 * JSON but are line terminators in JavaScript, which trips up older parsers.
 *
 * The two separators are referenced by code point rather than written literally
 * so that this file stays pure ASCII and no editor or tool can silently eat the
 * one character the escaping depends on.
 */

const LINE_SEP = String.fromCharCode(0x2028);
const PARA_SEP = String.fromCharCode(0x2029);

const ESCAPES: Record<string, string> = {
  "<": "\\u003c",
  ">": "\\u003e",
  "&": "\\u0026",
  [LINE_SEP]: "\\u2028",
  [PARA_SEP]: "\\u2029",
};

const UNSAFE = new RegExp(`[<>&${LINE_SEP}${PARA_SEP}]`, "g");

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(UNSAFE, (c) => ESCAPES[c]);
}
