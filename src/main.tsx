import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './router/browse-router.tsx';
import ProviderDefault from './components/provider-default.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProviderDefault>
      <RouterProvider router={router} />
    </ProviderDefault>
  </React.StrictMode>,
)
