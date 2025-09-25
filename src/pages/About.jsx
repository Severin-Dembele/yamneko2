import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, Leaf, Users } from 'lucide-react'

const About = () => {
  const teamMembers = [
    { name: "Jannick DOE", role: "Fondateur", image: "/api/placeholder/300/300" },
    { name: "Jannick DOE", role: "Expert", image: "/api/placeholder/300/300" },
    { name: "Jannick DOE", role: "Consultant", image: "/api/placeholder/300/300" },
    { name: "Jannick DOE", role: "Analyste", image: "/api/placeholder/300/300" }
  ]

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
              <span className="text-gray-600">Accueil / À propos de nous</span>
              <ArrowRight className="w-5 h-5 text-emerald-500" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              QUI SOMMES-NOUS
            </h1>
          </div>
        </div>
      </section>

      {/* Section Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenu texte */}
            <div className="space-y-8">
              <div>
                <p className="text-emerald-600 font-medium mb-4">
                  Des solutions modernes & innovantes
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  YAM & KO, POUR UNE<br />
                  PERFORMANCE DURABLE
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <img 
                  src="/api/placeholder/200/250" 
                  alt="Équipe Yamneko" 
                  className="rounded-xl shadow-lg"
                />
                <div className="space-y-4">
                  <div className="bg-emerald-800 text-white p-6 rounded-xl">
                    <h3 className="font-bold text-lg mb-2">
                      TRANSFORMONS VOS IDÉES<br />
                      EN SOLUTIONS DURABLES<br />
                      ET PERFORMANTES
                    </h3>
                    <div className="flex justify-center mt-4">
                      <Leaf className="w-8 h-8 text-emerald-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image principale */}
            <div className="relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Agriculture durable" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Collaboration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-emerald-600 font-medium mb-4">
              Ce que nous faisons
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              VOUS METTRE AU CŒUR DE<br />
              NOTRE COLLABORATION
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Notre développement des stratégies environnementales et sociales 
              s'appuie sur une approche participative qui place vos besoins et 
              vos objectifs au centre de nos préoccupations.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
              Chaque projet est conçu pour optimiser vos ressources tout en 
              respectant les principes du développement durable et en favorisant 
              l'innovation dans vos pratiques agricoles.
            </p>
          </div>

          {/* Section Performance Durable */}
          <div className="bg-emerald-800 text-white rounded-3xl p-12 mb-20">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold">
                POUR UNE PERFORMANCE DURABLE
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Section Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-emerald-600 font-medium mb-4">
              Qui sommes-nous
            </p>
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

      {/* Section Équipe */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              NOTRE ÉQUIPE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Navigation équipe */}
          <div className="flex justify-center mt-12 space-x-4">
            <button className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
              <ArrowRight className="w-5 h-5 text-gray-600 rotate-180" />
            </button>
            <button className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                  <Input placeholder="Nom" className="rounded-lg" />
                  <Input placeholder="Prénom(s)" className="rounded-lg" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Email" type="email" className="rounded-lg" />
                  <Input placeholder="Téléphone" className="rounded-lg" />
                </div>
                <Textarea 
                  placeholder="Message" 
                  rows={6} 
                  className="rounded-lg"
                />
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg">
                  Envoyer le message
                </Button>
              </form>
            </div>

            {/* Image avec logo */}
            <div className="bg-emerald-800 rounded-3xl p-12 flex items-center justify-center relative overflow-hidden">
              <div className="text-center z-10">
                <div className="w-24 h-24 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-3xl">Y</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Yamneko</h3>
              </div>
              {/* Motifs décoratifs */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-32 h-32 border-2 border-emerald-400 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-emerald-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

