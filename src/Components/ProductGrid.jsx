// ProductGrid.js
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
// import { useCart } from "../context/CartContext";

const ProductGrid = ({ products, onAddToCart, loading }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {loading ? (
        products?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))
      ) : (
        <ProductCardSkeleton />
      )}
    </div>
  );
};

export default ProductGrid;
