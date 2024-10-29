const ProductCard = ({ product, onAddToCart }) => {
  return (
    <>
      <div className="border p-4 rounded shadow">
        <img src={product.images} alt="" />
        <h3 className="font-bold">{product.title}</h3>
        <p>${product.price}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="mt-2 p-2 bg-green-500 w-full rounded"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductCard;
