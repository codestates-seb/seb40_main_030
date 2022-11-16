import Layout from "../components/@layout/Layout";
import { ROUTES } from "../constants";
import Home from "./Home";
import NotFound from "./NotFound";

const PAGES = [
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: ROUTES.HOME.PATH,
        name: ROUTES.HOME.NAME,
      },
    ],
  },
  {
    element: <NotFound />,
    path: ROUTES.NOT_FOUND.PATH,
    name: ROUTES.NOT_FOUND.NAME,
  },
];

export default PAGES;
