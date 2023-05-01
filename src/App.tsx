import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/pages/layout";
import Home from "./components/pages/home";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
