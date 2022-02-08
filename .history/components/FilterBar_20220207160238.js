import * as React from "react";
import styled from "styled-components";
import { useState } from "react";

export default function FilterBar({}) {
  const classes = useStyles();
  return (
    <Cont>
      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        classes={{ ul: classes.ul }}
      />
    </Cont>
  );
}
