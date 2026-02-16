import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '50px', textAlign: 'center', background: '#fff', minHeight: '100vh' }}>
                    <h1 style={{ color: '#ff4d4f' }}>Something went wrong.</h1>
                    <p style={{ color: '#666' }}>The application crashed during rendering.</p>
                    <pre style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', display: 'inline-block', textAlign: 'left', marginTop: '20px' }}>
                        {this.state.error?.toString()}
                    </pre>
                    <div style={{ marginTop: '30px' }}>
                        <button onClick={() => window.location.reload()} style={{ padding: '10px 20px', background: '#1890ff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
