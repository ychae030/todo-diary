import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/NotFound";
import Layout from "./components/common/Layouts/Layout";
import MainHeader from "./components/common/header/MainHeader";
import Todo from "./pages/todo/Todo";
import BackButton from "./components/common/header/BackButton";
import PendingTask from "./pages/todo/PendingTask";
import Diary from "./pages/diary/Diary";

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
        path: "todo/pending",
        element: (
          <Layout
            header={{ header: <BackButton /> }}
            content={{ children: <PendingTask /> }}
          />
        ),
      },
      {
        path: "diary",
        element: (
          <Layout
            header={{ header: <MainHeader /> }}
            content={{ children: <Diary /> }}
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
