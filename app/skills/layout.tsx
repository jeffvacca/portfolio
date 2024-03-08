export default function SkillsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col max-w-2xl mx-auto items-center justify-center gap-4 py-8">
			<div className="w-full">
				{children}
			</div>
		</section>
	);
}
