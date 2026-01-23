export type Sponsor = {
  name: string;
  logoSrc: string;
  href?: string;
};

export const sponsors: Sponsor[] = [
  // TODO: Replace with real sponsor entries + real logo filenames.
  {
    name: "Tectonic",
    logoSrc: "/sponsors/tectonic.svg",
    href: "https://tectonic.xyz",
  },
  // TODO: Replace with a real sponsor entry.
  {
    name: "Chainlink Labs",
    logoSrc: "/sponsors/chainlink-labs.svg",
  },
  // TODO: Replace with a real sponsor entry.
  {
    name: "Acme Capital",
    logoSrc: "/sponsors/acme-capital.png",
  },
];
