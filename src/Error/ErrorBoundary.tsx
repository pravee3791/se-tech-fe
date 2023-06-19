import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackComponent: React.ComponentType<{ error: Error | null }>;
}

interface ErrorBoundaryState {
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    const { error } = this.state;
    const { fallbackComponent: FallbackComponent, children } = this.props;

    if (error) {
      return <FallbackComponent error={error} />;
    }

    return children;
  }
}

export default ErrorBoundary;
