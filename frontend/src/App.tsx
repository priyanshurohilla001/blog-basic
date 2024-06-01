import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { Create } from './pages/Create'
import { Homepage } from './pages/Homepage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App