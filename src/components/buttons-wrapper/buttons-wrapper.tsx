import {
  Component,
  ComponentInterface,
  Host,
  h,
  State,
  Listen,
} from "@stencil/core";

/**
 * Simple button wrapper with counter
 * @author Mattia Ballo
 * @version 1.0.0
 */
@Component({
  tag: "buttons-wrapper",
  styleUrl: "buttons-wrapper.scss",
  shadow: true,
})
export class ButtonsWrapper implements ComponentInterface {
  @State() counter = 0;

  @Listen("changeClick")
  onChangeClickListen() {
    console.log("(LISTEN) change click triggered!");
  }

  @Listen("load", { target: "window" })
  onWindowLoad() {
    console.log("Window loaded!");
  }

  private increaseCounter = () => {
    this.counter++;
    console.log("change click triggered!", this.counter);
  };

  render() {
    return (
      <Host>
        <simple-button
          onChangeClick={this.increaseCounter}
          label="Simple Button"
        ></simple-button>
        {this.counter}
      </Host>
    );
  }
}
