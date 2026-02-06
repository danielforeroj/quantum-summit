import { useState } from "react";
import { mediaPartners } from "@/data/mediaPartners";

const MediaPartnersSection = () => {
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});

  const markFailed = (name: string) => {
    setFailedLogos((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <section id="media-partners" className="py-16 md:py-20 border-t border-border/30">
      <div className="section-container">
        <div className="max-w-3xl mb-8 md:mb-10">
          <span className="label-caps text-primary mb-3 md:mb-4 block">Media Partners</span>
          <h2 className="heading-section mb-3 md:mb-4">Coverage Partners</h2>
          <p className="body-default">
            Logos are loaded from <code className="text-foreground">public/media</code>. Add files there and update
            <code className="text-foreground"> src/data/mediaPartners.ts</code> to publish changes.
          </p>
        </div>

        {mediaPartners.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {mediaPartners.map((partner) => {
              const content = (
                <div className="surface-elevated border border-border/40 rounded-lg px-4 py-4 md:px-5 md:py-5 flex items-center justify-center">
                  {failedLogos[partner.name] ? (
                    <span className="text-xs md:text-sm text-muted-foreground text-center">{partner.name}</span>
                  ) : (
                    <img
                      src={partner.logoSrc}
                      alt={partner.name}
                      className="h-8 md:h-10 w-auto max-w-full object-contain"
                      loading="lazy"
                      onError={() => markFailed(partner.name)}
                    />
                  )}
                </div>
              );

              if (partner.href) {
                return (
                  <a
                    key={partner.name}
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {content}
                  </a>
                );
              }

              return <div key={partner.name}>{content}</div>;
            })}
          </div>
        ) : (
          <div className="surface-elevated border border-border/40 rounded-lg p-5 md:p-6">
            <p className="text-sm text-muted-foreground">Media partner logos will appear here once added.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaPartnersSection;
