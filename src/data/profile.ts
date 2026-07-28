import type { ImageMetadata } from 'astro';
import emailIcon from '../assets/icons/email.svg?url';
import githubIcon from '../assets/icons/github.svg?url';
import googleScholarIcon from '../assets/icons/google-scholar.svg?url';
import linkedinIcon from '../assets/icons/linkedin.svg?url';
import orcidIcon from '../assets/icons/orcid.svg?url';
import magVlaqImage from '../assets/publications/mag-vlaq/overview.webp';

export interface Profile {
	name: string;
	role: string;
	affiliation: string;
	about: string;
	researchInterests: string[];
	sections: {
		about: string;
		research: string;
		publications: string;
	};
	labels: {
		bib: string;
		abstract: string;
		pdf: string;
		code: string;
		website: string;
		websiteUnavailable: string;
		authorNote: string;
	};
	publication: {
		title: string;
		authors: Array<{ name: string; self?: boolean; marker?: string }>;
		venue: string;
		image: ImageMetadata;
		imageAlt: string;
		bibUrl: string;
		abstractUrl: string;
		pdfUrl: string;
		codeUrl: string;
		websiteUrl?: string;
	};
}

const publication = {
	title: 'MAG-VLAQ: Multi-modal Aerial-Ground Query Aggregation for Cross-View Place Recognition',
	authors: [
		{ name: 'Zhengyi Xu', self: true, marker: '*' },
		{ name: 'Yuhang Ming', marker: '*†' },
		{ name: 'Zhihao Zhan', marker: '*' },
		{ name: 'Hanyu Zhu' },
		{ name: 'Javier Civera' },
		{ name: 'Wanzeng Kong' },
	],
	venue: 'arXiv preprint arXiv:2605.09418, 2026',
	image: magVlaqImage,
	imageAlt: 'Overview of the MAG-VLAQ aerial-ground place recognition method',
	bibUrl: 'https://arxiv.org/bibtex/2605.09418',
	abstractUrl: 'https://arxiv.org/abs/2605.09418',
	pdfUrl: 'https://arxiv.org/pdf/2605.09418',
	codeUrl: 'https://github.com/JasperXzy/MAG-VLAQ',
};

export const contactLinks = [
	{
		label: 'Email',
		href: 'mailto:jasper.zhengyi.xu@gmail.com',
		icon: emailIcon,
	},
	{
		label: 'Google Scholar',
		href: 'https://scholar.google.com/citations?hl=zh-CN&user=C4fE8eEAAAAJ',
		icon: googleScholarIcon,
	},
	{
		label: 'ORCID',
		href: 'https://orcid.org/0009-0007-3055-664X',
		icon: orcidIcon,
	},
	{
		label: 'GitHub',
		href: 'https://github.com/JasperXzy',
		icon: githubIcon,
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/jasperxzy0409/',
		icon: linkedinIcon,
	},
] as const;

export const profile: Profile = {
	name: 'Zhengyi Xu',
	role: 'Undergraduate Student',
	affiliation: 'Hangzhou Dianzi University',
	about:
		'I am an undergraduate student at Hangzhou Dianzi University. My research focuses on perception and localization for intelligent robotic systems, particularly SLAM, multi-modal place recognition, and efficient deployment of AI models on embedded edge devices.',
	researchInterests: [
		'Simultaneous Localization and Mapping (SLAM)',
		'Multi-Modal Place Recognition',
		'Embedded AI and On-Device Deployment',
	],
	sections: {
		about: 'About Me',
		research: 'Research Interests',
		publications: 'Publications',
	},
	labels: {
		bib: 'Bib',
		abstract: 'Abstract',
		pdf: 'PDF',
		code: 'Code',
		website: 'Website',
		websiteUnavailable: 'Project website coming soon',
		authorNote: '* Equal contribution; † Corresponding author.',
	},
	publication,
};
