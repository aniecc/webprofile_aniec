import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'

function App() {
  return (
      <Routes>
        <Route index element={<Main />} />
      </Routes>
  )
}

export default App