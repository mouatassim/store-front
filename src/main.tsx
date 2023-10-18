import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import BooksContextProvider from "./contexts/packagesContext";
import "./index.css";
import router from "./routes";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BooksContextProvider>
        <RouterProvider router={router} />
      </BooksContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
