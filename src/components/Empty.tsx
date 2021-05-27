import styled from "@emotion/styled";
import React from "react";

const Card = styled.div`
  width: 280px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fd7279;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 280px;
    height: 120px;
    background: #2943d6;
    transform: rotate(15deg);
    z-index: -1;
  }

  h1 {
    color: #fff;
    font-size: 1.2em;
    letter-spacing: 1.1px;
  }
`;

const Empty = () => {
  return (
    <Card>
      <h1>Empty Products</h1>
    </Card>
  );
};

export default Empty;
