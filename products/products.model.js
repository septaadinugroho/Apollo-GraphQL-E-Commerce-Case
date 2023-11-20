const products = [
  {
    id: "Lenovo",
    description: "Lenovo Legion 5 Pro",
    price: 20.55,
    reviews: [],
  },
  {
    id: "Samsung",
    description: "Samsung Monitor 4K 32inch",
    price: 10.15,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  //membagi banyak product (products) menjadi satu satu (product)
  return products.filter((product) => {
    //menampilkan product yang sesuai parameter harga minimal dan maxsimal (range)
    return product.price >= min && product.price <= max;
  });
}

function getProductById(id) {
  return products.find((product) => {
    return product.id === id;
  });
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };

  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const matchedProduct = getProductById(id);

  if (matchedProduct) {
    const newProductReview = {
      rating,
      comment,
    };

    matchedProduct.reviews.push(newProductReview);
    return newProductReview;
  }
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
