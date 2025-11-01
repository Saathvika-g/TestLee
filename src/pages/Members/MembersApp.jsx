import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import People from './pages/People'
import Alumni from './pages/Alumni'
import CurrentMembers from './CurrentMembers'
import Research from './pages/Research'
import Publications from './pages/Publications'
import News from './pages/News'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>Lab Members</h1>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<People />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/current-members" element={<CurrentMembers />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Navigation />
      </div>
    </Router>
  )
}

export default App

