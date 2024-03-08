import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Typewriter from "@/components/typewriter";
import Skills from "@/components/skills";


export default function Home() {
	return (
		<section className="flex flex-col h-screen-calc items-center justify-center gap-4">
			<Typewriter text={"senior frontend engineer."} delay={100} />
		</section>
	);
}
