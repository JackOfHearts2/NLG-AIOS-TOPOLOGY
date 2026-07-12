window.NLG_DATA = {
  hub: {
  name:"Claude, central hub",
  status:"active",
  tool:"Claude (Pro / Max / Team)",
  purpose:"Coordinates every aspect of Project Dawn. Drafts content and communications, watches connected tools for triggers that matter, such as a lease renewal date, a new lead, or a month end close, and routes anything going out externally for approval before it sends.",
  connections:[
    "A paid Claude account (Pro is enough to start, Cowork is included from Pro and up)",
    "Native connectors turned on for whichever tools apply: Google Drive, Gmail, Calendar, Slack, Microsoft 365",
    "MCP registry connections for additional business tools as they are identified",
    "Zapier as a bridge for any tool with no direct connector of its own"
  ],
  steps:[
    "Confirm which Claude plan is active for this work",
    "Turn on the native connectors that matter first, usually Gmail and Drive",
    "Add Zapier as a bridge once a tool without a direct connector needs to reach Claude",
    "Keep this topology updated as each spoke moves from placeholder to live"
  ],
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
    steps:[
      "Convert the Facebook Page from personal to Professional/Business account",
      "Link the Page to Meta Business Suite",
      "Switch Instagram to a Business profile, connect it to the same Page",
      "Create Meta Ads Manager under the same Business Suite account",
      "Ad account level user access granted, payment method added",
      "Create a SuperProfile account, go to AutoDM, connect the Instagram Business account",
      "In AutoDM, choose Create Automation, pick a trigger such as an incoming DM or a post/reel comment, write the message, add a button or link if needed, then Confirm and Launch",
      "Set up the SuperProfile link-in-bio page and add the link to the Instagram bio",
      "Property, brand voice, and audience instructions kept current in the Claude Team project"
    ],
    note:"Only organic posting is live currently, every few days on Facebook and Instagram. Ads, AutoDM, and the link-in-bio page have not been set up yet. Ad launch is paused pending the property's Certificate of Use.",
    question:null },

  { id:"finance", name:"Finance AI", status:"research", angle:-50,
    tool:"QuickBooks Online",
    purpose:"Keeps QuickBooks data flowing into a form Claude can use, so month-end close and reporting get drafted instead of assembled by hand.",
    connections:[
      "QuickBooks Online account (already in use, confirmed system of record)",
      "A layering tool once selected (Booke AI, Finlens, or Dext) connected through QuickBooks' own API",
      "Zapier as a fallback bridge if the chosen tool doesn't connect to Claude directly"
    ],
    steps:[
      "Confirm the QuickBooks Online plan supports API access (most do)",
      "Pick one layering tool based on the actual need: categorization, receipts, or GAAP schedules",
      "Connection to QuickBooks authorized for that tool, within QuickBooks itself",
      "Claude given access to that tool's output, directly or through Zapier",
      "Piloted on one month's close before relying on it"
    ],
    note:null,
    question:"Which layering tool fits best: Booke AI, Finlens, or Dext, or is a different approach preferred?" },

  { id:"brokerage", name:"Brokerage AI", status:"research", angle:-10,
    tool:"Buffini Referral Maker CRM",
    purpose:"Should eventually surface relationship touchpoints and property-related reminders sitting inside client records in Buffini.",
    connections:[
      "Buffini Referral Maker CRM account (confirmed in use)",
      "Unconfirmed: no built-in AI agent, no confirmed API or export function found publicly"
    ],
    steps:[
      "Confirmation gathered on whether API access, data export, or webhook support is available",
      "A path chosen based on that answer: scheduled export to Drive, Claude in Chrome browsing the dashboard, or reading Buffini's own notification emails through Gmail",
      "The detect, notify, draft, approve, send workflow designed once the path is known",
      "Piloted on one reminder type before expanding"
    ],
    note:null,
    question:"Does Buffini support API access, data export, or webhook integration?" },

  { id:"propmgmt", name:"Prop. mgmt AI", status:"not-started", angle:30,
    tool:"Not yet identified",
    purpose:"Intended to handle lease renewal reminders, maintenance follow-ups, and owner reports without manual tracking.",
    connections:["To be determined after this week's process walkthrough"],
    steps:[
      "See how leases, renewals, and maintenance are tracked today",
      "Tool in use identified, or confirmed to be spreadsheet or manual",
      "Connection method determined",
      "Reminder workflow designed: detect the date, notify Claude, draft the message, get approval, send"
    ],
    note:"This detect, notify, draft, approve, send pattern is the model used across every aspect, not only this one.",
    question:"Which platform or process currently handles lease renewals and maintenance tracking?" },

  { id:"hr", name:"HR AI", status:"not-started", angle:70,
    tool:"Not yet identified",
    purpose:"Intended to handle onboarding checklists and license tracking across the independent contractor agents.",
    connections:["To be determined"],
    steps:["Current onboarding and recruiting process reviewed","Tool in use identified, if any","Connection method determined"],
    note:null,
    question:"Which platform, if any, currently handles onboarding and license tracking for agents?" },

  { id:"legal", name:"Legal AI", status:"not-started", angle:110,
    tool:"Not yet identified",
    purpose:"Intended to support compliance tracking and document review, tied to Fair Housing and NAR requirements.",
    connections:["To be determined"],
    steps:["Current compliance and document review process mapped","Tool in use identified, if any","Connection method determined"],
    note:"Ties directly to the Real Estate Compliance resource category (Fair Housing, NAR materials).",
    question:"Which platform or process currently handles compliance tracking and document review?" },

  { id:"clientexp", name:"Client exp. AI", status:"not-started", angle:150,
    tool:"Not yet identified",
    purpose:"Intended to handle inquiries from buyers, sellers, owners, and tenants outside business hours.",
    connections:["To be determined"],
    steps:["Current inquiry handling process reviewed","Tool in use identified, if any","Connection method determined"],
    note:null,
    question:"Which platform, if any, currently handles buyer, seller, owner, and tenant inquiries?" },

  { id:"executive", name:"Executive AI", status:"not-started", angle:190,
    tool:"Not yet identified",
    purpose:"Intended as the one dashboard giving visibility across every aspect once they are running.",
    connections:["To be determined, depends on every other spoke existing first"],
    steps:["What matters most on a single dashboard defined","Data sources identified once other aspects are live"],
    note:"Likely the last aspect built, since it pulls from every other hub once they exist.",
    question:"What information matters most on a single dashboard view?" },

  { id:"other", name:"Other AI (3)", status:"not-started", angle:230,
    tool:"Investment AI, Capital Raising AI, Construction & Development AI",
    purpose:"Grouped placeholder for three aspects on the NLG-AIOS list that have not been started.",
    connections:["To be determined"],
    steps:["Revisited once the core aspects above are underway"],
    note:"Grouped only to keep the map readable. Each is still its own aspect on the full roadmap.",
    question:"Which of these three (investment, capital raising, construction) is the priority once started?" },
]
};
