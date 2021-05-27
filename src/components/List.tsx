import styled from "@emotion/styled";
import React from "react";
import useProductStore from "../stores/ProductStore";
import Empty from "./Empty";
import Item from "./Item";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px;
`;

const Tag = styled.h2`
  padding: 32px 0;
`;

const List: React.FC = () => {
  const products = useProductStore((state) => state.products);
  return (
    <Container>
      <Tag>Product List</Tag>
      {products.length > 0 ? (
        products.map((x, key) => <Item key={key} {...x} />)
      ) : (
        <Empty />
      )}
    </Container>
  );
};

export default List;
