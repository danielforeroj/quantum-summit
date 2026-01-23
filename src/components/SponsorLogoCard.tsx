import type { Sponsor } from "@/data/sponsors";

type SponsorLogoCardProps = {
  sponsor: Sponsor;
  failed: boolean;
  onError: (name: string) => void;
  size?: "default" | "compact";
  interactive?: boolean;
};

const SponsorLogoCard = ({
  sponsor,
  failed,
  onError,
  size = "default",
  interactive = false,
}: SponsorLogoCardProps) => {
  const sizeStyles =
    size === "compact"
      ? {
          container: "p-3 md:p-4",
          logo: "h-6 md:h-7",
          fallback: "text-[11px] md:text-xs",
        }
      : {
          container: "px-4 py-4 md:px-5 md:py-5",
          logo: "h-8 md:h-10",
          fallback: "text-xs md:text-sm",
        };

  return (
    <div
      className={`surface-elevated border border-border/40 rounded-lg flex items-center justify-center text-center ${
        sizeStyles.container
      } ${
        interactive
          ? "transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:border-border/70"
          : ""
      }`}
    >
      {failed ? (
        <span className={`${sizeStyles.fallback} text-muted-foreground`}>
          {sponsor.name}
        </span>
      ) : (
        <img
          src={sponsor.logoSrc}
          alt={sponsor.name}
          className={`${sizeStyles.logo} w-auto object-contain`}
          loading="lazy"
          onError={() => onError(sponsor.name)}
        />
      )}
    </div>
  );
};

export default SponsorLogoCard;
