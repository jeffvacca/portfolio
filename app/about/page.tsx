import { title } from "@/components/primitives";

export default function AboutPage() {
	return (
		<>

			<div className="relative isolate bg-white px-6  overflow-visible lg:px-0">
				<div className="mx-auto grid grid-cols-12 gap-8 grid-rows-none relative">
					<div className="col-span-12 md:col-span-8 lg:col-span-9 overflow-visible">
						<div className="mb-8">
							<h1 className={title({ color: "blue" })}>my story</h1>
						</div>
						<img className="inline md:hidden h-48 float-right pt-2 pb-2 pl-2" src="/JeffVacca-Profile.JPG" alt="Jeff Profile Pic" />

						<p className="mb-4 text-slate-800 text-lg">I got my start in web development while working as an audio engineer at <a className="bg-gradient-to-r from-sky-400 to-fuchsia-600 px-1 text-white" href="https://jsmmusic.com/" target="_blank">JSM Music</a>.  In order to pitch for new jobs, we compiled custom demo video reels of various musical styles, which were delivered to clients via FedEx or bike messenger on DVD format.  The existing third party web solutions at the time were cost prohibitive.  So during my downtime at the studio, I learned some Flash and created jsmmusicology.com, a website where demo reels could be created, viewed, and delivered digitally.  The new technology immediately eliminated the need for us to deliver physical media, saving the company significant time and expense.  Our clients were delighted with the speed and ease with which we could respond to requests, affording us a competitive advantage.   Similar to my career as a sound engineer, I enjoy operating at the intersection of the creative and the technical.  It was here that I caught the bug and decided to transition to web development full time.</p>

						<p className="mb-4 text-slate-800 text-lg">Fast-forward twelve years.  I have been happily building software solutions, first for the <a className="bg-gradient-to-r from-sky-400 to-fuchsia-600 px-1 text-white" href="https://www.nydailynews.com/" target="_blank">New York Daily News</a>, and most recently at <a className="bg-gradient-to-r from-sky-400 to-fuchsia-600 px-1 text-white" href="https://www.andmore.com/" target="_blank">ANDMORE</a>.</p>

						<p className="mb-4 text-slate-800 text-lg"><a className="bg-gradient-to-r from-sky-400 to-fuchsia-600 px-1 text-white" href="https://www.andmore.com/" target="_blank">ANDMORE</a>, powered by Blackstone Group, is a leading wholesale e-commerce experience within the Home Décor, Furniture, Gift, and Apparel space.  The sprawling product suite encompasses a digital marketplace, b2b e-commerce websites, a sales rep order writing app, and related admins for each.  I had the opportunity to work across multiple teams, contributing ground up development and new features in a fast paced, Agile environment.  I became something of a utility man, called in when deadlines were tight.  As such, I got to work on several different products, each with their own tech stack.  </p>

						<p className="mb-4 text-slate-800 text-lg">At the <a className="bg-gradient-to-r from-sky-400 to-fuchsia-600 px-1 text-white" href="https://www.nydailynews.com/" target="_blank">Daily News</a>, I was a member of a two person frontend team.  We managed to rebuild and modernize the bulk of the frontend during my time there, including the complete responsive redesign of all the major site templates.  One highlight includes a ground up rebuild of our news article view.  The new template provided a great deal of flexibility, enabling our writers to bring their stories to life with a myriad of layout options and built in widgets.  </p>

						<p className="mb-4 text-slate-800 text-lg">When I'm not at the computer, I can be found with a guitar in my hand.  I am currently performing with <a className="bg-gradient-to-r from-sky-400 to-fuchsia-600 px-1 text-white" href="https://dirtgrunge.com/" target="_blank">DiRT</a>, a 90s grunge tribute band, and have released two full length albums with NYC alt soul act, <a className="bg-gradient-to-r from-sky-400 to-fuchsia-600 px-1 text-white" href="https://li.sten.to/callouttome" target="_blank">Sinner Man</a>.  </p>
					</div>
					<div className="hidden md:block h-36 col-span-2 md:col-span-4 lg:col-span-3 sticky top-[5rem]">
						<img src="/JeffVacca-Profile.JPG" alt="Jeff Profile Pic" />
					</div>
				</div>
			</div>
		</>

	);
}
