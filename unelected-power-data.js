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
     shelf       — "100" Statewide, "200" Weber County, "300" Davis County, "400" Wasatch County (the WHERE box it sits in)
     callNumber  — the page's call number, e.g. "UP 100.03" (also printed at the bottom of the page)
*/

const UNELECTED_POWER_PROFILES = [
  {
    slug: "layton-shuffle",
    shelf: "300",
    callNumber: "UP 300.02",
    name: "The Layton Shuffle",
    roleTag: "Diagram · Six seats in Layton, South Weber and Davis County",
    summary: "Six seats across Layton, South Weber and Davis County change hands (or don't) in the same 2026 cycle. One diagram shows who is leaving, who is coming in, and how several of the seats connect.",
    tags: ["Layton", "South Weber", "Davis County", "HD16", "SD6", "Bob Stevenson", "Jerry Stevenson"],
    dateAdded: "2026-09-22",
    dateUpdated: "2026-10-27"
  },
  {
    slug: "uipa-hearing-fact-check-plain",
    shelf: "100",
    callNumber: "UP 100.05",
    name: "The Inland Port at the Legislature, in Plain Words",
    roleTag: "Plain words · Utah Inland Port Authority · Hearing Check",
    summary: "The short, plain-language version of the Inland Port hearing check: what UIPA told lawmakers on Oct. 21, 2026, and what its own records show.",
    tags: ["UIPA", "Plain Words", "Data Centers", "West Weber"],
    dateAdded: "2026-10-21",
    dateUpdated: "2026-10-27"
  },
  {
    slug: "falcon-hill-roy",
    shelf: "200",
    callNumber: "UP 200.02",
    name: "Falcon Hill and Roy",
    roleTag: "Organization · MIDA Falcon Hill Project Area · Roy City",
    summary: "MIDA's Falcon Hill Project Area, home of Northrop Grumman's Roy Innovation Center, collects property tax inside Roy City. What MIDA's own records show about the money, and how it sits next to Roy's own tax votes and its 1900 Southeast tax-increment area.",
    tags: ["MIDA", "Falcon Hill", "Roy City", "Tax Increment", "Northrop Grumman", "Hill AFB"],
    dateAdded: "2026-10-27",
    dateUpdated: "2026-10-27"
  },
  {
    slug: "uipa-hearing-fact-check",
    shelf: "100",
    callNumber: "UP 100.04",
    name: "The Inland Port at the Legislature",
    roleTag: "Organization · Utah Inland Port Authority · Hearing Check",
    summary: "UIPA's leaders told a legislative committee on Oct. 21, 2026 that UIPA has no zoning power, creates no new taxes and has given no incentives to data centers. Each claim is checked against UIPA's own plans, releases and loan letters, including two figures that don't match its own releases and an estimate of what its 75% share could total over 40 years.",
    tags: ["UIPA", "Ben Hart", "Data Centers", "Tax Differential", "AIB Loans", "West Weber", "Tooele Valley", "Golden Spike"],
    dateAdded: "2026-10-21",
    dateUpdated: "2026-10-27"
  },
  {
    slug: "steve-waldrip",
    shelf: "100",
    callNumber: "UP 100.09",
    name: "Steve Waldrip",
    roleTag: "Governor's Office · State Housing Coordinator",
    summary: "Two terms in the Utah House, then appointed Gov. Cox's Senior Advisor for Housing Strategy in Dec. 2023 — no vote required. A 2026 law made him state housing coordinator over a new division, and repealed the housing-affordability board he used to sit on.",
    tags: ["Governor's Office", "Division of Housing and Community Development", "Utah Housing Corporation", "B&C Road Funds"],
    dateAdded: "2026-08-28",
    dateUpdated: "2026-10-27"
  },
  {
    slug: "mike-ostermiller",
    shelf: "100",
    callNumber: "UP 100.07",
    name: "Mike Ostermiller",
    roleTag: "MIDA Board · CEO, Northern Wasatch Realtors",
    summary: "Never elected to anything. A seat on the Military Installation Development Authority's board since 2008, the year after MIDA was created, a lobbying practice running 14 years straight, and a role in the 2020 Hideout annexation bill — all without ever appearing on a ballot.",
    tags: ["MIDA", "Northern Wasatch Assoc. of Realtors", "KKOS Lawyers", "Hideout Annexation"],
    dateAdded: "2026-08-31",
    dateUpdated: "2026-10-27"
  },
  {
    slug: "chris-kyler",
    shelf: "100",
    callNumber: "UP 100.01",
    name: "Chris Kyler",
    roleTag: "CEO, Utah Association of Realtors",
    summary: "Runs the statewide Realtors' association — and, through the same firm as Ostermiller, is also that association's own registered lobbyist, plus roughly 30 other paying clients including a state land agency. Never elected to anything.",
    tags: ["Utah Association of Realtors", "KKOS Lawyers", "SITLA"],
    dateAdded: "2026-08-31",
    dateUpdated: "2026-10-27"
  },
  {
    slug: "dallin-koecher",
    shelf: "400",
    callNumber: "UP 400.02",
    name: "Dallin Koecher",
    roleTag: "Wasatch Open Lands Board · Exec. Director, Heber Valley Chamber/CVB",
    summary: "Runs Heber Valley's tourism and economic development office and sits on the county board that recommends how open-space bond money gets spent. His own disclosure form lists one entity. The record shows at least four more, plus a board seat not documented anywhere else.",
    tags: ["Wasatch Open Lands Board", "CAMS", "Disclosure Gap"],
    dateAdded: "2026-09-02",
    dateUpdated: "2026-10-27"
  },
  {
    slug: "matt-brower",
    shelf: "400",
    callNumber: "UP 400.03",
    name: "Matt Brower",
    roleTag: "Heber City Manager · Hired, Not Elected",
    summary: "Runs Heber City's day-to-day government, appointed by the council he answers to. His own city hired a nonprofit he sits on the board of, without a bid — the signed contract's only City signature is his, and CAMS's own bylaws require board approval for exactly this kind of deal.",
    tags: ["CAMS", "State Auditor Complaint", "Contract Renewal", "Self-Dealing Clause"],
    dateAdded: "2026-09-02",
    dateUpdated: "2026-10-27"
  },
  {
    slug: "ryan-starks",
    shelf: "100",
    callNumber: "UP 100.08",
    name: "Ryan Starks",
    roleTag: "President & Exec. Director, EDCUtah · Former GOEO Director",
    summary: "Ran the state's economic development office, then moved to lead its private-sector counterpart — under the same Chamber that received a $3.2 million taxpayer grant he approved three days before announcing the move. A 2026 state audit later found the office's oversight problems ran wider than that one grant, across nearly his entire tenure. Shares two boards (BioHive, Northern Utah Economic Alliance) with his GOEO successor, Jefferson Moss.",
    tags: ["EDCUtah", "GOEO", "Salt Lake Chamber", "Utah Rising Grant", "MIDA", "BioHive", "RGX Strategies", "OLAG 2026-18", "Northern Utah Economic Alliance", "Bob Stevenson", "EDCUtah Foundation"],
    dateAdded: "2026-09-14",
    dateUpdated: "2026-10-27"
  },
  {
    slug: "chris-roybal",
    shelf: "200",
    callNumber: "UP 200.01",
    name: "Chris Roybal",
    roleTag: "President, Northern Utah Economic Alliance",
    summary: "Manages a political action committee registered at his own home address. Since 2022 that committee has taken in tens of thousands of dollars from developers with business interests in Weber County and paid $10,000 of it to a sitting county commissioner.",
    tags: ["Northern Utah Economic Alliance", "Utah Forward PAC", "Gage Froerer", "West Weber"],
    dateAdded: "2026-09-14",
    dateUpdated: "2026-10-27"
  },
  {
    slug: "laura-warburton",
    shelf: "200",
    callNumber: "UP 200.03",
    name: "Laura Warburton",
    roleTag: "Manager, Utah Forward PAC · Director, Keep Our Valley Free",
    summary: "Managed a developer-funded PAC, directed the committee that opposed Ogden Valley City's incorporation, and sat on the very Planning Commission that reviewed the same developers' projects — including one where the PAC's own vendor is co-owned by its CFO's household.",
    tags: ["Utah Forward PAC", "Keep Our Valley Free", "Ogden Valley Planning Commission", "Eden Crossing", "Politix LLC"],
    dateAdded: "2026-09-16",
    dateUpdated: "2026-10-27"
  },
  {
    slug: "jefferson-moss",
    shelf: "100",
    callNumber: "UP 100.06",
    name: "Jefferson Moss",
    roleTag: "Executive Director, GOEO · Former House Majority Leader",
    summary: "Resigned as Utah House Majority Leader to take an appointed state economic development post — one that comes with a board seat overseeing a facility he directs, and leadership of a fund he founded that a 2025 law exempted from public-records law. Its board chair is a sitting state representative and UVU vice president; Moss himself once served as UVU Foundation COO.",
    tags: ["GOEO", "Nucleus Institute", "Point of the Mountain", "HB 530", "BioHive", "UVU Foundation", "MIDA"],
    dateAdded: "2026-09-14",
    dateUpdated: "2026-10-27"
  },
  {
    slug: "community-alliance-main-street",
    shelf: "400",
    callNumber: "UP 400.01",
    name: "Community Alliance for Main Street (CAMS)",
    roleTag: "Organization · Sole-Source City Contract",
    summary: "Runs Heber City's downtown programming under a sole-source contract negotiated, approved, and signed for the City by a board member who is also the City Manager. Three different documents give three different revenue totals for the same year, and the state's own filing lists a different board than the City or CAMS itself does.",
    tags: ["CAMS", "Matt Brower", "Sole-Source Contract", "Board Overlap", "Financial Discrepancy"],
    dateAdded: "2026-09-14",
    dateUpdated: "2026-10-27"
  },
  {
    slug: "dan-hemmert",
    shelf: "100",
    callNumber: "UP 100.02",
    name: "Dan Hemmert",
    roleTag: "Executive Director, MIDA · Former State Senator",
    summary: "Resigned from the state Senate to run the same economic development office Ryan Starks would later lead, then spent three years as a private lobbyist for developers — including Dakota Pacific Real Estate and MIDA itself — before becoming MIDA's own Executive Director. The state lobbyist register shows most of his registrations, including MIDA, ending Aug. 3, 2026, and lists other lobbyists who picked up several of his clients.",
    tags: ["MIDA", "GOEO", "Election Hive", "Lincoln Hill PAC", "LH Capital", "Regulatory Sandbox", "Dakota Pacific"],
    dateAdded: "2026-09-16",
    dateUpdated: "2026-10-27"
  },
  {
    slug: "utah-rising",
    shelf: "100",
    callNumber: "UP 100.10",
    name: "Utah Rising",
    roleTag: "Organization · Chamber-Led Economic Initiative",
    summary: "A $3.2 million taxpayer grant went to this business-led initiative — whose own governing committees include the state office that approved the grant, and a company run by the approving director's brother.",
    tags: ["Utah Rising", "GOEO", "Salt Lake Chamber", "Larry H. Miller Company", "Steve Starks", "Ryan Starks"],
    dateAdded: "2026-09-16",
    dateUpdated: "2026-10-27"
  },
  {
    slug: "edcutah",
    shelf: "100",
    callNumber: "UP 100.03",
    name: "EDCUtah",
    roleTag: "Organization · Private Business Recruiter, Public Investors",
    summary: "A private 501(c)(6) inside the Salt Lake Chamber that recruits companies and certifies 14 large development sites. The state, the Inland Port Authority and cities and counties pay in, nine public officials sit on its voting board, including Weber County Commissioner Gage Froerer, and several of its mega sites sit where data centers, CRAs and state tax credits are already in the record.",
    tags: ["EDCUtah", "Site Ready Utah", "Data Centers", "UIPA", "Ryan Starks", "Chris Roybal", "Jon Hawkins", "Val Hale", "Gage Froerer", "Ben Nadolski", "GO Utah"],
    dateAdded: "2026-10-07",
    dateUpdated: "2026-10-27"
  },
  {
    slug: "ogden-ice-unelected-enforcement",
    shelf: "200",
    callNumber: "UP 200.04",
    name: "The Ogden Officer & The ICE Agent",
    roleTag: "Ogden PD Patrol Officer · Federal ICE Agent",
    summary: "An Ogden officer stood by while a federal ICE agent detained a driver on Aug. 25, 2026 — and OPD's own account of what happened before the cameras rolled doesn't fully square with what's actually on the tape. Neither man was elected to anything, and neither answers to a single Ogden voter.",
    tags: ["Ogden PD", "ICE", "287(g)", "Immigration Enforcement"],
    dateAdded: "2026-09-17",
    dateUpdated: "2026-10-27"
  },
  {
    slug: "jed-stevenson",
    shelf: "300",
    callNumber: "UP 300.01",
    name: "Jed Stevenson",
    roleTag: "President, Academica West · Founder, One West Construction",
    summary: "Never elected, never appointed to public office. Builds Utah's charter schools through one company and manages their finances through another — the two together took at least $6.9 million from charter schools in a single year. His father held a state Senate seat for sixteen years; his business partner is the senator that seat replaced.",
    tags: ["Academica West", "One West Construction", "Career Path High", "Sheldon Killpack", "Jerry Stevenson", "Bridge Elementary", "Shed Tremonton LLC"],
    dateAdded: "2026-09-22",
    dateUpdated: "2026-10-27"
  }
];

// If loaded as a module, export it; otherwise it's just available as a global.
if (typeof module !== "undefined" && module.exports) {
  module.exports = UNELECTED_POWER_PROFILES;
}
