export const itemsSideBar = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Products",
    path: "/products",
  },
  {
    label: "About",
    children: [
      {
        label: "Child 1",
        path: "/about/child1",
      },
      {
        label: "Child 2",
        path: "/about/child2",
      },
    ],
  },
];
