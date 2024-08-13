import { Component, ErrorInfo, ReactNode } from 'react';

import { ErrorMessage } from './ErrorMessage';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      // error: '',
    };
  }

  static getDerivedStateFromError(_: Error): State {
    // Update state so the next render shows fallback UI.
    return { hasError: true };
  }

  componentDidUpdate(previousProps: Props) {
    const { children } = this.props;

    if (previousProps.children !== children) {
      this.setState({ hasError: false });
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // logErrorToMyService(error, errorInfo);
    // this.setState({ error })
  }

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <ErrorMessage />;
    }

    return children;
  }
}

export default ErrorBoundary;
