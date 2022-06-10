import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Today from "@pages/Today";
import Monthly from "@pages/Monthly";
import Hourly from "@pages/Hourly";
import Daily from "@pages/Daily";

type RouteTypes = {
  element: React.ReactNode;
  path: string;
};

const routes: RouteTypes[] = [
  {
    element: <Today />,
    path: "/"
  },
  {
    element: <Monthly />,
    path: "/monthly"
  },
  {
    element: <Hourly />,
    path: "/hourly"
  },
  {
    element: <Daily />,
    path: "/daily"
  }
];

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route: RouteTypes) => {
          return (
            <Route key={route.path} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
