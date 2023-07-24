import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Update from "./pages/Update";
import Add from "./pages/add";
import Books from "./pages/Books";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Books />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/update/:id",
    element: <Update />,
  },
]);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
