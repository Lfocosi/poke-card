import ReactDOM from 'react-dom/client'
import { CardsContext } from './context/CardContext.tsx'
import App from './App.tsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <CardsContext>
    <App />
  </CardsContext>
  )
