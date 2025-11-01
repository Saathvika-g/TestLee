import { useNavigate, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { label: 'Research', path: '/research' },
    { label: 'People', path: '/' },
    { label: 'Publications', path: '/publications' },
    { label: 'News/Updates', path: '/news' },
    { label: 'Contact', path: '/contact' },
    { label: 'Login', path: '/login' }
  ]

  return (
    <nav className="bottom-navigation">
      <div className="nav-container">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <button
              key={item.path}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default Navigation

