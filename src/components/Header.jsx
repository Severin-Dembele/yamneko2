import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Header = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-sm flex items-center justify-center">
              <div className="text-white font-bold text-lg">Y</div>
            </div>
            <span className="text-xl font-bold text-gray-900">Yamneko</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                isActive('/') ? 'text-emerald-600' : 'text-gray-700'
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                isActive('/about') ? 'text-emerald-600' : 'text-gray-700'
              }`}
            >
              À propos de nous
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                isActive('/services') ? 'text-emerald-600' : 'text-gray-700'
              }`}
            >
              Nos services
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                isActive('/contact') ? 'text-emerald-600' : 'text-gray-700'
              }`}
            >
              Contacts
            </Link>
          </nav>

          {/* CTA Button */}
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-medium">
            Travaillons ensemble
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header

