import Typewriter from "@/components/typewriter";

export default function Home() {
	return (
		<section className="flex flex-col h-screen-calc items-center justify-center gap-4">
			<Typewriter text={"senior frontend engineer."} delay={100} />
		</section>
	);
}
