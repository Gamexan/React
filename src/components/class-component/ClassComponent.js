import { Component, Fragment } from "react";

export class ClassComponent extends Component {
  render() {
    const { name, age } = this.props;

    return (
      <Fragment>
        <h1>ClassComponent</h1>
        <h2>Nombre: {name}</h2>
        <h2>Edad: {age}</h2>
      </Fragment>
    );
  }
}