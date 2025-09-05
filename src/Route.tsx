import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { App } from './App'

export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
} 
