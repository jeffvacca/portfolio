export default function TestimonialsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col md:max-w-2xl mx-auto items-center justify-center gap-4 py-16 px-6">
			<div className="w-full">
				{children}
			</div>
		</section>
	);
}
