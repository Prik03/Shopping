import ProductCard from "./ProductCard";
import ProductCardSekeleton from "./ProductCardSkeleton";

const ProductGrid = ({ products, onAddToCart, loading }) => {
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {loading &&
        skeleton.map((skeleton) => <ProductCardSekeleton key={skeleton} />)}
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
