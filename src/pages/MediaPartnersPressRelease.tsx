import { Link } from "react-router-dom";

const MediaPartnersPressRelease = () => {
  const docUrl = import.meta.env.VITE_PRESS_RELEASE_DOC_URL as string | undefined;
  const pdfUrl = import.meta.env.VITE_PRESS_RELEASE_PDF_URL as string | undefined;

  return (
    <div className="space-y-6 md:space-y-8">
      <section className="space-y-4">
        <p className="label-caps">Media Resources</p>
        <h1 className="heading-section">Press Release</h1>
        <p className="body-default max-w-3xl">
          This page contains the official, publish-ready press release and downloadable files (PDF / Doc). Please use it as the source of truth when publishing.
        </p>
        <div className="flex flex-wrap gap-3">
          {docUrl ? (
            <a href={docUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Download Doc
            </a>
          ) : null}
          {pdfUrl ? (
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Download PDF
            </a>
          ) : null}
          <Link to="/media-partners" className="btn-secondary">
            Back to Media Partner Kit
          </Link>
        </div>
      </section>

      <section className="surface-elevated border border-border/40 rounded-lg p-6 md:p-7">
        <p className="body-default">Press release text will be published here.</p>
      </section>
    </div>
  );
};

export default MediaPartnersPressRelease;
