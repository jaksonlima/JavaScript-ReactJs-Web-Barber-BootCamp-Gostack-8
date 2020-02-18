import React from "react";
import Proptypes from "prop-types";

import { Wrapper } from "./styles";

export default function AuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

AuthLayout.prototype = {
  children: Proptypes.element.isRequired
};
