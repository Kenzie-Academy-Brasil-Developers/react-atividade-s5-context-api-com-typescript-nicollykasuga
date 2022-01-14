import { CartProvider } from "./Cart";
import { ProductsProvider } from "./Products";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}
export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ProductsProvider>
      <CartProvider>{children}</CartProvider>
    </ProductsProvider>
  );
};
