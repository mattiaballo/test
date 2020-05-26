import {
  Component,
  ComponentInterface,
  h,
  EventEmitter,
  Event,
  Prop,
} from "@stencil/core";

@Component({
  tag: "simple-button",
  styleUrl: "simple-button.scss",
  shadow: true,
})
export class SimpleButton implements ComponentInterface {
  /**
   * Event emitted when clicked on button
   */
  @Event() changeClick: EventEmitter;
  /**
   * Text shown inside button
   */
  @Prop() label: string;

  private handleClick = () => {
    this.changeClick.emit();
  };

  render() {
    return (
      <button
        class="pure-button pure-button-primary"
        onClick={this.handleClick}
      >
        {this.label}
      </button>
    );
  }
}
