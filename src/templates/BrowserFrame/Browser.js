import React from "react";
import { SmallFrame } from "../../components/SmallBrowserFrame/SmallFrame";
import { BigFrame } from "../../components/BigBrowserFrame/BigFrame";
import "./browser.css";

export const Browser = () => {
  return <>{browserWindow ? <BigFrame /> : <SmallFrame />}</>;
};
