import styled from "styled-components";

export const Item = styled.li`
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;

  &:hover {
    transform: scale(1.02);
  }
`;
