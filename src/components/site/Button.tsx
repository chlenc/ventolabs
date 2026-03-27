import Link from "next/link";

type ButtonProps = {
  label: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: "_blank" | "_self";
  rel?: string;
};

export function Button({
  label,
  href,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const classes = `button button--${variant} ${className}`.trim();

  if (href) {
    const isExternal =
      href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#");

    if (isExternal) {
      return (
        <a className={classes} href={href} rel={rel} target={target}>
          {label}
        </a>
      );
    }

    return (
      <Link className={classes} href={href}>
        {label}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} type={type}>
      {label}
    </button>
  );
}
