import React from "react";
import classes from "./ExtraServices.module.css";

const ExtraServicesCard = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default ExtraServicesCard;
