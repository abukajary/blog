import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 10px 10px;
  flex-grow: 1;
  border-radius: 5px 0 0 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  max-width: 150px;
`;

const SearchButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 10px;
  /* border-radius: 5px; */
  cursor: pointer;
  outline: none;

  &:hover {
    background: #0056b3;
  }
`;

const SearchBar: React.FC = () => {
  return (
    <SearchContainer>
      <SearchInput placeholder="Search..." />
      <SearchButton>Search</SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
