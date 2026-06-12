import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "@tanstack/react-router";
import router from './router/router.tsx';

const RouterWrapper = () => {
  return (
    <RouterProvider
      router={router}
    />
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterWrapper />
  </StrictMode>,
)
