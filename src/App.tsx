import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/pages/home";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about/child1",
        element: <h1>Child 1</h1>,
      },
      {
        path: "/about/child2",
        element: <h1>Child 2</h1>,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
