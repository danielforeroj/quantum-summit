import { useState } from "react";
import { sponsors } from "@/data/sponsors";

const SponsorsStrip = () => {
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});

  const markFailed = (name: string) => {
    setFailedLogos((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <div className="mt-6 md:mt-8">
      <span className="label-caps text-primary/80 mb-3 block">Supported by</span>
      <div className="flex flex-wrap items-center gap-3 md:gap-4">
        {sponsors.map((sponsor) => {
          const content = failedLogos[sponsor.name] ? (
            <span className="text-[11px] md:text-xs uppercase tracking-wide px-3 py-1 rounded-full border border-border/40 text-muted-foreground">
              {sponsor.name}
            </span>
          ) : (
            <img
              src={sponsor.logoSrc}
              alt={sponsor.name}
              className="h-7 md:h-8 w-auto object-contain"
              loading="lazy"
              onError={() => markFailed(sponsor.name)}
            />
          );

          if (sponsor.href) {
            return (
              <a
                key={sponsor.name}
                href={sponsor.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                {content}
              </a>
            );
          }

          return (
            <div key={sponsor.name} className="inline-flex items-center">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SponsorsStrip;
