import React from "react";
import styled from "styled-components";


const Header = () => {
  return (
    <Headers>
      <Home>
        <Homeitem>HOME</Homeitem>
        <Title>List Page</Title>
      </Home>
    </Headers>
  );
};
const Headers = styled.div`
  display: flex;  
  width: 100%;
  height: 100px;
  background-color: #DFC043;
  color : white;
`;
const Home = styled.div`
  display: flex;
  align-items: center;
`;
const Homeitem = styled.div`
display: flex;  
padding: 30px;
font-size: 20px;
color : #AE591F;
`;
const Title = styled.div`
  font-size: 40px;
  padding: 30px;
`;
export default Header;
