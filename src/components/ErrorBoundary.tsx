import React, { Component } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends Component<React.PropsWithChildren<object>, ErrorBoundaryState> {
  constructor(props: React.PropsWithChildren<object>) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Terjadi kesalahan:", error, errorInfo);
    this.setState({ errorInfo: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert">
          <h2>Terjadi kesalahan:</h2>
          <p>{this.state.error?.toString()}</p> {/* Use optional chaining */}
          <p>Silakan coba muat ulang halaman ini atau coba lagi nanti.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;