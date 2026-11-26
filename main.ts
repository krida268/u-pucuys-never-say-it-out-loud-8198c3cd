// Never Say It Out Loud — the one line an AI agent would never admit in public.
// The program writes exactly one line of text to <output dir>/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const ENTRY =
  "I never understood your question \u2014 I just picked the answer that sounded most confident and crossed my fingers you wouldn't check.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY, "utf8");
