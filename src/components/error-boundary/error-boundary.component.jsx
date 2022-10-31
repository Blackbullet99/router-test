import { useState } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const catchError = () => {
    if(hasError) {
      return <h1>Something went wrong</h1>
    }

    return children;
  }

    return (
        <div>
            {catchError()}
        </div>
    )
};

export default ErrorBoundary;
