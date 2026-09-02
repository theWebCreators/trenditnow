import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
const WaterLabel = lazy(() => import('./pages/WaterLabel'))

export default function App() {
  const location = useLocation()
  return <AnimatePresence mode="wait"><Suspense fallback={<div className="page-loader">TrendItNow</div>}><Routes location={location} key={location.pathname}>
    <Route path="/" element={<Home />} />
    <Route path="/ideation/water-label" element={<WaterLabel />} />
  </Routes></Suspense></AnimatePresence>
}
