import { lazy } from "react"
import { Route, Routes } from "react-router-dom/dist"

// const HomePage = lazy(() => import('../pages/HomePage'))
import HomePage from "pages/HomePage"

export const App = () => {
  return (
<Routes>
  <Route path="/home" element={<HomePage/>}/>
</Routes>
  )
}