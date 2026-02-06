import { useState } from "react";
import { sponsors } from "@/data/sponsors";
import SponsorLogoCard from "@/components/SponsorLogoCard";

const SponsorsGrid = () => {
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});

  const markFailed = (name: string) => {
    setFailedLogos((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {sponsors.map((sponsor) => {
        const content = (
          <SponsorLogoCard
            sponsor={sponsor}
            failed={!!failedLogos[sponsor.name]}
            onError={markFailed}
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
