import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onAddToCart, loading }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {products?.map((product) => (
        <ProductCard
          loadings={loading}
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
