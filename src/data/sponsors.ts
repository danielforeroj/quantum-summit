export type Sponsor = {
  name: string;
  logoSrc: string;
  href?: string;
};

export const sponsors: Sponsor[] = [
  {
    name: "Tectonic",
    logoSrc: "/sponsors/tectonic-logo.png",
    href: "https://tectonic.xyz",
  },
  {
    name: "Hack",
    logoSrc: "/sponsors/hack-logo.png",
  },
  {
    name: "W3JOE",
    logoSrc: "/sponsors/w3joe-logo.png",
  },
  {
    name: "Hexaco",
    logoSrc: "/sponsors/hexaco-logo.png",
  },
];
