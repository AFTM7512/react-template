import React, { Component, ComponentType } from "react";

interface Iprops {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any,
}
interface IState {
  component: ComponentType | null
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function asyncComponent(importComponent: () => any) {
  class AsyncComponent extends Component<Iprops, IState> {
    constructor(props: Iprops) {
      super(props);

      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component,
      });
    }

    render() {
      const C = this.state.component;

      return (
        C ? <C {...this.props} /> : ""
      );
    }
  }

  return AsyncComponent;
}
