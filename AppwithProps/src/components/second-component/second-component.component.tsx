import React from "react";

export default class SecondComponent extends React.Component<{ data: string }> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.data}
        second Component
      </div>
    );
  }
}
