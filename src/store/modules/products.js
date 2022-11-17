export default {
  namespaced: true,
  state: {
    products: [
      {
        id: "p1",
        image: "https://picsum.photos/200/300",
        title: "Book Collection",
        description:
          "A collection of must-read books. All-time classics included!",
        price: 99.99,
      },
      {
        id: "p2",
        image: "https://picsum.photos/200/300",
        title: "Mountain Tent",
        description: "A tent for the ambitious outdoor tourist.",
        price: 129.99,
      },
      {
        id: "p3",
        image: "https://picsum.photos/200/300",
        title: "Food Box",
        description:
          "May be partially expired when it arrives but at least it is cheap!",
        price: 6.99,
      },
    ],
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
};
