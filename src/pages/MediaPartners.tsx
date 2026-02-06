import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SponsorsGrid from "@/components/SponsorsGrid";
import { Button } from "@/components/ui/button";

type CopyButtonProps = {
  text: string;
  id: string;
  copiedId: string | null;
  onCopy: (id: string, text: string) => void;
};

const CopyButton = ({ text, id, copiedId, onCopy }: CopyButtonProps) => (
  <Button type="button" size="sm" variant="outline" onClick={() => onCopy(id, text)}>
    {copiedId === id ? "Copied" : "Copy"}
  </Button>
);

const MediaPartners = () => {
  const assetsUrl = import.meta.env.VITE_MEDIA_PARTNERS_ASSETS_URL as string | undefined;
  const pressEmail = import.meta.env.VITE_PRESS_EMAIL as string | undefined;
  const pressTelegram = import.meta.env.VITE_PRESS_TELEGRAM as string | undefined;
  const tectonicSiteUrl = import.meta.env.VITE_TECTONIC_SITE_URL as string | undefined;
  const summitSiteUrl = (import.meta.env.VITE_SUMMIT_SITE_URL as string | undefined) || "/";

  const [copiedId, setCopiedId] = useState<string | null>(null);

  const telegramLink = useMemo(() => {
    if (!pressTelegram) {
      return null;
    }
    return `https://t.me/${pressTelegram.replace(/^@/, "")}`;
  }, [pressTelegram]);

  const currentPageUrl = useMemo(() => {
    if (typeof window === "undefined") {
      return "/media-partners";
    }
    return `${window.location.origin}/media-partners`;
  }, []);

  const copyText = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(null), 1200);
    } catch {
      setCopiedId(null);
    }
  };

  const factsText = `Hosted by: Tectonic\nDate: February 19, 2026\nLocation: ETHDenver (Denver, CO)\nFormat: Panels, talks, and demos (Summit) + curated networking (Mixer)\nAttendance: Open attendance; panelists are invite-only\nProgramming: Invite-only panels + a curated round of experts focused on Post-Quantum Cryptography (PQC)\nTopics: PQC readiness, quantum-secure infrastructure, privacy stack evolution, and real-world migration planning\nOfficial site: quantumsummit.net`;

  const oneLiner = "Quantum Summit + Quantum Mixer (hosted by Tectonic) convene builders, institutions, and investors at ETHDenver 2026 to define what “quantum-ready” looks like for Web3 infrastructure—and what teams should do next.";

  const shortBlurb = "Hosted by Tectonic, Quantum Summit + Quantum Mixer take place February 19 at ETHDenver 2026. The Summit features curated panels, talks, and demos focused on post-quantum readiness for chains, custody, privacy, and tokenized assets, plus a round of experts dedicated to Post-Quantum Cryptography (PQC). The Mixer follows as a curated continuation for speakers, sponsors, and invited operators.";

  const fullDescription = `Quantum threat migration is expected to transition from research to production budgets in 2026. Hosted by Tectonic, Quantum Summit + Quantum Mixer bring builders, institutions, and investors together at ETHDenver 2026 to align on what “quantum-ready” means in practice for chains, custody, privacy, and tokenized assets—and what teams should do next.\n\nQuantum Summit (February 19) features curated programming across panels, talks, and demos. Panels are invite-only to ensure high-signal discussion, and the event includes a dedicated round of experts focused on Post-Quantum Cryptography (PQC)—with emphasis on practical migration paths, risk framing, and measurable readiness. Quantum Mixer follows immediately after the Summit as a curated continuation for speakers, sponsors, and invited operators to connect, compare approaches, and explore collaboration.\n\nFor official assets and approved copy, use quantumsummit.net/media-partners as the source of truth.`;

  const aboutTectonic = "Tectonic is building post-quantum cryptography infrastructure and quantum-safe blockchain primitives to help teams migrate from research to production-grade security. Tectonic hosts Quantum Summit + Quantum Mixer to accelerate practical alignment across builders, institutions, and investors.";

  const socialPosts = [
    "TODO: Quantum Summit + Quantum Mixer are coming to ETHDenver 2026 on Feb 19. Track details and approved copy at quantumsummit.net/media-partners.",
    "TODO: Hosted by Tectonic, Quantum Summit brings practical discussion on PQC readiness for chains, custody, privacy, and tokenized assets. Details: quantumsummit.net/media-partners.",
    "TODO: Quantum Mixer follows the Summit with curated networking for speakers, sponsors, and invited operators. Learn more: quantumsummit.net/media-partners.",
    "TODO: Building for a post-quantum future? Media resources + approved facts are now live at quantumsummit.net/media-partners.",
    "TODO: ETHDenver 2026 spotlight: Quantum Summit + Quantum Mixer align builders, institutions, and investors on what “quantum-ready” means in practice.",
    "TODO: Media partners can use official logos, facts, and copy blocks from quantumsummit.net/media-partners for coverage.",
  ];

  return (
    <div className="space-y-8 md:space-y-10">
      <section className="space-y-5">
        <p className="label-caps">Media Resources</p>
        <h1 className="heading-section">Media Partner Kit</h1>
        <p className="text-sm md:text-base text-muted-foreground">Hosted by Tectonic — Quantum Summit + Quantum Mixer (ETHDenver 2026)</p>
        <p className="body-default max-w-3xl">Everything media partners need to cover Quantum Summit + Quantum Mixer: approved copy, event facts, logos, sponsors, and a ready-to-share social pack.</p>
        <p className="text-xs text-muted-foreground">Last updated: Feb 2026</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/media-partners/press-release" className="btn-primary">Press Release</Link>
          {assetsUrl ? (
            <a href={assetsUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">Download Assets</a>
          ) : null}
          <a href={summitSiteUrl} className="btn-secondary">Back to Event Home</a>
        </div>
      </section>

      <section className="surface-elevated border border-border/40 rounded-lg p-5 md:p-6 space-y-4">
        <h2 className="heading-subsection">Jump Links</h2>
        <div className="flex flex-wrap gap-2 text-xs md:text-sm">
          {[
            ["#quick-start", "Quick Start"],
            ["#event-facts", "Event Facts"],
            ["#approved-copy", "Approved Copy"],
            ["#logos-brand", "Logos & Brand Basics"],
            ["#sponsors", "Sponsors"],
            ["#social-pack", "Social Pack"],
            ["#press-contact", "Press Contact"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="px-3 py-1.5 rounded border border-border/50 hover:border-primary/50 text-muted-foreground hover:text-foreground transition-colors">{label}</a>
          ))}
        </div>
      </section>

      <section id="quick-start" className="space-y-4">
        <h2 className="heading-subsection">Quick Start</h2>
        <p className="body-default">Use these links and copy blocks to publish accurate event listings, articles, and social posts.</p>
        <div className="surface-elevated border border-border/40 rounded-lg p-5 md:p-6 space-y-2 text-sm text-muted-foreground">
          <p><a href={currentPageUrl} className="text-foreground hover:text-primary transition-colors">This page</a></p>
          <p><Link to="/media-partners/press-release" className="text-foreground hover:text-primary transition-colors">Press release</Link></p>
          {tectonicSiteUrl ? <p><a href={tectonicSiteUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">Host</a></p> : null}
          {summitSiteUrl ? <p><a href={summitSiteUrl} className="text-foreground hover:text-primary transition-colors">Official event hub</a></p> : null}
          {pressEmail ? <p>Press contact: <a href={`mailto:${pressEmail}`} className="text-foreground hover:text-primary transition-colors">{pressEmail}</a></p> : null}
          {telegramLink ? <p>Telegram: <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">{pressTelegram}</a></p> : null}
        </div>
      </section>

      <section id="event-facts" className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="heading-subsection">Event Facts</h2>
          <CopyButton id="facts" text={factsText} copiedId={copiedId} onCopy={copyText} />
        </div>
        <p className="body-default">Quantum Summit + Quantum Mixer are two events on the same day at ETHDenver 2026—designed to help builders, institutions, and investors align on what “quantum-ready” means in practice for chains, custody, privacy, and tokenized assets.</p>
        <div className="surface-elevated border border-border/40 rounded-lg p-5 md:p-6 grid gap-2 text-sm md:text-base">
          <p><span className="text-muted-foreground">Hosted by:</span> Tectonic</p>
          <p><span className="text-muted-foreground">Date:</span> February 19, 2026</p>
          <p><span className="text-muted-foreground">Location:</span> ETHDenver (Denver, CO)</p>
          <p><span className="text-muted-foreground">Format:</span> Panels, talks, and demos (Summit) + curated networking (Mixer)</p>
          <p><span className="text-muted-foreground">Attendance:</span> Open attendance; panelists are invite-only</p>
          <p><span className="text-muted-foreground">Programming:</span> Invite-only panels + a curated round of experts focused on Post-Quantum Cryptography (PQC)</p>
          <p><span className="text-muted-foreground">Topics:</span> PQC readiness, quantum-secure infrastructure, privacy stack evolution, and real-world migration planning</p>
          <p><span className="text-muted-foreground">Official site:</span> <a href={summitSiteUrl} className="text-foreground hover:text-primary transition-colors">quantumsummit.net</a></p>
        </div>
      </section>

      <section id="approved-copy" className="space-y-4">
        <h2 className="heading-subsection">Approved Copy</h2>
        {[
          ["One-liner", oneLiner, "one-liner"],
          ["Short blurb", shortBlurb, "short-blurb"],
          ["Full description", fullDescription, "full-description"],
        ].map(([title, text, id]) => (
          <article key={id} className="surface-elevated border border-border/40 rounded-lg p-5 md:p-6 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm md:text-base text-foreground uppercase tracking-wide">{title}</h3>
              <CopyButton id={id as string} text={text as string} copiedId={copiedId} onCopy={copyText} />
            </div>
            <p className="body-default whitespace-pre-line">{text}</p>
          </article>
        ))}
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="heading-subsection">About Tectonic</h2>
          <CopyButton id="about-tectonic" text={aboutTectonic} copiedId={copiedId} onCopy={copyText} />
        </div>
        <div className="surface-elevated border border-border/40 rounded-lg p-5 md:p-6 space-y-3">
          <p className="body-default">{aboutTectonic}</p>
          {tectonicSiteUrl ? <a href={tectonicSiteUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-primary transition-colors">Visit Tectonic</a> : null}
        </div>
      </section>

      <section id="logos-brand" className="space-y-4">
        <h2 className="heading-subsection">Logos &amp; Brand Basics</h2>
        <div className="surface-elevated border border-border/40 rounded-lg p-5 md:p-6 space-y-6">
          <div className="space-y-2 text-sm">
            {assetsUrl ? <p><a href={assetsUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">Quantum Summit logos</a></p> : null}
            {assetsUrl ? <p><a href={assetsUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">Tectonic logos</a></p> : null}
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs md:text-sm">
            {[
              ["Primary accent", "#00BFFF"],
              ["Background", "#030811"],
              ["Secondary surface", "#0D1526"],
              ["Border", "#172136"],
              ["Text", "#F9FAFB"],
            ].map(([label, hex]) => (
              <div key={label} className="surface-card border border-border/50 rounded p-3 flex items-center gap-3">
                <span className="w-6 h-6 rounded border border-border/40" style={{ backgroundColor: hex as string }} />
                <div>
                  <p className="text-foreground">{label}</p>
                  <p className="text-muted-foreground">{hex}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">Geist Sans (primary)</p>
          <p className="text-sm text-muted-foreground">Please don’t stretch, recolor, or add effects to marks. Use provided light/dark variants for best contrast.</p>
        </div>
      </section>

      <section id="sponsors" className="space-y-4">
        <h2 className="heading-subsection">Sponsors</h2>
        <p className="text-sm text-muted-foreground">Logos and links below are approved for use in coverage.</p>
        <SponsorsGrid />
      </section>

      <section className="space-y-4">
        <h2 className="heading-subsection">Speakers</h2>
        <p className="body-default">Panelists are invite-only and curated for high-signal discussion. Speaker confirmations—including the PQC expert round—will be announced on a rolling basis as participants are finalized.</p>
      </section>

      <section id="social-pack" className="space-y-4">
        <h2 className="heading-subsection">Social Pack</h2>
        <p className="body-default">Pre-approved posts and visuals for media partners. Feel free to repost, quote, or adapt—please keep event naming and links intact.</p>
        <div className="grid gap-3">
          {socialPosts.map((post, index) => (
            <article key={post} className="surface-elevated border border-border/40 rounded-lg p-4 md:p-5 space-y-3">
              <div className="flex justify-between items-center gap-3">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Post {index + 1}</p>
                <CopyButton id={`social-${index}`} text={post} copiedId={copiedId} onCopy={copyText} />
              </div>
              <p className="text-sm text-foreground">{post}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-subsection">Media Assets</h2>
        <p className="body-default">Ready-to-publish visuals: banners, square posts, and speaker/sponsor announcement templates. More assets may be added closer to the event date.</p>
        {assetsUrl ? <a href={assetsUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">Open Media Assets</a> : null}
      </section>

      <section id="press-contact" className="space-y-3 pb-8">
        <h2 className="heading-subsection">Press Contact</h2>
        <p className="body-default">For interview requests, partner logistics, corrections, or assets:</p>
        <div className="surface-elevated border border-border/40 rounded-lg p-5 md:p-6 text-sm space-y-2">
          {pressEmail ? <p>Email: <a href={`mailto:${pressEmail}`} className="text-foreground hover:text-primary transition-colors">{pressEmail}</a></p> : null}
          {telegramLink ? <p>Telegram: <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">{pressTelegram}</a></p> : null}
        </div>
      </section>
    </div>
  );
};

export default MediaPartners;
