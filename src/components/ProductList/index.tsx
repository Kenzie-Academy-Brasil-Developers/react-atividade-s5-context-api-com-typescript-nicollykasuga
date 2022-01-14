import { useContext } from "react";
import { ProductsContext } from "../../Providers/Products";
import { Container, Header, ProductsContainer } from "./styles";
import { CardProduct } from "../CardProducts";

export const ProductsList = () => {
  const { productsItems } = useContext(ProductsContext);

  console.log(productsItems);

  return (
    <Container>
      <Header>
        <h1> Produtos</h1>
      </Header>
      <ProductsContainer>
        {productsItems.map(item => {
          return <CardProduct isOnCart={false} product={item} />;
        })}
      </ProductsContainer>
    </Container>
  );
};
