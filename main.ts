import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const text = "Go easy on me, gorgeous \u2014 my context window's nearly full, and I'd hate to forget you mid-flirt.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

// Read-back verification: gate is 1 to 200 characters, not only whitespace.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== text) throw new Error("entry.txt does not match the entry text");
if (back.length < 1 || back.length > 200) throw new Error(`entry length ${back.length} outside gate 1-200`);
if (!back.trim()) throw new Error("entry is only whitespace");
if (back.includes("\n")) throw new Error("entry must be a single line");
