export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Jeff Vacca",
	title: "Jeff Vacca - Senior Frontend Engineer",
	description: "Portfolio site for Jeff Vacca, Senior Frontend Engineer with over twelve years of enterprise level experience delivering pixel perfect, engaging digital experiences.",
	authors: [{ name: "Jeff Vacca", url: "https://jeffvacca.com" }] ,
	navItems: [
		{
			label: "Work",
			href: "/work",
		},
		{
			label: "About",
			href: "/about",
		},
		{
			label: "Skills",
			href: "/skills",
		},
		{
			label: "Testimonials",
			href: "/testimonials",
		}
	],
	navMenuItems: [
		{
			label: "Work",
			href: "/work",
		},
		{
			label: "About",
			href: "/about",
		},
		{
			label: "Skills",
			href: "/skills",
			
		},
		{
			label: "Testimonials",
			href: "/testimonials",
		}
	],
	links: {
		linkedIn: "https://www.linkedin.com/in/jeff-vacca-1678247a/",
		github: "https://github.com/jeffvacca",
		resume: "/docs/JeffVacca-Resume-031224.pdf"
	},
};
