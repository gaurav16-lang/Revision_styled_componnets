import "./styles.css";
import Navbar from "./Components/Navbar";

import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  border: 1px solid blue;
  padding: 2rem;

  h1 {
    color: blue;

    @media all and (max-width: 620px) {
      color: pink;
    }
  }
  h2 {
    color: red;
  }
`;

const A = styled.a`
  text-decoration: none;
  font-size: 22px;
  color: ${(props) => (props.color === "yellow" ? "yellow" : "red")};
`;

export default function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <Wrapper>
        <A color="yellow" href="https://www.google.com">
          go to google
        </A>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </Wrapper> */}
    </div>
  );
}
