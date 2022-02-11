import styled from "styled-components";
import { useState } from "react";
import Checkbox from "./Checkbox";
import Rating from "@mui/material/Rating";

export default function RatingStars({
  defaultValue = "4.6",
  precision = "0.1",
  readOnly = "true",
  size = "small",
  color = "#FFC403",
}) {
  return (
    <Rating
      defaultValue={defaultValue}
      precision={precision}
      readOnly={readOnly}
      size={size}
      style={{ color: color }}
    ></Rating>
  );
}
