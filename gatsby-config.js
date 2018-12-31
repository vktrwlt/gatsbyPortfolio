module.exports = {
	siteMetadata: {
		title: `Victor Tsang's Portfolio`,
		description: `Welcome to my portfolio!`,
		author: `Victor Tsang`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png` // This path is relative to the root of the site.
			}
		},
		'gatsby-plugin-tailwindcss',
		{
			resolve: `gatsby-plugin-emotion`,
			options: {
				// Accepts all options defined by `babel-plugin-emotion` plugin.
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-131565495-1',
				// Puts tracking script in the head instead of the body
				head: true,
				// Setting this parameter is optional
				anonymize: true,
				// Setting this parameter is also optional
				respectDNT: true,
				// Avoids sending pageview hits from custom paths
				exclude: ['/preview/**', '/do-not-track/me/too/'],
				// Enables Google Optimize using your container Id
				optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
				// Any additional create only fields (optional)
				sampleRate: 5,
				siteSpeedSampleRate: 10,
				cookieDomain: 'vktr.me'
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
