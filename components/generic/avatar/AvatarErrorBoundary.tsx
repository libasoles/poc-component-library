import { Component, PropsWithChildren } from "react";
import { Patient } from "types/Patient";
import { Avatar } from "./Avatar";

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<PropsWithChildren, State> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state?.hasError) {
      const fakePatient = { name: "the patient", avatar: "" } as Patient;

      return <Avatar patient={fakePatient} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
