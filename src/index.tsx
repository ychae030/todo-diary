import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/NotFound";
import Calendar from "./pages/diary/Calendar";
import Layout from "./components/common/Layouts/Layout";
import MainHeader from "./components/common/header/MainHeader";
import Todo from "./pages/todo/Todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <Layout
            header={{ header: <MainHeader /> }}
            content={{ children: <Todo /> }}
          />
        ),
      },
      {
        path: "todo",
        element: (
          <Layout
            header={{ header: <MainHeader /> }}
            content={{ children: <Todo /> }}
          />
        ),
      },
      {
        path: "diary",
        element: (
          <Layout
            header={{ header: <MainHeader /> }}
            content={{ children: <Calendar /> }}
          />
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
