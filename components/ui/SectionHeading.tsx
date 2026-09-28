import ScrollReveal from "@/components/animations/ScrollReveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <ScrollReveal
      className={
        centered
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1769e0]">
        {eyebrow}
      </p>

      <h2 className="mt-4">{title}</h2>

      {description && (
        <p
          className={`mt-6 text-lg leading-8 ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}