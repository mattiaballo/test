import { Component, ComponentInterface, h } from "@stencil/core";

@Component({
  tag: "named-slot-paragraph",
  styleUrl: "named-slot-paragraph.scss",
  shadow: true,
})
export class NamedSlotParagraph implements ComponentInterface {
  render() {
    return (
      <p>
        <slot name="first" />
        <b>This is text between first and second slot</b>
        <slot name="second" />
      </p>
    );
  }
}
