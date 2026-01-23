export type Sponsor = {
  name: string;
  logoSrc: string;
  href?: string;
};

export const sponsors: Sponsor[] = [
  // TODO: Replace with real sponsor entries + real logo filenames.
  {
    name: "Tectonic",
    logoSrc: "/sponsors/tectonic-logo.png",
    href: "https://tectonic.xyz",
  },
  // TODO: Replace with a real sponsor entry.
  {
    name: "Hack",
    logoSrc: "/sponsors/hack-logo.png",
  },
  // TODO: Replace with a real sponsor entry.
  {
    name: "W3JOE",
    logoSrc: "/sponsors/w3joe-logo.png",
  },
    {
    name: "Hexaco",
    logoSrc: "/sponsors/hexaco-logo.png",
  },

];
