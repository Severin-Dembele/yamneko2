import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, Leaf, MapPin, Phone, Mail } from 'lucide-react'

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <Leaf className="w-16 h-16 text-emerald-500" />
            </div>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className="text-gray-600">Accueil / Contacts</span>
              <ArrowRight className="w-5 h-5 text-emerald-500" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              TRAVAILLONS<br />
              ENSEMBLE
            </h1>
            <ArrowRight className="w-12 h-12 text-emerald-500 mx-auto" />
          </div>
        </div>
      </section>

      {/* Section Informations de Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Adresse */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Adresse</h3>
              <div className="text-gray-600 space-y-1">
                <p>Burkina FASO</p>
                <p>BP XXX OUAGA XXX XXXXX</p>
                <p>OUAGADOUGOU Burkina FASO</p>
              </div>
            </div>

            {/* Contacts */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nos Contacts</h3>
              <div className="text-gray-600 space-y-1">
                <p>00226 XXXXXXXX - 00226 XXXXXXXX</p>
                <p>contact@yamneko.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Formulaire Principal */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image avec logo */}
            <div className="bg-emerald-800 rounded-3xl p-12 flex items-center justify-center relative overflow-hidden">
              <div className="text-center z-10">
                <div className="w-24 h-24 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-3xl">Y</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Yamneko</h3>
              </div>
              {/* Motifs décoratifs ondulés */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                  <path 
                    d="M50 200 Q 200 100 350 200 T 650 200" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                  />
                  <path 
                    d="M50 250 Q 200 150 350 250 T 650 250" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                  />
                  <path 
                    d="M50 300 Q 200 200 350 300 T 650 300" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            {/* Formulaire */}
            <div className="space-y-8">
              <div>
                <p className="text-emerald-600 font-medium mb-2">Contacter-nous</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Avec vous,<br />
                  valorisons votre visons
                </h2>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Nom" 
                    className="rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" 
                  />
                  <Input 
                    placeholder="Prénom(s)" 
                    className="rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" 
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Email" 
                    type="email" 
                    className="rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" 
                  />
                  <Input 
                    placeholder="Téléphone" 
                    className="rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500" 
                  />
                </div>
                <Textarea 
                  placeholder="Message" 
                  rows={6} 
                  className="rounded-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium">
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Section Informations Détaillées */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Adresse détaillée */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Notre Adresse</h3>
              <div className="text-gray-600 space-y-1">
                <p className="font-medium">Burkina FASO</p>
                <p>BP XXX OUAGA XXX XXXXX</p>
                <p>OUAGADOUGOU</p>
                <p>Burkina FASO</p>
              </div>
            </div>

            {/* Téléphones */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Téléphones</h3>
              <div className="text-gray-600 space-y-1">
                <p>00226 XXXXXXXX</p>
                <p>00226 XXXXXXXX</p>
              </div>
            </div>

            {/* Email */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Email</h3>
              <div className="text-gray-600">
                <p>contact@yamneko.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-800 text-white rounded-3xl p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Prêt à transformer vos idées en réalité ?
            </h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de vos projets 
              agro-sylvo-pastoraux et découvrir comment nous pouvons vous accompagner 
              vers une performance durable.
            </p>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-medium">
              Démarrer un projet
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Nous transformons vos idées en <span className="text-emerald-600 font-semibold">projets agro-sylvo-pastoraux durables</span>, en 
              alliant expertise, innovation et engagement. Notre mission est de valoriser 
              vos ressources, <span className="text-emerald-600 font-semibold">optimiser vos performances</span> et soutenir la croissance de vos 
              activités, du champ jusqu'au marché.
            </p>
            <p className="text-emerald-600 font-semibold mt-6">Akwaba Agribiz</p>
            <p className="text-gray-500 text-sm mt-2">Directeur Général</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

