/**
 * Litigation and proceedings involving Valve / Steam shown on the home page.
 * Add entries here to list a matter with summaries and links to official sources.
 */
export type Audience = 'consumer' | 'developer' | 'both';

/** Flag emoji and display label per region (for filter and dropdown) */
export const regionFlags: Record<string, string> = {
	UK: '🇬🇧',
	US: '🇺🇸',
	EU: '🇪🇺',
};

export const regionLabels: Record<string, string> = {
	UK: 'United Kingdom',
	US: 'United States',
	EU: 'European Union',
};

export function getRegionFlag(region: string): string {
	return regionFlags[region] ?? region;
}

export function getRegionLabel(region: string): string {
	return regionLabels[region] ?? region;
}

/** Status of a case milestone for the status bar */
export type MilestoneStatus = 'completed' | 'current' | 'upcoming';

export interface StatusMilestone {
	/** Short label (e.g. "Filed", "Certification pending") */
	label: string;
	/** Optional date (e.g. "5 June 2024") */
	date?: string;
	/** completed = done, current = in progress, upcoming = not yet */
	status: MilestoneStatus;
}

/** Full-width deadline bar (dates as YYYY-MM-DD, UTC calendar-day math in the widget script) */
export interface DeadlineProgressBarConfig {
	title: string;
	periodStart: string;
	periodEnd: string;
	footnote?: string;
}

export interface Lawsuit {
	/** Unique id (used for anchor and DOM) */
	id: string;
	/** Display name */
	name: string;
	/** Region/country (e.g. UK, US) */
	region: string;
	/** Who this affects */
	audience: Audience;
	/** One-line description shown in the dropdown header */
	shortDescription: string;
	/** Body paragraphs (each string is one paragraph) */
	content: string[];
	/** Optional: official opt-out / notice URL */
	optOutLink?: string;
	/** Optional: official opt-in URL (e.g. non-UK-domiciled class members) */
	optInLink?: string;
	/** Optional: important documents / court papers URL */
	documentsLink?: string;
	/** Optional: label for documentsLink (default: "Important documents (court papers, notices)") */
	documentsLinkLabel?: string;
	/** Optional: additional document links (e.g. court papers, funding agreement PDFs) */
	documentLinks?: { label: string; href: string }[];
	/** Optional: opt-out or other key deadline */
	deadline?: string;
	/** If true, people are included by default and must opt out */
	optInByDefault?: boolean;
	/** Optional: "What you can do" items shown in the dropdown (string or { text, href }) */
	whatYouCanDo?: (string | { text: string; href?: string })[];
	/** Optional: case status milestones for the status bar (filing, amendments, certification, etc.) */
	statusMilestones?: StatusMilestone[];
	/** Optional: full-width progress bar for the active opt-out / opt-in (or similar) window */
	deadlineProgressBar?: DeadlineProgressBarConfig;
}

export const lawsuits: Lawsuit[] = [
	{
		id: 'uk-steam-you-owe-us',
		name: 'Steam You Owe Us',
		region: 'UK',
		audience: 'consumer',
		shortDescription: 'UK opt-out collective proceedings at the CAT (certified; opt-out/opt-in window open).',
		content: [
			'The public name Steam You Owe Us refers to collective proceedings at the Competition Appeal Tribunal (CAT): Vicki Shotbolt Class Representative Limited v Valve Corporation (Case 1640/7/7/24). The class representative alleges that Valve abused a dominant position (including commission and platform rules) and that affected consumers are owed compensation. The Tribunal granted a collective proceedings order (CPO) on an opt-out basis in [2026] CAT 4 (judgment published 26 January 2026). A Collective Proceedings Order was made on 11 March 2026. The links below include the Tribunal notice, judgments, and the claimant’s site for full detail.',
			'The class period in the Tribunal-directed notice runs from 4 June 2018 to 4 June 2024 for England, Wales and Northern Ireland, and from 1 January 2010 to 4 June 2024 for Scotland, for qualifying purchases of PC games and/or add-on content (including via Steam or other distribution channels, as described in the official notice). Whether someone is in the class also depends on domicile on 11 March 2026 and other criteria in that notice. Under the notice, UK-domiciled class members who wish to leave must opt out; some people who are not UK-domiciled on that date but meet other criteria may opt in if they wish to join. Opt-out and opt-in requests must be received or postmarked by 11 June 2026, per the official notice. This site does not advise whether to opt in or out.',
			"If such claims succeed, large payouts or liability could affect Steam's terms, regional pricing, or game availability. Use the official notice (PDF link below), the claimant's site (steamyouoweus.co.uk), and the CAT judgment materials for exact definitions, procedures, and deadlines.",
		],
		optInByDefault: true,
		optOutLink: 'https://optout.steamyouoweus.co.uk/',
		optInLink: 'https://optin.steamyouoweus.co.uk/',
		documentsLink:
			'https://steamyouoweus.co.uk/wp-content/uploads/2026/03/2026-03-11-Shotbolt-v-Valve-CPO-Notice-and-CPO-Annexed-updated.pdf',
		documentsLinkLabel: 'Notice of Collective Proceedings Order (11 March 2026) (PDF)',
		documentLinks: [
			{
				label: 'CAT judgment (CPO application) (PDF)',
				href: 'https://www.catribunal.org.uk/sites/cat/files/2026-01/16407724%20Vicki%20Shotbolt%20Class%20Representative%20Limited%20v%20Valve%20Corporation%20-%20Judgment%20%28CPO%20Application%29%20%2026%20Jan%202026.pdf',
			},
			{
				label: 'CAT judgment (CPO application) (HTML summary)',
				href: 'https://www.catribunal.org.uk/judgments/16407724-vicki-shotbolt-class-representative-limited-v-valve-corporation-judgment-cpo',
			},
			{
				label: 'Collective Proceedings Order (PDF)',
				href: 'https://steamyouoweus.co.uk/wp-content/uploads/2026/03/COLLECTIVE-PROCEEDINGS-ORDER.pdf',
			},
			{
				label: 'Collective Proceedings Claim Form (PDF)',
				href: 'https://steamyouoweus.co.uk/wp-content/uploads/2026/03/COLLECTIVE-PROCEEDINGS-CLAIM-FORM.pdf',
			},
			{
				label: 'Class definition (claimant’s FAQs)',
				href: 'https://steamyouoweus.co.uk/faqs/#classDefinition',
			},
			{
				label: 'Litigation Funding Agreement and Side Letter (PDF)',
				href: 'https://steamyouoweus.co.uk/wp-content/uploads/2025/10/Litigation-Funding-Agreement-and-Side-Letter.pdf',
			},
			{
				label: 'Agreed CPO Application Hearing Notice (28 May 2025) (PDF)',
				href: 'https://steamyouoweus.co.uk/wp-content/uploads/2025/06/2025-05-28-Agreed-CPO-Application-Hearing-Notice.pdf',
			},
			{
				label: 'Summary of Collective Proceedings Claim Form (PDF)',
				href: 'https://steamyouoweus.co.uk/wp-content/uploads/2024/10/Summary-of-Collective-Proceedings-Claim-Form.pdf',
			},
		],
		deadline: 'Opt-out or opt-in: received or postmarked by 11 June 2026 (see official notice).',
		deadlineProgressBar: {
			title: 'Current phase: opt-out / opt-in window',
			periodStart: '2026-03-11',
			periodEnd: '2026-06-11',
			footnote:
				'Progress is approximate (calendar days). Requests must be received or postmarked by 11 June 2026—confirm wording on the official notice.',
		},
		statusMilestones: [
			{ label: 'Claim and collective proceedings application filed at CAT', date: '5 June 2024', status: 'completed' },
			{ label: 'Objections / submissions deadline', date: '25 July 2025', status: 'completed' },
			{ label: 'CPO application hearing', date: '14 October 2025', status: 'completed' },
			{ label: 'CPO granted ([2026] CAT 4)', date: '26 January 2026', status: 'completed' },
			{ label: 'Collective Proceedings Order made', date: '11 March 2026', status: 'completed' },
			{ label: 'Opt-out / opt-in period', date: 'ends 11 June 2026', status: 'current' },
			{ label: 'Trial or settlement', status: 'upcoming' },
			{ label: 'Distribution of compensation (if successful)', status: 'upcoming' },
		],
		whatYouCanDo: [
			{
				text: 'Claimant opt-out form (for those leaving the class; deadline 11 June 2026 per official notice).',
				href: 'https://optout.steamyouoweus.co.uk/',
			},
			{
				text: 'If you are not UK-domiciled on 11 March 2026 but meet the other criteria and want to participate, use the claimant’s opt-in process by 11 June 2026 (see steamyouoweus.co.uk).',
				href: 'https://optin.steamyouoweus.co.uk/',
			},
			'If you want to comment on UK collective action policy, you may contact your MP or other representatives in your own capacity.',
			'You may share this page with anyone who wants the same official links in one place.',
			{ text: 'Read our FAQ for more Q&A.', href: '/faq' },
		],
	},
	{
		id: 'us-valve-antitrust',
		name: 'In re Valve Antitrust Litigation',
		region: 'US',
		audience: 'both',
		shortDescription: 'US class action for consumers and publishers who paid Valve commission; publisher opt-out deadline passed.',
		content: [
			"This class action is in the US District Court for the Western District of Washington (Case No. 2:21-cv-00563). It targeted people or entities who paid commission to Valve in connection with the sale or use of a game on the Steam platform between January 28, 2017 and November 25, 2024. The opt-out deadline for the publisher/developer class was September 2, 2025; that deadline has passed.",
			"A similar suit on behalf of game publishers and developers has already passed a motion to dismiss and been certified as a class action. Separately, a consumer class (consumers who purchased PC games via Steam) is now proceeding: consumers were only recently able to pursue their suit after Valve amended the arbitration clause in its user agreement. On May 2, 2025, the Court appointed Cohen Milstein sole Interim Lead Class Counsel for the consumer class. On August 28, 2025, the Court granted an unopposed voluntary dismissal without prejudice for Susann Davis, Hope Marchionda, and Everett Stephens; they are no longer class representatives for the putative consumer class but may remain in the action as absent class members.",
			'Filings and notices describe Steam’s commission using terms such as “anti-competitive” or “excessive”; those are legal arguments in the case, not findings here. For wording, class definitions, and schedules, use the official site and court documents linked below.',
		],
		optOutLink: 'https://www.valvepublisherclassaction.com/',
		documentsLink: 'https://www.valvepublisherclassaction.com/important-documents',
		documentLinks: [
			{
				label: 'CourtListener docket (RECAP; full case)',
				href: 'https://www.courtlistener.com/docket/59859024/in-re-valve-antitrust-litigation/',
			},
			{
				label: 'Order: voluntary dismissal of three consumer named plaintiffs (28 August 2025) (Dkt. 533) (PDF)',
				href: 'https://storage.courtlistener.com/recap/gov.uscourts.wawd.298754/gov.uscourts.wawd.298754.533.0.pdf',
			},
			{
				label: 'Order on motion to seal summary judgment opposition filings (in part; 31 March 2026) (Dkt. 591) (PDF)',
				href: 'https://storage.courtlistener.com/recap/gov.uscourts.wawd.298754/gov.uscourts.wawd.298754.591.0.pdf',
			},
			{
				label: 'Class action complaint (27 April 2021) (PDF)',
				href: 'https://angeion-public.s3.amazonaws.com/www.examplesettlementwebsite.com/docs/1%20-%20Complaint.pdf',
			},
			{
				label: 'Motion for order approving notice of class certification (PDF)',
				href: 'https://angeion-public.s3.amazonaws.com/www.examplesettlementwebsite.com/docs/432%20-%20Motion%20for%20Order%20Approving%20Notice%20of%20Class%20Certification.pdf',
			},
			{
				label: 'Proposed order granting motion for notice of class certification (PDF)',
				href: 'https://angeion-public.s3.amazonaws.com/www.examplesettlementwebsite.com/docs/432-1%20-%20[Proposed]%20Order%20Granting%20Motion%20for%20Order%20Approving%20Notice%20of%20Class%20Certification.pdf',
			},
			{
				label: 'Order approving notice of class certification (PDF)',
				href: 'https://angeion-public.s3.amazonaws.com/www.examplesettlementwebsite.com/docs/440-%20Valve_Order%20Approving%20Notice%20of%20Class%20Certification.pdf',
			},
			{
				label: 'Order granting class certification (26 November 2024) (PDF)',
				href: 'https://angeion-public.s3.amazonaws.com/www.examplesettlementwebsite.com/docs/Dist.W.D.Wash._2-21-cv-00563_391.pdf',
			},
			{
				label: 'Class certification long form notice (PDF)',
				href: 'https://angeion-public.s3.amazonaws.com/www.examplesettlementwebsite.com/docs/Valve%202025-06-25%20Valve%20Antitrust%20Class%20Cert%20Long%20Form%20Notice%20-%20FINAL.pdf',
			},
		],
		deadline: 'September 2, 2025 (passed)',
		optInByDefault: true,
		statusMilestones: [
			{ label: 'Complaint filed (Wolfire v. Valve)', date: '27 April 2021', status: 'completed' },
			{ label: 'First motion to dismiss (granted in part)', date: 'November 2021', status: 'completed' },
			{ label: 'Second motion to dismiss (second amended complaint)', date: '6 May 2022', status: 'completed' },
			{ label: 'Class certified (publisher/developer class)', date: '26 November 2024', status: 'completed' },
			{ label: 'Appeal petition denied (Ninth Circuit)', date: '23 January 2025', status: 'completed' },
			{ label: 'Consumer class: Interim Lead Counsel appointed', date: '2 May 2025', status: 'completed' },
			{ label: 'Opt-out deadline (publisher class)', date: '2 September 2025', status: 'completed' },
			{
				label: 'Consumer named plaintiffs: voluntary dismissal as class representatives (without prejudice)',
				date: '28 August 2025',
				status: 'completed',
			},
			{ label: 'Motion practice (sealing, dispositive motions; some court orders sealed)', date: '2025–2026', status: 'current' },
		],
		whatYouCanDo: [
			'Review the official class action site and Important Documents (links below) for current status and papers.',
			'Share this site with other publishers and developers who may have been in the class.',
			{ text: 'Read our FAQ for more Q&A.', href: '/faq' },
		],
	},
	{
		id: 'us-ny-people-v-valve-gambling-2026',
		name: 'People of the State of New York v. Valve Corporation',
		region: 'US',
		audience: 'consumer',
		shortDescription:
			'New York State enforcement action (Supreme Court, New York County; Index No. 450952/2026) alleging unlawful gambling through loot-box-style features in Valve games.',
		content: [
			'On 25 February 2026 the People of the State of New York, by Attorney General Letitia James, filed a complaint in the Supreme Court of the State of New York, County of New York, against Valve Corporation (Index No. 450952/2026, NYSCEF Doc. No. 2). This is a government enforcement suit under Executive Law § 63(12), not a private class action—there is no class opt-out form analogous to the UK or federal class-action notices on this site.',
			'The Office of the Attorney General alleges that Valve’s games—including Counter-Strike 2, Team Fortress 2, and Dota 2—enable users to pay for a chance to obtain randomly awarded virtual items from “loot boxes,” that cosmetic items can hold significant monetary value, and that users can liquidate value through the Steam Community Market and third-party marketplaces. The complaint asserts causes of action based on Article I, Section 9 of the New York State Constitution and Penal Law §§ 225.05 (promoting gambling in the second degree) and 225.10 (promoting gambling in the first degree), as remedies through Executive Law § 63(12).',
			'The prayer for relief asks the court, among other things, to permanently enjoin alleged violations; order an accounting; order restitution to consumers and disgorgement; impose a fine of three times the amount of gain under Penal Law § 80.10 where applicable; award $2,000 costs under CPLR § 8303(a)(6); and grant further relief. The Attorney General’s press release summarises the filing and the relief sought at a high level.',
			'Valve publishes a Steam Support FAQ page about this lawsuit. The links below include the verified complaint, the Attorney General’s press release, and that FAQ as primary sources.',
		],
		documentsLink: 'https://ag.ny.gov/sites/default/files/court-filings/new-york-v-valve-corporation-complaint-2026.pdf',
		documentsLinkLabel: 'Complaint (PDF, NY Attorney General)',
		documentLinks: [
			{
				label: 'NY OAG press release (February 2026)',
				href: 'https://ag.ny.gov/press-release/2026/attorney-general-james-sues-game-developer-promoting-illegal-gambling-through',
			},
			{
				label: 'Steam Support — About the New York Attorney General lawsuit against Valve',
				href: 'https://help.steampowered.com/en/faqs/view/6300-A6C4-519D-A3F5',
			},
		],
		statusMilestones: [
			{ label: 'Complaint filed (Supreme Court, New York County)', date: '25 February 2026', status: 'completed' },
			{ label: 'Active litigation', status: 'current' },
			{ label: 'Judgment or settlement', status: 'upcoming' },
		],
		whatYouCanDo: [
			{
				text: 'Read the verified complaint (PDF) linked below.',
				href: 'https://ag.ny.gov/sites/default/files/court-filings/new-york-v-valve-corporation-complaint-2026.pdf',
			},
			{
				text: 'Read the New York Attorney General’s press release on the filing.',
				href: 'https://ag.ny.gov/press-release/2026/attorney-general-james-sues-game-developer-promoting-illegal-gambling-through',
			},
			{
				text: 'Read Valve’s Steam Support FAQ on the lawsuit.',
				href: 'https://help.steampowered.com/en/faqs/view/6300-A6C4-519D-A3F5',
			},
			'New York residents who wish to comment on state enforcement or gambling policy may contact their elected representatives in their own capacity.',
			{ text: 'Read our FAQ for more Q&A.', href: '/faq' },
		],
	},
];
