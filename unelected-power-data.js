/* Unelected Power — profile data
   Add a new object to this array for each new profile.
   The roster page (index.html) reads this file to render cards and power search.
   Fields:
     slug        — filename without .html, also used as the card link
     name        — person's name
     roleTag     — short role line shown above the name on the card
     summary     — 2-3 sentence card summary
     tags        — array of short tag strings shown as chips
     dateAdded   — YYYY-MM-DD, when the profile was first published
     dateUpdated — YYYY-MM-DD, most recent substantive update
*/

const UNELECTED_POWER_PROFILES = [
  {
    slug: "steve-waldrip",
    name: "Steve Waldrip",
    roleTag: "Governor's Office · State Housing Coordinator",
    summary: "Two terms in the Utah House, then appointed Gov. Cox's Senior Advisor for Housing Strategy in Dec. 2023 — no vote required. A 2026 law made him state housing coordinator over a new division, and repealed the housing-affordability board he used to sit on.",
    tags: ["Governor's Office", "Division of Housing and Community Development", "Utah Housing Corporation", "B&C Road Funds"],
    dateAdded: "2026-08-28",
    dateUpdated: "2026-08-28"
  },
  {
    slug: "mike-ostermiller",
    name: "Mike Ostermiller",
    roleTag: "MIDA Board · CEO, Northern Wasatch Realtors",
    summary: "Never elected to anything. A seat on the Military Installation Development Authority's board since its 2008 founding year, a lobbying practice running 14 years straight, and a role in the 2020 Hideout annexation bill — all without ever appearing on a ballot.",
    tags: ["MIDA", "Northern Wasatch Assoc. of Realtors", "KKOS Lawyers", "Hideout Annexation"],
    dateAdded: "2026-08-31",
    dateUpdated: "2026-08-31"
  },
  {
    slug: "chris-kyler",
    name: "Chris Kyler",
    roleTag: "CEO, Utah Association of Realtors",
    summary: "Runs the statewide Realtors' association — and, through the same firm as Ostermiller, is also that association's own registered lobbyist, plus roughly 30 other paying clients including a state land agency. Never elected to anything.",
    tags: ["Utah Association of Realtors", "KKOS Lawyers", "SITLA"],
    dateAdded: "2026-08-31",
    dateUpdated: "2026-08-31"
  },
  {
    slug: "dallin-koecher",
    name: "Dallin Koecher",
    roleTag: "Wasatch Open Lands Board · Exec. Director, Heber Valley Chamber/CVB",
    summary: "Runs Heber Valley's tourism and economic development office and sits on the county board that recommends how open-space bond money gets spent. His own disclosure form lists one entity. The record shows at least four more, plus a board seat not documented anywhere else.",
    tags: ["Wasatch Open Lands Board", "CAMS", "Disclosure Gap"],
    dateAdded: "2026-09-02",
    dateUpdated: "2026-09-02"
  },
  {
    slug: "matt-brower",
    name: "Matt Brower",
    roleTag: "Heber City Manager · Hired, Not Elected",
    summary: "Runs Heber City's day-to-day government, appointed by the council he answers to. His own city hired a nonprofit he sits on the board of, without a bid — the signed contract's only City signature is his, and CAMS's own bylaws require board approval for exactly this kind of deal.",
    tags: ["CAMS", "State Auditor Complaint", "Contract Renewal", "Self-Dealing Clause"],
    dateAdded: "2026-09-02",
    dateUpdated: "2026-09-03"
  }
];

// If loaded as a module, export it; otherwise it's just available as a global.
if (typeof module !== "undefined" && module.exports) {
  module.exports = UNELECTED_POWER_PROFILES;
}
