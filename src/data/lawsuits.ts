/**
 * Lawsuits and collective actions against Valve.
 * Add new entries here to show them as dropdowns on the home page.
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
}

export const lawsuits: Lawsuit[] = [
	{
		id: 'uk-steam-you-owe-us',
		name: 'Steam You Owe Us',
		region: 'UK',
		audience: 'consumer',
		shortDescription: 'UK collective claim for PC gamers (opt-out by default).',
		content: [
			"In the UK, a claim has been filed (Steam You Owe Us) at the Competition Appeal Tribunal arguing that Valve overcharged PC gamers and that consumers are owed compensation. The claim frames Steam's store commission as \"overcharging\" and stretches competition law. In reality, gamers bought products at the prices displayed; the idea that everyone \"overpaid\" in a clear legal sense is contested.",
			"This claim is brought on an opt-out basis. You are automatically included in the proposed class if you paid for PC games or add-on content in the UK from 5 June 2018 (from 4 June 2018 for England, Wales and Northern Ireland; from 1 January 2010 for Scotland). If you do not want to be part of the claim, you will need to opt out. According to the claimant's FAQs, you will be given the chance to opt out if the claim is certified; they will publish an option for doing this on their website when the claim reaches that stage. We are not telling you to opt in or out—we are informing you so you can judge for yourself.",
			"If such claims succeed, large payouts or liability could affect Steam's terms, regional pricing, or game availability. For the official class definition and opt-out information, see the claimant's FAQs (link below).",
		],
		optInByDefault: true,
		documentsLink: 'https://steamyouoweus.co.uk/faqs/#classDefinition',
		documentsLinkLabel: 'Class definition and opt-out information (claimant’s FAQs)',
		documentLinks: [
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
		statusMilestones: [
			{ label: 'Claim filed at CAT', date: '5 June 2024', status: 'completed' },
			{ label: 'Application for Collective Proceedings filed', date: '5 June 2024', status: 'completed' },
			{ label: 'Objections / submissions deadline', date: '25 July 2025', status: 'completed' },
			{ label: 'CPO hearing', date: '14 October 2025', status: 'completed' },
			{ label: 'Certification decision (CPO granted or refused)', status: 'current' },
			{ label: 'Opt-out period (if certified)', status: 'upcoming' },
			{ label: 'Trial or settlement', status: 'upcoming' },
			{ label: 'Distribution of compensation (if successful)', status: 'upcoming' },
		],
		whatYouCanDo: [
			'Check the claimant’s FAQs for the class definition and opt-out information (link below). Opt-out will be available if the claim is certified.',
			'Contact your MP if you want to voice views on collective actions and consumer law.',
			'Share this site with other UK consumers so they can make an informed choice.',
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
			"A similar suit on behalf of game publishers and developers has already passed a motion to dismiss and been certified as a class action. Separately, a consumer class (consumers who purchased PC games via Steam) is now proceeding: consumers were only recently able to pursue their suit after Valve amended the arbitration clause in its user agreement. On May 2, 2025, the Court appointed Cohen Milstein sole Interim Lead Class Counsel for the consumer class.",
			"We do not tell you whether to opt in or out; we only point you to the official information. Both the UK and US claims treat Steam's commission as \"anti-competitive\" or \"excessive\"—that framing is contested. For official notices and documents, see the links below.",
		],
		optOutLink: 'https://www.valvepublisherclassaction.com/',
		documentsLink: 'https://www.valvepublisherclassaction.com/important-documents',
		documentLinks: [
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
				label: 'Order granting class certification (25 November 2024) (PDF)',
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
			{ label: 'Class certified (publisher/developer class)', date: '25 November 2024', status: 'completed' },
			{ label: 'Appeal petition denied (Ninth Circuit)', date: '23 January 2025', status: 'completed' },
			{ label: 'Consumer class: Interim Lead Counsel appointed', date: '2 May 2025', status: 'completed' },
			{ label: 'Opt-out deadline (publisher class)', date: '2 September 2025', status: 'completed' },
			{ label: 'Ongoing proceedings (trial / settlement)', status: 'current' },
		],
		whatYouCanDo: [
			'Review the official class action site and Important Documents (links below) for current status and papers.',
			'Share this site with other publishers and developers who may have been in the class.',
			{ text: 'Read our FAQ for more Q&A.', href: '/faq' },
		],
	},
];
