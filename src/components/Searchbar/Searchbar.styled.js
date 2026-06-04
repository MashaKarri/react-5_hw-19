import styled from "styled-components";

export const Header = styled.header`
  padding: 10px;
  background: #113743;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 5px;
  overflow: hidden;
`;

export const Input = styled.input`
  padding: 10px;
  font-family: "Space Grotesk", sans-serif;
  width: 250px;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  background: #a3a3a3ff;
  font-size: 15px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    background: #8c8a8aff;
  }
`;
