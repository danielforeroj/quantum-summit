import React from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  message?: string;
};

export default class AppErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: unknown): State {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { hasError: true, message };
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("App crashed:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen aurora-bg">
          <div className="section-container py-24">
            <h1 className="heading-section mb-4">Something went wrong</h1>
            <p className="body-default max-w-2xl">
              The page hit a rendering error. This screen is here so you don’t get a blank page.
            </p>
            {this.state.message ? (
              <pre className="mt-6 surface-elevated p-4 text-xs overflow-auto">
                {this.state.message}
              </pre>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="btn-secondary"
                onClick={() => window.location.reload()}
              >
                Reload
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
