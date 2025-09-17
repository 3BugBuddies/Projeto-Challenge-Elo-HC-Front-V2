import { Link } from 'react-router-dom'
import { Github, Youtube } from 'lucide-react'
import { Container } from './ui'

export default function Footer() {
  const navigation = [
    { name: 'Integrantes', href: '/integrantes' },
    { name: 'Tutorial', href: '/tutorial' },
    { name: 'Info e contato', href: '/contato' },
  ]

  return (
    <footer className="bg-gray-100 border-t">
      <Container className="py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="/img/logo-sugestao-azul.png"
                alt="Elo IMREA Logo"
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-background-dark-blue hover:text-primary-600 font-bold uppercase text-lg transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/3BugBuddies/Projeto-Elo-IMREA-"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-background-dark-blue text-base">
            &copy; 2025 Elo IMREA. Todos direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}