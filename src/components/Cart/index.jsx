import { CartContext } from "../../Providers/Cart";
import { useContext } from "react";
import { Container, Header, CartContainer, EmptyContainer } from "./style";
import { CardProduct } from "../CardProducts";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <Container>
      <Header>
        <h1>Carrinho</h1>
      </Header>
      {cart.length > 0 ? (
        <CartContainer>
          {cart.map(item => {
            return <CardProduct isOnCart product={item} />;
          })}
        </CartContainer>
      ) : (
        <EmptyContainer>
          <h2>Adicione um produto!</h2>
        </EmptyContainer>
      )}
    </Container>
  );
};
