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
          container: "px-6 py-3 md:px-7 md:py-4",
          logo: "h-7 md:h-8",
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
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={sponsor.logoSrc}
            alt={sponsor.name}
            className={`${sizeStyles.logo} w-auto max-w-full object-contain`}
            loading="lazy"
            onError={() => onError(sponsor.name)}
          />
        </div>
      )}
    </div>
  );
};

export default SponsorLogoCard;
