import React, { ReactNode } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const BigText = styled.h1`
  font-family: Impact;
  font-weight: 0;
  font-size: 36px;
  text-transform: uppercase;
`;
const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  padding-top: 100px;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

type SideBarProps = {
  children?: ReactNode;
};

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  return (
    <Sidebar>
      <SearchBar />
      <BigText> Top Posts</BigText>
      {children}
    </Sidebar>
  );
};

export default SideBar;
