export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-6">
			<div className="inline-block justify-center">
				{children}
			</div>
		</section>
	);
}
