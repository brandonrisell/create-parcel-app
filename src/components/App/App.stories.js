import React from "react";
import { storiesOf } from "@storybook/react";

import { App } from "./App";

storiesOf("App")
  .add("with text", () => <App>Hello App</App>)
  .add("with emoji", () => (
    <App>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </App>
  ));
