import Link from "next/link";

type Variant = "primary" | "secondary" | "accent" | "ghost";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-sunshine-yellow/60";

  const styles: Record<Variant, string> = {
    primary: "bg-sunshine-green text-white hover:opacity-95",
    secondary:
      "border border-sunshine-green text-sunshine-green hover:bg-sunshine-green hover:text-white",
    accent: "bg-sunshine-red text-white hover:opacity-95",
    ghost: "text-sunshine-charcoal hover:underline",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
