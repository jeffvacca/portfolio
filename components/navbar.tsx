"use client"
import * as React from "react";
import { usePathname } from "next/navigation";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import {
	GithubIcon,
	LinkedInIcon,
} from "@/components/icons";
import { EnvelopeIcon, DocumentTextIcon } from '@heroicons/react/24/solid'


import JvLogo from "@/components/jvlogo";

export const Navbar = () => {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = React.useReducer((current) => !current, false);

	return (
		<NextUINavbar maxWidth="xl" position="sticky" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<JvLogo />
					</NextLink>
				</NavbarBrand>
				<ul className="hidden sm:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={`uppercase text-slate-700 cursor-pointer ${pathname === item.href ? "!text-primary font-semibold" : ""}`}
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden mlg:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="flex gap-2">
					<Link
						isExternal
						className="flex items-center pl-4"
						href={siteConfig.links.resume}
						title="resumé"
						aria-label="Email"
					>
						<DocumentTextIcon className="h-6 w-6 text-default-500" />
					</Link>
					<Link
						isExternal
						href="mailto:jeffvacca@gmail.com"
						title="email me"
						aria-label="Email"
					>
						<EnvelopeIcon className="w-7 h-7 text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>

					<Link isExternal href={siteConfig.links.linkedIn} aria-label="LinkedIn">
						<LinkedInIcon className="text-default-500" />
					</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2 z-10">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<a
								className={`uppercase text-slate-700 text-lg ${pathname === item.href ? "!text-primary font-semibold" : ""}`}
								href={item.href}
							>
								{item.label}
							</a>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
