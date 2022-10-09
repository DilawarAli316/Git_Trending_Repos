import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Repos from './screens/ReposScreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Repos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
