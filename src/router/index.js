import { createRouter, createWebHistory } from "vue-router";

import ProductsList from "../pages/ProductsList";

const UserCart = () =>
  import(/* webpackChunkName: "group-user" */ "../pages/UserCart");
const ShopAdmin = () =>
  import(/* webpackChunkName: "group-user" */ "../pages/ShopAdmin");

const routes = [
  {
    path: "/",
    redirect: "/products",
  },
  {
    path: "/products",
    component: ProductsList,
  },
  { path: "/cart", component: UserCart },
  { path: "/admin", component: ShopAdmin },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
