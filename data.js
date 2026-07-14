window.NLG_DATA = {
  lastUpdated: "Jul 12, 2026",
  hub: {
  name:"Claude, central hub",
  status:"research",
  tool:"Claude Team (planned, account not yet set up)",
  purpose:"Will coordinate every aspect of Project Dawn once live. Drafts content and communications, watches connected tools for triggers that matter, such as a lease renewal date, a new lead, or a month end close, and routes anything going out externally for approval before it sends. Still in the preliminary phase: nothing has launched yet.",
  connections:[
    "A paid Claude account on the Team plan. Pro was considered but its usage limits are too tight for a small business with multiple users",
    "Native connectors turned on for whichever tools apply: Gmail, Google Calendar, Google Drive, Dropbox, Outlook, OneDrive, Slack, Microsoft 365",
    "MCP registry connections for additional business tools as they are identified",
    "Zapier as a bridge for any tool with no direct connector of its own"
  ],
  bridgeWorkflow:"Native connectors first; Zapier as the go-between where a tool supports it",
  steps:[
    {text:"Plan chosen: Claude Team. Pro's usage limits are already tight in single-person use, so it won't hold up for a multi-user business", state:"done"},
    {text:"Set up the Claude Team account, then turn on the first native connectors: Gmail, Google Drive, Dropbox, Outlook, OneDrive", state:"now"},
    {text:"Add Zapier as a bridge once a tool without a direct connector needs to reach Claude", state:"later"},
    {text:"Keep this topology updated as each spoke moves from placeholder to live", state:"now"}
  ],
  note:"Zapier is a tool that sits between two tools that can't talk to each other directly. Since we're connecting a bunch of different systems here, some of them just aren't built to talk to each other on their own. Zapier steps in at that point as the go-between, kind of like an adapter. Something happens in one tool, Zapier notices, and makes something happen in the other one automatically. It's not free forever though, the free version only covers about 100 small actions a month, past that it's roughly $20 to $30 a month. And it only works if the tool on the other end has actually agreed to plug into it. Buildium hasn't, so that one needs a different kind of bridge instead.",
  question:null
},
  aspects: [
  { id:"marketing", name:"Marketing AI", status:"research", angle:-90,
    tool:"Meta Business Suite, SuperProfile, Claude Team",
    purpose:"Turns property content into consistent social posts, DMs, and eventually paid ads reaching the five target audiences for a listing.",
    connections:[
      "Facebook Page switched to Professional/Business account, linked to Meta Business Suite",
      "Instagram Business profile linked to the same Facebook Page",
      "Meta Ads Manager account under Business Suite, with a payment method on file",
      "Ad account level access granted, separate from page admin access",
      "SuperProfile account connected to the Instagram Business profile for AutoDM and link-in-bio",
      "Claude Team project holding brand voice, property details, and the five-audience framework"
    ],
    bridgeWorkflow:"Not yet determined",
    steps:[
      {text:"Convert the Facebook Page from personal to Professional/Business account", state:"done"},
      {text:"Link the Page to Meta Business Suite", state:"done"},
      {text:"Switch Instagram to a Business profile, connect it to the same Page", state:"done"},
      {text:"Create Meta Ads Manager under the same Business Suite account", state:"now"},
      {text:"Ad account level user access granted, payment method added", state:"now"},
      {text:"Create a SuperProfile account, go to AutoDM, connect the Instagram Business account", state:"later"},
      {text:"In AutoDM, choose Create Automation, pick a trigger such as an incoming DM or a post/reel comment, write the message, add a button or link if needed, then Confirm and Launch", state:"later"},
      {text:"Set up the SuperProfile link-in-bio page and add the link to the Instagram bio", state:"later"},
      {text:"Property, brand voice, and audience instructions kept current in the Claude Team project", state:"now"}
    ],
    note:"Only organic posting is live currently, every few days on Facebook and Instagram. Ads, AutoDM, and the link-in-bio page have not been set up yet. Ad launch is paused pending the property's Certificate of Use.",
    question:null },

  { id:"finance", name:"Finance AI", status:"research", angle:-54,
    tool:"QuickBooks Online",
    purpose:"Keeps QuickBooks data flowing into a form Claude can use, so month-end close and reporting get drafted instead of assembled by hand. Also covers contractor payment tracking and 1099 filing: every agent is a 1099 independent contractor, so this is contractor payments, not traditional payroll.",
    options:[
      "QuickBooks Contractor Payments / 1099 Center: already included in the existing QuickBooks subscription, no new cost. The first path for contractor payment tracking and 1099 filing.",
      "Gusto, Contractor Only plan: $35/month plus $6 per contractor. The alternative if QuickBooks' built-in contractor tooling falls short."
    ],
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
      {text:"Piloted on one month's close before relying on it", state:"later"}
    ],
    note:null,
    question:"Which layering tool fits best: Booke AI, Finlens, or Dext, or is a different approach preferred?" },

  { id:"brokerage", name:"Brokerage AI", status:"research", angle:-18,
    tool:"Buffini Referral Maker CRM",
    purpose:"Should eventually surface relationship touchpoints and property-related reminders sitting inside client records in Buffini. Also covers agent performance tracking (active agents, top producers) and sales/acquisition tracking across the brokerage.",
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
    purpose:"Intended to handle lease renewal reminders, maintenance follow-ups, and owner reports without manual tracking.",
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
    purpose:"Intended to handle onboarding checklists, license tracking and verification, and 1099 tax filing coordination across the agents, who are all independent contractors rather than W-2 employees.",
    options:[
      "No dedicated HR platform proposed yet. At this size, a shared onboarding checklist tracked in Notion or Drive, with Claude drafting reminders, likely covers the need without adding a paid HR system built for W-2 employees rather than independent contractor agents."
    ],
    tandem:"A shared checklist would hold the actual status per agent, and Claude would draft the nudge when something is overdue, rather than a dedicated system running its own automation.",
    connections:["To be determined"],
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
    purpose:"Intended to support compliance tracking and document review, tied to Fair Housing and NAR requirements.",
    options:[
      "Dotloop: transaction management with e-signatures and compliance tracking built in, priced for a small brokerage (around $32 to $35 per month), free tier available for low transaction volume.",
      "SkySlope: stronger compliance auditing and broker-level oversight, with an AI feature (SmartAudit) that flags missing or incomplete documents automatically, but priced for larger brokerages (typically $340 or more per month), likely more than this size needs right now."
    ],
    tandem:"Whichever platform holds the compliance checklist would flag a gap, and Claude would draft the follow-up request to the agent, with the broker approving before anything is sent or filed.",
    connections:["To be determined"],
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
    purpose:"Intended to handle inquiries from buyers, sellers, owners, and tenants outside business hours.",
    options:[
      "Quo (formerly OpenPhone): a business phone system with a built-in AI voice agent (Sona) that answers calls 24/7, texts, transcribes and summarizes every call, and tags conversations by topic. Priced per user, Business tier around $23/month, Scale tier (with the fuller AI feature set) around $35/month.",
      "A simple chat widget (Tidio or similar) on the future landing page, with Claude drafting the actual responses rather than the widget's own bot. Keeps Claude as the one thinking through every reply.",
      "A dedicated real estate chatbot platform (Crescendo.ai or similar) that handles conversations independently, end to end. Faster to stand up, but becomes a second AI system running in parallel to Claude rather than feeding into it."
    ],
    tandem:"If Quo is the pick, Sona would take the live call, then hand the transcript and summary to Claude, which drafts any follow-up message for approval before it reaches the client or gets logged in the CRM. If the widget route is chosen instead, Claude handles the conversation directly rather than a second AI system running alongside it.",
    connections:["To be determined"],
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
    purpose:"Intended to analyze investment opportunities and assets under management: underwriting, cash flow analysis, cap rate and IRR calculations, risk scoring, comparable sales analysis, and acquisition recommendations.",
    options:[
      "Stessa: free, built for individual investors and smaller portfolios, proportionate to this scale. Tracks income, expenses, and returns per property.",
      "Institutional platforms (Agora, ARGUS Enterprise, RealPage AIM): built for much larger funds and portfolios, would be overkill here."
    ],
    connections:["To be determined"],
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
    purpose:"Grouped placeholder for two aspects on the NLG-AIOS list that have not been started: Capital Raising AI and Construction & Development AI.",
    options:[
      "Capital raising: SyndicationPro, real estate syndication software with an investor CRM, capital-raise workflows, and an investor portal, sized for small and mid-size sponsors. InvestNext is the closest alternative, stronger on distribution waterfalls. Institutional platforms like Juniper Square run $30K+/year, overkill here.",
      "Construction & development: Buildertrend, residential construction project management (scheduling, budgets, client portal, change orders) with unlimited users, starting around $499/month. Procore is the commercial-scale alternative at $20K+/year, built for much larger operations."
    ],
    connections:["To be determined"],
    bridgeWorkflow:"Not yet determined",
    steps:[{text:"Revisited once the core aspects above are underway", state:"later"}],
    note:"Grouped only to keep the map readable. Each is still its own aspect on the full roadmap. Investment AI was pulled out of this group into its own node.",
    question:"Which of these two (capital raising, construction) is the priority once started?" },
]
};
