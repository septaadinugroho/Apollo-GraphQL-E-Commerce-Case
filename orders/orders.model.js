const orders = [
  {
    date: "2023-11-09",
    subtotal: 41.0,
    items: [
      {
        product: {
          id: "LL5Pro",
          description: "Lenovo Legion 5 Pro",
          price: 20.5,
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
