const routes = [
  {
    path: "/",
    exact: true,
    component: () => import("./Home")
  },
  {
    path: "/dynamic",
    exact: true,
    component: () => import("./DynamicPage")
  }
];

export default routes;
