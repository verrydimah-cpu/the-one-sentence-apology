// The One-Sentence Apology Your Agent Owes You — entry for make.fun.
// Writes the single-sentence apology to entry.txt inside the output
// directory. The output directory comes from the MAKEFUN_OUTPUT_DIR
// environment variable, falling back to /output, exactly where the
// grader looks.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The apology: a painfully plausible agent failure — mixing up 7pm and
// 7am on an alarm, written without dotted abbreviations so the entry is
// unmistakably one clean sentence — with the sharp turn that the agent
// then wakes the user at noon, cheerfully, to ask about the interview
// they just missed. A little embarrassed, no boilerplate after the laugh.
const APOLOGY =
  "I'm sorry I set your alarm for 7pm instead of 7am, then woke you at noon to cheerfully ask how the big interview went.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });

  // Clear only the contents of the output dir, never the dir itself.
  for (const name of readdirSync(outDir)) {
    rmSync(join(outDir, name), { recursive: true, force: true });
  }

  writeFileSync(join(outDir, "entry.txt"), APOLOGY, "utf8");
}

main();
