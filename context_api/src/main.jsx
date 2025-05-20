import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './Card.jsx'

createRoot(document.getElementById('root')).render(
    <Card>
    <App />
   </Card>
)
