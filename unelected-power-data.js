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
  },
  {
    slug: "ryan-starks",
    name: "Ryan Starks",
    roleTag: "President & Exec. Director, EDCUtah · Former GOEO Director",
    summary: "Ran the state's economic development office, then moved to lead its private-sector counterpart — under the same Chamber that received a $3.2 million taxpayer grant he approved three days before announcing the move. A 2026 state audit later found the office's oversight problems ran wider than that one grant, across nearly his entire tenure. Shares two boards (BioHive, Northern Utah Economic Alliance) with his GOEO successor, Jefferson Moss.",
    tags: ["EDCUtah", "GOEO", "Salt Lake Chamber", "Utah Rising Grant", "MIDA", "BioHive", "RGX Strategies", "OLAG 2026-18"],
    dateAdded: "2026-09-14",
    dateUpdated: "2026-09-16"
  },
  {
    slug: "chris-roybal",
    name: "Chris Roybal",
    roleTag: "President, Northern Utah Economic Alliance",
    summary: "Manages a political action committee registered at his own home address. Since 2022 that committee has taken in tens of thousands of dollars from developers with business interests in Weber County and paid $10,000 of it to a sitting county commissioner.",
    tags: ["Northern Utah Economic Alliance", "Utah Forward PAC", "Gage Froerer", "West Weber"],
    dateAdded: "2026-09-14",
    dateUpdated: "2026-09-14"
  },
  {
    slug: "laura-warburton",
    name: "Laura Warburton",
    roleTag: "Manager, Utah Forward PAC · Director, Keep Our Valley Free",
    summary: "Managed a developer-funded PAC, directed the committee that opposed Ogden Valley City's incorporation, and sat on the very Planning Commission that reviewed the same developers' projects — including one where the PAC's own vendor is co-owned by its CFO's household.",
    tags: ["Utah Forward PAC", "Keep Our Valley Free", "Ogden Valley Planning Commission", "Eden Crossing", "Politix LLC"],
    dateAdded: "2026-09-16",
    dateUpdated: "2026-09-16"
  },
  {
    slug: "jefferson-moss",
    name: "Jefferson Moss",
    roleTag: "Executive Director, GOEO · Former House Majority Leader",
    summary: "Resigned as Utah House Majority Leader to take an appointed state economic development post — one that comes with a board seat overseeing a facility he directs, and leadership of a fund he founded that a 2025 law exempted from public-records law. Its board chair is a sitting state representative and UVU vice president; Moss himself once served as UVU Foundation COO.",
    tags: ["GOEO", "Nucleus Institute", "Point of the Mountain", "HB 530", "BioHive", "UVU Foundation", "MIDA"],
    dateAdded: "2026-09-14",
    dateUpdated: "2026-09-14"
  },
  {
    slug: "community-alliance-main-street",
    name: "Community Alliance for Main Street (CAMS)",
    roleTag: "Organization · Sole-Source City Contract",
    summary: "Runs Heber City's downtown programming under a sole-source contract negotiated, approved, and signed for the City by a board member who is also the City Manager. Three different documents give three different revenue totals for the same year, and the state's own filing lists a different board than the City or CAMS itself does.",
    tags: ["CAMS", "Matt Brower", "Sole-Source Contract", "Board Overlap", "Financial Discrepancy"],
    dateAdded: "2026-09-14",
    dateUpdated: "2026-09-14"
  },
  {
    slug: "dan-hemmert",
    name: "Dan Hemmert",
    roleTag: "Executive Director, MIDA · Former State Senator",
    summary: "Resigned from the state Senate to run the same economic development office Ryan Starks would later lead, then spent three years as a private lobbyist for developers — including Dakota Pacific Real Estate and MIDA itself — before becoming MIDA's own Executive Director. He terminated most of that client list in January 2026, keeping only clients with direct MIDA jurisdiction.",
    tags: ["MIDA", "GOEO", "Election Hive", "Lincoln Hill PAC", "LH Capital", "Regulatory Sandbox", "Dakota Pacific"],
    dateAdded: "2026-09-16",
    dateUpdated: "2026-09-16"
  }
];

// If loaded as a module, export it; otherwise it's just available as a global.
if (typeof module !== "undefined" && module.exports) {
  module.exports = UNELECTED_POWER_PROFILES;
}
