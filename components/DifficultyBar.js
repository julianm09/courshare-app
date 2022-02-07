import styled from "styled-components";
import { useState } from "react";
import Checkbox from "./Checkbox";
import Rating from "@mui/material/Rating";

export default function DifficultyBar({
  difficulty = "beginner",
  size = "small",
}) {
  return (
    <>
      {difficulty == "beginner" && size == "small" ? (
        <img src="/icons/difficulty-1-s.svg" />
      ) : difficulty == "intermediate" && size == "small" ? (
        <img src="/icons/difficulty-2-s.svg" />
      ) : difficulty == "beginner" && size == "small" ? (
        <img src="/icons/difficulty-3-s.svg" />
      ) : difficulty == "beginner" && size == "small" ? (
        <img src="/icons/difficulty-1-l.svg" />
      ) : difficulty == "beginner" && size == "small" ? (
        <img src="/icons/difficulty-2-l.svg" />
      ) : difficulty == "beginner" && size == "small" ? (
        <img src="/icons/difficulty-3-l.svg" />
      ) : (
        <></>
      )}
    </>
  );
}
