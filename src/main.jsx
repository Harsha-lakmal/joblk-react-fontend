import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App'
import { ThemeProvider } from './comon/ThemeProvider/ThemeProvider'
import { BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
)
