import PageOne from "@pages/page1/PageOne";
import PageTwo from "@pages/page2/PageTwo";
import App from "@src/App";
import Home from "@src/pages/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "page_1",
        element: <PageOne />,
      },
      {
        path: "page_2",
        element: <PageTwo />,
      },
    ],
  },
]);

export default router;
