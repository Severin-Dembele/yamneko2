import { Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et slogan */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-sm flex items-center justify-center">
                <div className="text-white font-bold text-lg">Y</div>
              </div>
              <span className="text-xl font-bold">Yamneko</span>
            </div>
            <p className="text-emerald-100 text-sm leading-relaxed">
              Yam & Ko, Pour une<br />
              performance durable
            </p>
          </div>

          {/* Adresse */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Adresse</h3>
            <div className="text-emerald-100 text-sm space-y-1">
              <p>Burkina FASO</p>
              <p>BP XXX OUAGA XXX XXXXX</p>
              <p>OUAGADOUGOU Burkina FASO</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Travaillons ensemble</h3>
            <div className="text-emerald-100 text-sm space-y-1">
              <p>00226 XXXXXXXX - 00226 XXXXXXXX</p>
              <p>contact@yamneko.com</p>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-emerald-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-emerald-100 text-sm">
              Yamneko SARL © 2023. Tous droits réservés.
            </p>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-emerald-100 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-emerald-100 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-emerald-100 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Grande signature Yamneko */}
      <div className="bg-emerald-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-6xl md:text-8xl font-bold text-emerald-400 opacity-50">
              Yamneko
            </h2>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

