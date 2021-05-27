import styled from "@emotion/styled";
import React from "react";
import { Product } from "../libs/Product";
import useProductStore from "../stores/ProductStore";

const Card = styled.div`
  width: 70%;
  padding: 24px;
  border-radius: 8px;
  user-select: none;
  margin-bottom: 24px;
  transition: all 0.25s ease-in;
  &:last-child {
    margin-bottom: 0;
  }
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.12);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.13), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
const Header = styled.h3`
  display: flex;
  align-items: center;
`;
const Name = styled.h3`
  flex: 1;
`;

const Tag = styled.span`
  padding: 12px;
  font-size: 0.7em;
  border-radius: 24px;
  background-color: #393939;
  letter-spacing: 1px;
  color: #e9e9e9;
`;

const TagDelete = styled(Tag)`
  background-color: red;
  color: #fff;
  cursor: pointer;
`;

const Description = styled.p`
  border-left: 4px solid rgba(100, 100, 100, 0.3);
  padding-left: 16px;
  text-transform: capitalize;
  margin-bottom: 32px;
`;

const Item: React.FC<Product> = ({
  id,
  product_name,
  price,
  description,
}: Product) => {
  const deleteProduct = useProductStore((state) => state.deleteProduct);
  const onProductDelete = (id: String) => {
    deleteProduct(id);
  };
  return (
    <Card>
      <Header>
        <Name>{product_name}</Name>
        <Tag>Rp. {price}</Tag>
      </Header>
      <Description>{description}</Description>
      <TagDelete onClick={() => onProductDelete(id)}>Delete</TagDelete>
    </Card>
  );
};

export default Item;
