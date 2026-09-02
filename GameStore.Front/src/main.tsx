import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import AppRouters from './router/AppRouters.tsx'
import { GameProvider } from './context/GameContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameProvider>
      <AppRouters />
    </GameProvider>
  </StrictMode>,
)
