import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, Leaf, Settings, Users, Lightbulb } from 'lucide-react'

const Services = () => {
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
              <span className="text-gray-600">Accueil / Nos services</span>
              <ArrowRight className="w-5 h-5 text-emerald-500" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              QU'OFFRONS-NOUS
            </h1>
          </div>
        </div>
      </section>

      {/* Section Services Détaillés */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-emerald-600 font-medium mb-4">
              PARCE QUE CHAQUE ACTEUR AGRO-SYLVO-PASTORAL EST UNIQUE,
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              NOUS FAÇONNONS DES RÉPONSES ADAPTÉES À VOS AMBITIONS.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Services List */}
            <div className="space-y-12">
              {/* Service 1 */}
              <div className="flex space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 font-bold text-2xl">01</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    PRODUCTION & VALORISATION
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    De la graine jusqu'aux marchés et à la commercialisation, nous vous accompagnons 
                    dans l'optimisation de votre chaîne de valeur agricole. Notre expertise couvre 
                    la planification des cultures, l'amélioration des techniques de production, 
                    la transformation des produits et leur mise sur le marché pour maximiser 
                    vos rendements et votre rentabilité.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="flex space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 font-bold text-2xl">02</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    FOURNITURE D'ÉQUIPEMENTS
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nous mettons à votre disposition des équipements modernes et adaptés 
                    à vos besoins spécifiques. De la mécanisation agricole aux outils 
                    de transformation, nous sélectionnons et fournissons des solutions 
                    technologiques qui améliorent votre productivité et réduisent 
                    la pénibilité du travail dans vos activités quotidiennes.
                  </p>
                </div>
              </div>

              {/* Service 3 */}
              <div className="flex space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 font-bold text-2xl">03</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    CONSEIL & ASSISTANCE
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Notre équipe d'experts vous accompagne avec des conseils personnalisés 
                    et une assistance technique continue. Nous analysons vos défis, 
                    proposons des solutions adaptées et vous guidons dans la mise en œuvre 
                    de pratiques innovantes pour optimiser vos performances et atteindre 
                    vos objectifs de développement durable.
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img 
                src="/api/placeholder/500/600" 
                alt="Services agricoles" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                <Settings className="w-8 h-8 text-white" />
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
              Chaque à notre expertise en développement des stratégies environnementales 
              et sociales s'appuie sur une approche participative qui place vos besoins 
              et vos objectifs au centre de nos préoccupations.
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

      {/* Section Services Visuels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images grid */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-800 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-2xl">Y</span>
                    </div>
                    <h3 className="text-white font-bold">Yamneko</h3>
                  </div>
                </div>
                <img 
                  src="/api/placeholder/250/200" 
                  alt="Agriculture" 
                  className="rounded-2xl shadow-lg object-cover h-full"
                />
              </div>
              <img 
                src="/api/placeholder/500/250" 
                alt="Équipe agricole" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>

            {/* Services Cards */}
            <div className="space-y-6">
              <div className="bg-emerald-50 p-6 rounded-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">Formation et accompagnement</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Développement des compétences et accompagnement personnalisé pour 
                  optimiser vos pratiques agricoles.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">Innovation et recherche</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Solutions innovantes et recherche appliquée pour répondre aux 
                  défis agricoles modernes.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">Développement durable</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Pratiques respectueuses de l'environnement et solutions durables 
                  pour l'agriculture de demain.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900">Équipements spécialisés</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Fourniture d'équipements modernes et adaptés pour améliorer 
                  votre productivité agricole.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Mission Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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

export default Services

