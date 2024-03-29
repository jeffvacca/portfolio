"use client"

import * as React from "react";
import { Link } from "@nextui-org/link";
import { EnvelopeIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import {
	GithubIcon,
	LinkedInIcon,
} from "@/components/icons";
import { siteConfig } from "@/config/site";

export const Footer = () => {
	return (
		<footer className="border-primary bg-slate-900 block py-6 px-6">
			<div className="mx-auto h-full">
				<div className="flex justify-between items-center h-full">
					<h3>
						<Link
							className="flex items-center ml-4 text-slate-300 text-3xl sm:text-5xl md:text-7xl font-bold"
							href="mailto:jeffvacca@gmail.com"
							title="email me"
							aria-label="Email"
						>
							reach out.
						</Link>
					</h3>
					<div className="flex justify-end items-end flex-col">
						<div className="flex justify-end items-center mb-1">
							<Link
								isExternal
								className="flex items-center ml-4"
								href={siteConfig.links.resume}
								title="resumé"
								aria-label="Email"
							>
								<DocumentTextIcon className="h-6 w-6 md:h-9 md:w-9 text-slate-300" />
							</Link>
							<Link
								isExternal
								className="flex items-center ml-4"
								href="mailto:jeffvacca@gmail.com"
								title="email me"
								aria-label="Email"
							>
								<EnvelopeIcon className="h-7 w-7 md:h-10 md:w-10 text-slate-300" />
							</Link>
							<Link
								isExternal
								className="flex items-center ml-4"

								href={siteConfig.links.github}
								aria-label="Github">
								<GithubIcon className="h-7 w-7 md:h-10 md:w-10 text-slate-300" />
							</Link>

							<Link
								isExternal
								className="flex items-center ml-4"
								href={siteConfig.links.linkedIn}
								aria-label="LinkedIn">
								<LinkedInIcon className="h-6 w-6 md:h-9 md:w-9 text-slate-300" />
							</Link>
						</div>
						<Link
							className="text-slate-500 text-sm md:text-base"
							href="mailto:jeffvacca@gmail.com"
							title="email me"
							aria-label="Email"
						>
							jeffvacca[at]gmail.com
						</Link>
					</div>

				</div>

			</div>


		</footer>
	);
};

