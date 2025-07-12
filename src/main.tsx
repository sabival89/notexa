import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import GlobalStyles from './styles/GlobalStyles.tsx'
import './styles/App.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<GlobalStyles />
		<App />
	</StrictMode>,
)
