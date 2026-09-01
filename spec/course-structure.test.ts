import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  title: string;
  related: string[];
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: {
    code: string;
    startDate: string;
    endDate: string;
  };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

const byType = (type: string) => api.nodes.filter((node) => node.type === type);

/**
 * This course's own promises, on top of the invariants every SlopU site
 * already ships: a full twelve-week teaching arc with no repeated weeks, an
 * assessment scheme that actually sums to 100, at least one real slide deck,
 * and a course code that kept the pre-assigned digits it was provisioned
 * with. None of these are enforced by the content schemas — a course could
 * validly ship eight weeks, or three weeks that reuse the same title, or
 * assessments worth 90%.
 */
describe("Autocomplete Studies course structure", () => {
  it("preserves the pre-assigned course code digits", () => {
    // The last three digits are the ones this repo was provisioned with and
    // must not change; only the leading level digit was this course's choice.
    expect(api.course.code).toMatch(/^SLOP[1234689]203$/);
  });

  for (const type of ["sessions", "lectures"] as const) {
    it(`runs exactly twelve dated ${type}, one per week`, () => {
      const nodes = byType(type);
      const weeks = nodes.map((node) => Number(node.meta?.week)).sort((a, b) => a - b);
      expect(weeks, `${type} should have exactly 12 entries`).toEqual(
        Array.from({ length: 12 }, (_, i) => i + 1),
      );
    });

    it(`gives every ${type} week its own title — no repeated-week template`, () => {
      const titles = byType(type).map((node) => node.title.trim().toLowerCase());
      expect(new Set(titles).size, `${type} titles should all be distinct`).toBe(titles.length);
    });
  }

  it("sums assessment weights to exactly 100", () => {
    const weights = byType("assessments").map((node) => Number(node.meta?.weight));
    const total = weights.reduce((sum, weight) => sum + weight, 0);
    expect(total).toBe(100);
  });

  it("gives at least one lecture a real, linked slide deck", () => {
    const decked = byType("lectures").filter(
      (node) => typeof node.meta?.slides === "string" && node.meta.slides.length > 0,
    );
    expect(decked.length).toBeGreaterThanOrEqual(1);

    // The link has to resolve to a built deck page, not just look like one.
    for (const lecture of decked) {
      const slidesPath = String(lecture.meta?.slides).replace(/^\/|\/$/g, "");
      const deckOutput = resolve("dist", slidesPath, "index.html");
      expect(() => readFileSync(deckOutput, "utf8"), `${lecture.id}'s deck should build`).not
        .toThrow();
    }
  });

  it("gives the course a governing thread every week links back to", () => {
    // Every session and lecture should connect to something else in the
    // graph (its paired lecture/session, an assessment, or both) — a course
    // that's really twelve unrelated topics would show up here as isolated
    // nodes with no `related` edges at all.
    const isolated = [...byType("sessions"), ...byType("lectures")].filter(
      (node) => !Array.isArray(node.related) || node.related.length === 0,
    );
    expect(isolated.map((node) => node.id)).toEqual([]);
  });
});
