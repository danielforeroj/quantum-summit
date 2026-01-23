import { useState } from "react";
import { sponsors } from "@/data/sponsors";
import SponsorLogoCard from "@/components/SponsorLogoCard";

const SponsorsStrip = () => {
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});

  const markFailed = (name: string) => {
    setFailedLogos((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <div className="mt-6 md:mt-8">
      <span className="label-caps text-primary/80 mb-3 block">SUPPORTED BY</span>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {sponsors.map((sponsor) => {
          const content = (
            <SponsorLogoCard
              sponsor={sponsor}
              failed={!!failedLogos[sponsor.name]}
              onError={markFailed}
              size="compact"
              interactive={!!sponsor.href}
            />
          );

          if (sponsor.href) {
            return (
              <a
                key={sponsor.name}
                href={sponsor.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                {content}
              </a>
            );
          }

          return <div key={sponsor.name}>{content}</div>;
        })}
      </div>
    </div>
  );
};

export default SponsorsStrip;
