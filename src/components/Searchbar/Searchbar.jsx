import { useState, useCallback } from "react";

import { IoSearchOutline } from "react-icons/io5";

import { Header, Form, SearchBox, Input, Button } from "./Searchbar.styled.js";

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      if (!query.trim()) return;

      onSubmit(query.trim());
      setQuery("");
    },
    [query, onSubmit],
  );

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <SearchBox>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
          />

          <Button type="submit">
            <IoSearchOutline />
          </Button>
        </SearchBox>
      </Form>
    </Header>
  );
};
