import React from "react";
import styled from "@emotion/styled";
import { SubmitHandler, useForm } from "react-hook-form";
import { Product } from "../libs/Product";
import useProductStore from "../stores/ProductStore";

const Container = styled.form`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  min-width: 450px;
  padding: 16px;
  letter-spacing: 1.1px;
  margin-bottom: 16px;
`;

const TextArea = styled.textarea`
  min-width: 450px;
  min-height: 250px;
  padding: 16px;
  margin-bottom: 16px;
  resize: none;
`;

const Button = styled.button`
  border: none;
  padding: 16px 32px;
  background-color: #393939;
  color: #c9c9c9;
  cursor: pointer;
  transition: all 0.25s ease-in;
  text-transform: uppercase;
  font-weight: bold;
  &:hover {
    background-color: #000;
    color: #e9e9e9;
  }
`;

const Form = () => {
  const { register, handleSubmit, reset } = useForm<Product>();
  const addProduct = useProductStore((state) => state.addProduct);
  const onAddProduct: SubmitHandler<Product> = (data, e) => {
    reset();
    addProduct(data);
  };
  return (
    <Container onSubmit={handleSubmit(onAddProduct)}>
      <input type="hidden" value={Date.now()} {...register("id")} />
      <Input
        type="text"
        placeholder="Product Name"
        {...register("product_name")}
        autoComplete="off"
      />
      <Input
        type="number"
        placeholder="Price"
        {...register("price")}
        autoComplete="off"
      />
      <TextArea
        placeholder="Description"
        {...register("description")}
        autoComplete="off"
      />
      <Button type="submit">Add Product</Button>
    </Container>
  );
};

export default Form;
