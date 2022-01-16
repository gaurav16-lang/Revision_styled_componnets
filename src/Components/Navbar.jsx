import React from "react";

import styled from "styled-components";

const Navbarwrapper = styled.header`
  position: relative;
  height: 120px;
  background: #000;
  border: 1px solid red;
`;

const Logo = styled.div`
  height: 60px;
  position: absolute;
  left: 10px;
`;

const ResourceLinks = styled.div`
  font-weight: 300;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  padding: 10px 10px;
  border-radius: 2px;
  margin-left: 20px;

  @media all and (max-width: 600px) {
    padding: 10px 5px;
    display: none;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: #fff;
  margin-left: 50px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Navbarwrapper>
      <Logo>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wrbJxJhg0cDjzJWf1p1GXeavnFNA7lN8SpgJJAzmYmd-O_g8uK0kdnQZUCN2-oqhi2c&usqp=CAU"
          alt="logo"
          width="40px"
        />
      </Logo>
      <ResourceLinks>
        <Button>Try Now</Button>
        <A>About</A>
        <A>About</A>
        <A>About</A>
      </ResourceLinks>
    </Navbarwrapper>
  );
};

export default Navbar;
