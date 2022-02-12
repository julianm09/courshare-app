import styled from "styled-components";
import { useState } from "react";
import Checkbox from "./Checkbox";
import Rating from "@mui/material/Rating";

export default function DifficultyBar({
  difficulty = "Beginner",
  size = "small",
}) {
  return (
    <>
      {difficulty == "Beginner" && size == "small" ? (
        <img src="/icons/difficulty-1-s.svg" />
      ) : difficulty == "Intermediate" && size == "small" ? (
        <img src="/icons/difficulty-2-s.svg" />
      ) : difficulty == "Advanced" && size == "small" ? (
        <img src="/icons/difficulty-3-s.svg" />
      ) : difficulty == "Beginner" && size == "large" ? (
        <img src="/icons/difficulty-1-l.svg" />
      ) : difficulty == "Intermediate" && size == "large" ? (
        <img src="/icons/difficulty-2-l.svg" />
      ) : difficulty == "Advanced" && size == "large" ? (
        <img src="/icons/difficulty-3-l.svg" />
      ) : (
        <></>
      )}
    </>
  );
}
