import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Settings} from "./components/Settings.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App />
      <Settings/>
  </StrictMode>,
)
