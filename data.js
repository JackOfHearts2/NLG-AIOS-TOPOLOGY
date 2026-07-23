window.NLG_DATA = {
  lastUpdated: "Jul 12, 2026",
  hub: {
  name:"Claude, central hub",
  status:"research",
  tool:"Claude Team (planned, account not yet set up)",
  cost:{ low:141, high:180, display:"$141–180/mo, all new — New Level has no Claude account yet", label:"Claude Team $100–125, Zapier Professional $20–30, Google Workspace Business Starter (3 seats) $21–25" },
  purpose:"Will coordinate every aspect of Project Dawn once live. Drafts content and communications, watches connected tools for triggers that matter, such as a lease renewal date, a new lead, or a month end close, and routes anything going out externally for approval before it sends. Still in the preliminary phase: nothing has launched yet.",
  connections:[
    "A paid Claude account on the Team plan. Pro was considered but its usage limits are too tight for a small business with multiple users",
    "Native connectors turned on for whichever tools apply: Gmail, Google Calendar, Google Drive, Dropbox, Outlook, OneDrive, Slack, Microsoft 365",
    "MCP registry connections for additional business tools as they are identified",
    "Zapier as a bridge for any tool with no direct connector of its own"
  ],
  bridgeWorkflow:"Native connectors first; Zapier as the go-between where a tool supports it",
  steps:[
    {text:"Plan chosen: Claude Team. New Level has no Claude account yet, and Pro's per-person usage limits are too tight for a business with multiple users, so New Level starts fresh on Team", state:"done"},
    {text:"Set up New Level's Claude Team account, then turn on the first native connectors: Gmail, Google Drive, Dropbox, Outlook, OneDrive", state:"now"},
    {text:"Add Zapier as a bridge once a tool without a direct connector needs to reach Claude", state:"later"},
    {text:"Keep this topology updated as each spoke moves from placeholder to live", state:"now"}
  ],
  note:"Zapier is a tool that sits between two tools that can't talk to each other directly. Since we're connecting a bunch of different systems here, some of them just aren't built to talk to each other on their own. Zapier steps in at that point as the go-between, kind of like an adapter. Something happens in one tool, Zapier notices, and makes something happen in the other one automatically. It's not free forever though, the free version only covers about 100 small actions a month, past that it's roughly $20 to $30 a month. And it only works if the tool on the other end has actually agreed to plug into it. Buildium hasn't, so that one needs a different kind of bridge instead.",
  question:null
},
  aspects: [
  { id:"marketing", name:"Marketing AI", status:"research", angle:-90,
    tool:"Meta Business Suite, Meta AI, Canva, Claude Team, SuperProfile (if needed), Google Ads (future)",
    cost:{ low:13, high:18, label:"Canva Pro $13–18. Meta ads run on their own ad budget (not counted here); Meta AI is free. SuperProfile Premium ($29–35) added only if DM and inquiry volume demands it." },
    purpose:"Turns property content into a steady, on-brand marketing presence across social posts, DMs, and paid ads, reaching the five target audiences for a listing. Each tool owns a piece: Meta Business Suite runs the organic Facebook and Instagram posting and the now-live paid ad campaign through Ads Manager, with Meta's own free AI assisting on ad copy and creative; Canva produces the visuals; and the Claude Team project holds the brand voice, property details, and five-audience framework that ties it all together. SuperProfile is held in reserve for automated DMs and a link-in-bio, to add only if inbound DMs and inquiries outgrow handling them by hand.",
    options:[
      "Meta Business Suite (in use): the free control panel for the Facebook Page and Instagram Business profile. Runs organic posting and the now-live paid ad campaign through Meta Ads Manager. The confirmed backbone of this spoke, not just a candidate.",
      "Meta AI (free, inside Ads Manager, in use): Meta's built-in AI for ad creation, generating copy variations, image backgrounds, and audience suggestions right in Business Suite. Free with the ad account, so it serves as a first-pass assist alongside Claude's own drafting.",
      "Canva Pro (one seat): listing flyers, social graphics, and branded templates. Recommended and being set up. This is the anchor Canva subscription, and Brokerage, Client Experience, and capital-raising materials all draw from this same seat, no separate cost.",
      "Claude Team: the brain of the spoke. Drafts every post, caption, and DM, keeps the five-audience framework and brand voice current, and routes anything outbound for approval before it publishes.",
      "SuperProfile Premium (held in reserve, only if needed): automated Instagram DMs (AutoDM) and a link-in-bio page, so first-touch replies and lead routing happen without anyone watching the inbox. Added only if DM and inquiry volume grows past what the team can handle by hand, in keeping with the start-small approach.",
      "Google Ads (future mention, not yet recommended): paid search and display ad space is a likely next expansion once organic posting and Meta ads are proven. It supplements the Meta ad channel rather than replacing it; other ad formats and channels can follow after that."
    ],
    connections:[
      "Facebook Page switched to Professional/Business account, linked to Meta Business Suite",
      "Instagram Business profile linked to the same Facebook Page",
      "Meta Ads Manager account under Business Suite, with a payment method on file",
      "Ad account level access granted, separate from page admin access",
      "Canva account (paid tier) with the property's brand kit, connected to Claude through Canva's MCP connector",
      "SuperProfile account connected to the Instagram Business profile for AutoDM and link-in-bio, only if and when DM volume warrants it",
      "Claude Team project holding brand voice, property details, and the five-audience framework"
    ],
    bridgeWorkflow:"Canva connects to Claude through its MCP server: once the broker picks Canva from the connector picker, Claude can search, get a design, autofill templates, and export, the same pattern as any other MCP tool here. Meta and SuperProfile paths still to be determined.",
    steps:[
      {text:"Convert the Facebook Page from personal to Professional/Business account", state:"done"},
      {text:"Link the Page to Meta Business Suite", state:"done"},
      {text:"Switch Instagram to a Business profile, connect it to the same Page", state:"done"},
      {text:"Create Meta Ads Manager under the same Business Suite account", state:"done"},
      {text:"Ad account level user access granted, payment method added", state:"done"},
      {text:"Only if DMs and inquiries outgrow handling them by hand: create a SuperProfile account, go to AutoDM, connect the Instagram Business account", state:"later"},
      {text:"In AutoDM, choose Create Automation, pick a trigger such as an incoming DM or a post/reel comment, write the message, add a button or link if needed, then Confirm and Launch", state:"later"},
      {text:"Set up the SuperProfile link-in-bio page and add the link to the Instagram bio", state:"later"},
      {text:"Property, brand voice, and audience instructions kept current in the Claude Team project", state:"now"},
      {text:"Create a Canva account on a paid tier (Canva Pro or Teams), the connector and brand features need a paid plan", state:"now"},
      {text:"Build the property brand kit in Canva: logo, fonts, colors, and a few reusable post and poster templates", state:"now"},
      {text:"In Claude, open Settings, Connectors, find Canva and connect the Canva account when prompted", state:"later"},
      {text:"Test the loop end to end: Claude drafts a post, generates the Canva graphic on brand, broker approves, then it publishes", state:"later"},
      {text:"Once organic posting and Meta ads are proven, evaluate Google Ads as an added paid channel, with other ad formats considered after that", state:"later"},
      {text:"Meta ad campaign launched and running on Facebook and Instagram, managed through Ads Manager in Business Suite", state:"done"},
      {text:"Meta AI used inside Ads Manager as a free first-pass assist for ad copy and creative", state:"done"}
    ],
    note:"Organic posting and a paid Meta ad campaign are now live on Facebook and Instagram, the ads managed in Ads Manager with help from Meta's free built-in AI. Canva is the next near-term add; SuperProfile's AutoDM and link-in-bio stay held back until inbound volume demands it. The approach across the whole map is to start small and add each tool when it becomes necessary, rather than stacking them all up front.",
    question:null },

  { id:"finance", name:"Finance AI", status:"research", angle:-54,
    tool:"QuickBooks Online",
    cost:{ low:0, high:0, display:"Existing, no new cost (QuickBooks Online)" },
    purpose:"Keeps QuickBooks data flowing into a form Claude can use, so month-end close and reporting get drafted instead of assembled by hand. Also covers contractor payment tracking and 1099 filing: every agent is a 1099 independent contractor, so this is contractor payments, not traditional payroll.",
    options:[
      "QuickBooks Online (in use): the confirmed system of record for all books. Everything else layers on top of it; nothing replaces it.",
      "A layering tool, one to be chosen (Booke AI, Finlens, or Dext): sits between QuickBooks and Claude to categorize transactions, capture receipts, or build GAAP schedules, then feeds clean numbers to Claude. Recommended once the specific need is pinned down; which one depends on that need.",
      "QuickBooks Contractor Payments / 1099 Center: already included in the existing QuickBooks subscription, no new cost. The first path for contractor payment tracking and 1099 filing.",
      "Gusto, Contractor Only plan: a supplement to QuickBooks' contractor tooling at $35/month plus $6 per contractor. Just a mention for now, worth it only if QuickBooks' built-in 1099 handling falls short."
    ],
    tandem:"QuickBooks stays the system of record. A layering tool reads its data through the QuickBooks API and hands Claude clean, categorized numbers; Claude then drafts the month-end close, the reports, and the 1099 filings, and the broker approves before anything is finalized.",
    connections:[
      "QuickBooks Online account (already in use, confirmed system of record)",
      "QuickBooks Contractor Payments / 1099 Center for contractor payment tracking and 1099 filing",
      "A layering tool once selected (Booke AI, Finlens, or Dext) connected through QuickBooks' own API",
      "Zapier as a fallback bridge if the chosen tool doesn't connect to Claude directly"
    ],
    bridgeWorkflow:"Not yet determined",
    steps:[
      {text:"Confirm the QuickBooks Online plan supports API access (most do)", state:"later"},
      {text:"Pick one layering tool based on the actual need: categorization, receipts, or GAAP schedules", state:"later"},
      {text:"Connection to QuickBooks authorized for that tool, within QuickBooks itself", state:"later"},
      {text:"Claude given access to that tool's output, directly or through Zapier", state:"later"},
      {text:"Piloted on one month's close before relying on it", state:"later"},
      {text:"Draft-and-approve loop set: Claude drafts the close, reports, and 1099 filings, the broker reviews and approves before they are finalized", state:"later"}
    ],
    note:null,
    question:"Which layering tool fits best: Booke AI, Finlens, or Dext, or is a different approach preferred?" },

  { id:"brokerage", name:"Brokerage AI", status:"research", angle:-18,
    tool:"Buffini Referral Maker CRM",
    cost:{ low:0, high:0, display:"Existing, no new cost (Buffini Referral Maker CRM already in use)" },
    purpose:"Should eventually surface relationship touchpoints and property-related reminders sitting inside client records in Buffini. Also covers agent performance tracking (active agents, top producers) and sales/acquisition tracking across the brokerage.",
    options:[
      "Buffini Referral Maker CRM (in use): the confirmed CRM holding client records, relationship touchpoints, and reminders. The open question is access for Claude, not whether to adopt it.",
      "A source for agent-performance and sales data, to be confirmed: whatever system holds active-agent and top-producer numbers, so Claude can surface them alongside the CRM reminders.",
      "Canva: CMA presentation visuals and listing flyers agents can self-serve from shared templates. Recommended, shares the Marketing AI Canva Pro seat, no added cost."
    ],
    tandem:"Buffini holds the relationship and reminder data. Once a way in is confirmed, Claude reads it, drafts the touchpoint or reminder, and routes it to the agent or broker for approval before it sends. Agent-performance figures feed the same detect, draft, approve loop once a source is confirmed.",
    connections:[
      "Buffini Referral Maker CRM account (confirmed in use)",
      "Unconfirmed: no built-in AI agent, no confirmed API or export function found publicly",
      "A source for agent performance and sales/acquisition data, once one is confirmed"
    ],
    bridgeWorkflow:"Not yet determined",
    steps:[
      {text:"Confirmation gathered on whether API access, data export, or webhook support is available", state:"later"},
      {text:"A path chosen based on that answer: scheduled export to Drive, Claude in Chrome browsing the dashboard, or reading Buffini's own notification emails through Gmail", state:"later"},
      {text:"The detect, notify, draft, approve, send workflow designed once the path is known", state:"later"},
      {text:"Piloted on one reminder type before expanding", state:"later"}
    ],
    note:null,
    question:"Does Buffini support API access, data export, or webhook integration?" },

  { id:"propmgmt", name:"Prop. mgmt AI", status:"research", angle:18,
    tool:"Buildium (confirmed in use)",
    cost:{ low:400, high:400, label:"Buildium Premium $400" },
    purpose:"Intended to handle lease renewal reminders, maintenance follow-ups, and owner reports without manual tracking. Buildium is the system of record for leases and maintenance; Claude reads from it and drafts the outbound reminders and reports.",
    options:[
      "Buildium (in use): the confirmed platform holding leases, rent, maintenance requests, and owner reports. AppFolio was considered but lost out.",
      "Buildium Premium ($400/mo): the tier that unlocks Buildium's API for a direct Claude connection. The open question is whether it is worth it versus a lighter bridge such as scheduled exports or reading Buildium's notification emails.",
      "Canva: could supplement owner reports and tenant notices with branded layouts, sharing the Marketing AI seat at no added cost. A mention, not yet recommended."
    ],
    tandem:"Buildium holds the lease and maintenance dates and surfaces the trigger, Claude drafts the reminder, and it goes to the broker for approval before it sends to the tenant or owner.",
    connections:[
      "Buildium account (confirmed in use)",
      "Buildium's native, built-in QuickBooks integration, no bridge needed on that link",
      "A path for Claude to reach Buildium data: Buildium's own API sits behind the $400/month Premium plan, and Buildium has no native Zapier support at all"
    ],
    bridgeWorkflow:"Not yet determined",
    steps:[
      {text:"See how leases, renewals, and maintenance are tracked today", state:"now"},
      {text:"Platform confirmed: Buildium, already in use (AppFolio considered but lost out)", state:"done"},
      {text:"Connection method determined once the tool is confirmed", state:"later"},
      {text:"Reminder workflow designed: detect the date, notify Claude, draft the message, get approval, send", state:"later"}
    ],
    note:"Buildium already integrates natively with QuickBooks, so the finance link needs no bridge. Custom connections of the kind Claude would need are a different story: Buildium's API is gated behind the $400/month Premium plan and there is no native Zapier support. This detect, notify, draft, approve, send pattern is the model used across every aspect, not only this one.",
    question:"Is the $400/month Premium plan worth it for API access, or is a lighter bridge enough to start?" },

  { id:"hr", name:"HR AI", status:"proposed", angle:54,
    tool:"Proposed: Notion shared tracker",
    cost:{ low:0, high:0, display:"$0/mo — no new tool needed", label:"Rides on existing QuickBooks 1099 filing plus Claude and Calendar reminders" },
    purpose:"Intended to handle onboarding checklists, license tracking and verification, and 1099 tax filing coordination across the agents, who are all independent contractors rather than W-2 employees.",
    options:[
      "Shared checklist in Notion or Google Drive (recommended): the lightweight tracker itself, holding onboarding, license, and 1099 status per agent. No new cost if Notion or Drive is already in the stack.",
      "Claude plus Google Calendar: drafts the nudges and reminders, using Calendar dates for license renewals and 1099 deadlines.",
      "No dedicated HR platform: a paid HR system is built for W-2 employees, not 1099 independent contractor agents, so it would be overkill. Considered and set aside."
    ],
    tandem:"A shared checklist holds the actual status per agent, Google Calendar holds the dates, and Claude drafts the nudge when something is overdue, rather than a dedicated system running its own automation.",
    connections:[
      "A shared checklist location (Notion or Google Drive)",
      "Google Calendar for license-renewal and 1099 dates",
      "Claude Team access to both, to read status and draft reminders for approval"
    ],
    bridgeWorkflow:"Not yet determined",
    steps:[
      {text:"Current onboarding and recruiting process reviewed", state:"now"},
      {text:"Confirmed whether a lightweight tracker is sufficient or a dedicated platform is truly needed", state:"later"},
      {text:"Connection method determined", state:"later"}
    ],
    note:"Settled: no dedicated HR platform. A lightweight shared tracker covers a team of independent contractors; 1099 filing itself lives with Finance AI.",
    question:"Which contractor task should Claude draft reminders for first: onboarding checklists, license renewals, or 1099 season?" },

  { id:"legal", name:"Legal AI", status:"proposed", angle:90,
    tool:"Proposed: Dotloop",
    cost:{ low:32, high:35, label:"Dotloop Premium $32–35" },
    purpose:"Intended to support compliance tracking and document review, tied to Fair Housing and NAR requirements.",
    options:[
      "Dotloop: transaction management with e-signatures and compliance tracking built in, priced for a small brokerage (around $32 to $35 per month), free tier available for low transaction volume.",
      "SkySlope: stronger compliance auditing and broker-level oversight, with an AI feature (SmartAudit) that flags missing or incomplete documents automatically, but priced for larger brokerages (typically $340 or more per month), likely more than this size needs right now."
    ],
    tandem:"Whichever platform holds the compliance checklist would flag a gap, and Claude would draft the follow-up request to the agent, with the broker approving before anything is sent or filed.",
    connections:[
      "The chosen platform's compliance checklist as the source of truth (Dotloop or SkySlope)",
      "A path for Claude to read gaps: the platform's API, a data export, or reading its notification emails through Gmail",
      "Claude Team access to draft the follow-up request, with the broker approving before anything is sent or filed"
    ],
    bridgeWorkflow:"Not yet determined",
    steps:[
      {text:"Current compliance and document review process mapped", state:"now"},
      {text:"One platform chosen based on transaction volume and budget", state:"later"},
      {text:"Connection method determined", state:"later"}
    ],
    note:"Ties directly to the Real Estate Compliance resource category (Fair Housing, NAR materials).",
    question:"Is Dotloop's transaction volume and pricing enough here, or does compliance oversight need to be stronger than that?" },

  { id:"clientexp", name:"Client exp. AI", status:"proposed", angle:126,
    tool:"Proposed: Quo (formerly OpenPhone)",
    cost:{ low:25, high:26, label:"OpenPhone (Quo) Business $23 plus about $2–3 texting. Canva shares the Marketing AI seat, no added cost." },
    purpose:"Intended to handle inquiries from buyers, sellers, owners, and tenants outside business hours.",
    options:[
      "Quo (formerly OpenPhone): a business phone system with a built-in AI voice agent (Sona) that answers calls 24/7, texts, transcribes and summarizes every call, and tags conversations by topic. Priced per user, Business tier around $23/month, Scale tier (with the fuller AI feature set) around $35/month.",
      "A simple chat widget (Tidio or similar) on the future landing page, with Claude drafting the actual responses rather than the widget's own bot. Keeps Claude as the one thinking through every reply.",
      "A dedicated real estate chatbot platform (Crescendo.ai or similar) that handles conversations independently, end to end. Faster to stand up, but becomes a second AI system running in parallel to Claude rather than feeding into it.",
      "Canva: branded client-facing documents such as welcome packets and closing gift cards. Shares the Marketing AI Canva Pro seat, no added cost."
    ],
    tandem:"If Quo is the pick, Sona would take the live call, then hand the transcript and summary to Claude, which drafts any follow-up message for approval before it reaches the client or gets logged in the CRM. If the widget route is chosen instead, Claude handles the conversation directly rather than a second AI system running alongside it.",
    connections:[
      "The chosen channel: Quo's phone line and AI voice agent, a web chat widget, or a standalone platform",
      "Call transcripts and summaries routed to Claude after each conversation",
      "The CRM (Buffini) for logging follow-ups, and Claude Team access to draft them for approval"
    ],
    bridgeWorkflow:"Not yet determined",
    steps:[
      {text:"Current inquiry handling process reviewed", state:"now"},
      {text:"A direction chosen: Quo's voice agent, a widget plus Claude, or a standalone platform", state:"later"},
      {text:"Connection method determined", state:"later"}
    ],
    note:null,
    question:"Does Quo's phone-based approach fit better than a web chat widget, given how most inquiries actually come in today?" },

  { id:"executive", name:"Executive AI", status:"proposed", angle:162,
    tool:"Proposed: Notion dashboards",
    cost:{ low:0, high:0, display:"Not yet scoped (Notion dashboards)" },
    purpose:"Intended as the one dashboard giving visibility across every aspect once they are running.",
    options:[
      "Notion dashboard views: since Notion is already the planned knowledge base in the broker's own technology stack, its newer dashboard feature can combine KPIs from other tools without adding a separate subscription.",
      "Looker Studio: free, connects natively to Google-ecosystem data, becomes more manual as more non-Google tools get added.",
      "Geckoboard: built specifically for a simple wall or screen display of a handful of numbers, worth considering if the goal really is a literal always-on screen rather than a page to check."
    ],
    tandem:"This one sits downstream of every other hub rather than connecting to anything directly. Once Marketing, Finance, and Brokerage AI are live, their summary numbers would feed into whichever tool gets picked here.",
    connections:["To be determined, depends on every other spoke existing first"],
    bridgeWorkflow:"Not yet determined",
    steps:[
      {text:"What matters most on a single dashboard defined", state:"later"},
      {text:"Data sources identified once other aspects are live", state:"later"},
      {text:"One tool chosen once there is real data to display", state:"later"}
    ],
    note:"Likely the last aspect built, since it pulls from every other hub once they exist.",
    question:"What information matters most on a single dashboard view?" },

  { id:"investment", name:"Investment AI", status:"proposed", angle:198, priority:true,
    tool:"Proposed: Stessa",
    cost:{ low:0, high:35, label:"Stessa, free tier or $20–35 Pro" },
    purpose:"Intended to analyze investment opportunities and assets under management: underwriting, cash flow analysis, cap rate and IRR calculations, risk scoring, comparable sales analysis, and acquisition recommendations.",
    options:[
      "Stessa (recommended to start): free, built for individual investors and smaller portfolios, proportionate to this scale. Tracks income, expenses, and returns per property, then Claude layers underwriting, cap-rate, and IRR analysis on top.",
      "Institutional platforms (Agora, ARGUS Enterprise, RealPage AIM): built for much larger funds and portfolios, would be overkill here. A mention, not recommended at this size."
    ],
    tandem:"Stessa holds the per-property income, expense, and return data; Claude reads it to run underwriting, cash-flow, cap-rate and IRR math, risk scoring, and comparable-sales analysis, then drafts an acquisition recommendation for the broker to weigh.",
    connections:[
      "A Stessa account holding the portfolio's income, expense, and performance data",
      "A path for Claude to reach that data: Stessa's own sharing or export, with Zapier as a fallback bridge",
      "Claude Team access to run the analysis and draft recommendations for review"
    ],
    bridgeWorkflow:"Not yet determined",
    steps:[
      {text:"Confirm actual portfolio size and what needs tracking", state:"later"},
      {text:"Evaluate Stessa against that need", state:"later"},
      {text:"Connection method determined", state:"later"}
    ],
    note:null,
    question:"Does Stessa's free tier cover what's actually being tracked, or does portfolio complexity call for something more?" },

  { id:"other", name:"Future AI (2)", status:"not-started", angle:234,
    tool:"Proposed: SyndicationPro (capital raising), Buildertrend (construction)",
    cost:{ low:0, high:0, display:"Not yet scoped — not started" },
    purpose:"Grouped placeholder for two aspects on the NLG-AIOS list that have not been started: Capital Raising AI and Construction & Development AI.",
    options:[
      "Capital raising: SyndicationPro, real estate syndication software with an investor CRM, capital-raise workflows, and an investor portal, sized for small and mid-size sponsors. InvestNext is the closest alternative, stronger on distribution waterfalls. Institutional platforms like Juniper Square run $30K+/year, overkill here.",
      "Construction & development: Buildertrend, residential construction project management (scheduling, budgets, client portal, change orders) with unlimited users, starting around $499/month. Procore is the commercial-scale alternative at $20K+/year, built for much larger operations.",
      "Canva: investor pitch decks and offering summary visuals for capital raising. Shares the Marketing AI Canva Pro seat, no added cost."
    ],
    tandem:"Each will follow the same detect, draft, approve, send pattern as the live spokes once started: the platform holds the data, Claude drafts the outreach or report, and the broker approves before anything goes out.",
    connections:["To be determined once each aspect is started"],
    bridgeWorkflow:"Not yet determined",
    steps:[{text:"Revisited once the core aspects above are underway", state:"later"}],
    note:"Grouped only to keep the map readable. Each is still its own aspect on the full roadmap. Investment AI was pulled out of this group into its own node.",
    question:"Which of these two (capital raising, construction) is the priority once started?" },
]
};
