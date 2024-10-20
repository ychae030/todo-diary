import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
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
import CreateDiary from "./pages/diary/CreateDiary";
import DetailDiary from "./pages/diary/DetailDiary";

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
      {
        path: "diary/create",
        element: (
          <Layout
            header={{ header: <BackButton /> }}
            content={{ children: <CreateDiary /> }}
          />
        ),
      },
      {
        path: "diary/detail/:date",
        element: (
          <Layout
            header={{ header: <BackButton isModify /> }}
            content={{ children: <DetailDiary /> }}
          />
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
