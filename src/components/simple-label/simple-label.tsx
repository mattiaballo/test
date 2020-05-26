import { Component, ComponentInterface, h } from "@stencil/core";

@Component({
  tag: "simple-label",
  styleUrl: "simple-label.scss",
  shadow: false,
})
export class SimpleLabel implements ComponentInterface {
  render() {
    return (
      <button class="pure-button pure-button-primary">
        A simple label button
      </button>
    );
  }
}
