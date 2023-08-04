import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary component caught an erorr", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with the listing. <Link to="/">Click here</Link> to
          go back to the home page.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
