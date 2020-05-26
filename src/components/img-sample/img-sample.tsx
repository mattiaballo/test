import { Component, ComponentInterface, h, getAssetPath } from "@stencil/core";

@Component({
  tag: "img-sample",
  styleUrl: "img-sample.scss",
  shadow: true,
  assetsDirs: ["/assets"],
})
export class ImgSample implements ComponentInterface {
  render() {
    return (
      <img
        width="400"
        height="600"
        src={getAssetPath("/assets/building.jpg")}
      />
    );
  }
}
