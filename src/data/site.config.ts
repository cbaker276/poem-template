interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://blankspacepoetry.com', // Write here your website url
	author: 'Blank Space Poetry', // Site author
	title: 'Blank Space Poetry', // Site title.
	description: 'Fill your blank spaces with poetry and find the color that fits you best.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 12 // Number of posts per page
}
