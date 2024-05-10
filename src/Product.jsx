import axios from 'axios';
import React from 'react'
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Product = () => {

  const { id } = useParams();

  // Mutations
  const mutation = useMutation({
    mutationFn: (newProduct) => {
      return axios.put(`https://dummyjson.com/products/${id}`, newProduct);
    },
  });

  console.log(mutation);
  async function getProducts() {
    let response = await fetch(`https://dummyjson.com/products/${id}`);
    response = await response.json();
    return response;
  }

  const {
    isLoading,
    error,
    data: product,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error: {error.message}</h1>
  }

  if (mutation.isLoading) {
    return <h1>Updating...</h1>;
  }

  if (mutation.isError) {
    return <h3>Error while updating. {mutation.error.message}</h3>;
  }

  return (
    <>
      <div>Product: {product.title}</div>
      <button
        onClick={() => {
          mutation.mutate({ title: "Updated product" })
        }}
      >
        Create product
      </button>
    </>
  )
}

export default Product