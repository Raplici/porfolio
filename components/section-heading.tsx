export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="block text-[2.5rem] font-[1000] leading-none md:mb-6 sm:text-4xl text-3xl capitalize mb-8">
      {children}
    </h2>
  );
}
