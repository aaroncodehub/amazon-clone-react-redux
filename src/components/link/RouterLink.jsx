import React from "react";
import { Link } from "react-router-dom";

const RouterLink = ({ children, ...props }) => {
  return <Link style={{textDecoration:'none'}} {...props}>{children}</Link>;
};

export default RouterLink;
