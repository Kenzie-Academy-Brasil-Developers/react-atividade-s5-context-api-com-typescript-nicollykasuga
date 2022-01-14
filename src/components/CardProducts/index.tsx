import { Container, Image, Button } from "./style";
import { useContext } from "react";
import { CartContext } from "./../../Providers/Cart/index";
interface Products {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface CardProductsProps {
  product: Products;
  isOnCart: boolean;
}

export const CardProduct = ({ product, isOnCart }: CardProductsProps) => {
  const { addProduct, deleteProduct } = useContext(CartContext);

  return (
    <Container>
      <Image src={product.image} alt={product.title}></Image>
      <p className="Title">{product.title}</p>
      <p className="Price">R${product.price.toFixed(2)}</p>
      {isOnCart ? (
        <Button onClick={() => deleteProduct(product)} backgroundTrue isOnCart>
          Remover do Carrinho
        </Button>
      ) : (
        <Button
          onClick={() => addProduct(product)}
          backgroundTrue={false}
          isOnCart
        >
          Adicionar ao Carrinho
        </Button>
      )}
    </Container>
  );
};
