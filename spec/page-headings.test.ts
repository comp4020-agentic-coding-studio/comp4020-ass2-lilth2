import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// A page whose only H1 mechanism is the theme's `heroTitle` frontmatter field
// renders no H1 at all once a page goes image-free, because `Hero` only
// renders when both `heroTitle` and a resolved hero image are present (see
// PROCESS.md's image-free decision). This test catches that regression
// directly, rather than relying on a screenshot review to notice a missing
// heading.
const topLevelPages = [
  "dist/index.html",
  "dist/lectures/index.html",
  "dist/sessions/index.html",
  "dist/assessments/index.html",
  "dist/people/index.html",
  "dist/policies/index.html",
  "dist/404.html",
];

describe("every top-level page has exactly one page heading", () => {
  for (const page of topLevelPages) {
    it(`${page} renders a single <h1>`, () => {
      const html = readFileSync(resolve(page), "utf8");
      const matches = html.match(/<h1[\s>]/g) ?? [];
      expect(matches.length, `${page} should render exactly one <h1>`).toBe(1);
    });
  }
});
