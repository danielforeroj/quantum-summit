import { useState } from "react";
import { sponsors } from "@/data/sponsors";

const SponsorsGrid = () => {
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});

  const markFailed = (name: string) => {
    setFailedLogos((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {sponsors.map((sponsor) => {
        const content = (
          <div className="surface-elevated border border-border/40 rounded-lg px-4 py-4 md:px-5 md:py-5 flex items-center justify-center">
            {failedLogos[sponsor.name] ? (
              <span className="text-xs md:text-sm text-muted-foreground text-center">
                {sponsor.name}
              </span>
            ) : (
              <img
                src={sponsor.logoSrc}
                alt={sponsor.name}
                className="h-8 md:h-10 w-auto object-contain"
                loading="lazy"
                onError={() => markFailed(sponsor.name)}
              />
            )}
          </div>
        );

        if (sponsor.href) {
          return (
            <a
              key={sponsor.name}
              href={sponsor.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {content}
            </a>
          );
        }

        return (
          <div key={sponsor.name} className="block">
            {content}
          </div>
        );
      })}
    </div>
  );
};

export default SponsorsGrid;
