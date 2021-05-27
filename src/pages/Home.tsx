import styled from "@emotion/styled";
import React from "react";
import Form from "../components/Form";
import List from "../components/List";

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;

const Home = () => {
  return (
    <Container>
      <Content>
        <Form />
      </Content>
      <Content>
        <List />
      </Content>
    </Container>
  );
};

export default Home;
