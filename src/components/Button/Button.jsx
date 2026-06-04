import { memo } from "react";

import { LoadMoreButton } from "./Button.styled.js";

export const Button = memo(({ onClick }) => {
  return (
    <LoadMoreButton type="button" onClick={onClick}>
      Load More
    </LoadMoreButton>
  );
});
