import { React } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, Leaf, Users, Lightbulb } from 'lucide-react'
import { useState } from "react";


const treillisBackground = `
absolute inset-0 z-0
bg-green-900
before:absolute before:inset-0
before:bg-[url('/treillis.svg')] before:opacity-30 before:mix-blend-soft-light before:content-['']
`;


const sections = [
  {
    number: '01',
    title: 'PRODUCTION',
    title1: ' VALORISATION',
    desc: `De la gestion post-récolte à la transformation et à la commercialisation, nous vous accompagnons pour optimiser la qualité et la valeur ajoutée de vos produits. Nos solutions favorisent l’exportation et la compétitivité sur les marchés locaux et internationaux.`
  },
  {
    number: '02',
    title: 'FOURNITURE',
    title1: 'D’ÉQUIPEMENTS',
    desc: `Nous importons et exportons des équipements modernes de valorisation des produits agro-sylvo-pastoraux. Performants, robustes et adaptés au terrain, ils vous permettent d’améliorer la productivité et la durabilité de vos activités.`
  },
  {
    number: '03',
    title: 'CONSEIL',
    title1: 'ASSISTANCE',
    desc: `Notre expertise en développement agro-sylvo-pastoral vous aide à concevoir des stratégies innovantes et durables. Nous vous conseillons pour optimiser vos ressources, accroître vos performances et garantir un impact économique et écologique positif.`
  }
];

const cards = [
  {
    img: "/Vector7.svg", // Met le chemin correct de l'illustration si tu l'as
    title: "ASSURER LA GESTION POST-RÉCOLTE",
    subtitle: "Production & Valorisation",
  },
  {
    img: "/Vector8.svg",
    title: "FOURNIR DES OUTILS ADAPTÉS AU TERRAIN",
    subtitle: "Fourniture d'Équipements",
  },
  {
    img: "/Vector9.svg",
    title: "DÉFINIR DES STRATÉGIES ADAPTÉES ET DURABLES",
    subtitle: "Conseil & Assistance",
  },
];


const Home = () => {


  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // tu pourras remplacer par un POST API
  };

  return (
    <div className="min-h-screen">


      <div className="relative min-h-screen flex items-center overflow-hidden 
  bg-gradient-to-br from-[#114737] via-[#0f3d2e] to-[#0b2a20]">        {/* Fond topographique */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/treillis.svg"
            alt="fond topographique"
            className="w-full h-full object-cover opacity-30 mix-blend-soft-light"
          />
        </div>

        <div className="relative  mx-auto px-8 flex flex-col md:flex-row items-center z-10 ">
          {/* Colonne gauche */}
          <div className="md:w-[45%] text-white py-20 space-y-8">
            {/* Logo et sous-titre */}
            <div className="flex items-center space-x-3">
              <img src="/logo.svg" alt="logo" className="w-8 h-8" />
              <span className="font-medium text-lg">Bienvenue sur Yamneko</span>
            </div>

            {/* Titre */}
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              YAM &amp; KO, POUR UNE
              <br /> PERFORMANCE DURABLE
            </h1>

            {/* Paragraphe */}
            <p className="text-gray-200 text-lg max-w-[95%] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non
              mi tortor. Quisque ante nibh, varius vitae mauris at, molestie dictum
              eros. Sed eu commodo ligula, a aliquet risus. Etiam ut diam vitae metus
              egestas rhoncus. Pellentesque vulputate imperdiet odio. Donec eget
              consectetur felis. Etiam ipsum nisi, auctor nec neque et, mattis
              consequat ex.
            </p>

            {/* Flèche scroll */}
            <div className="pt-4 flex items-center space-x-4">
              <img src="/Vector.svg" alt="flèche scroll" className="w-12 h-12" />
              <span className="text-white text-lg font-medium">
                Scroller pour voir plus
              </span>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="md:w-[55%] relative flex justify-center md:justify-end pt-10 md:pt-0">
            <div className="relative w-full h-[80%]  overflow-hidden shadow-xl">
              <img
                src="/Frame1.png"
                alt="champ légumes"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Décor chevauchant */}
            <img
              src="/Groupe20.svg"
              alt="traits verts décoratifs"
              className="absolute -left-16 top-12 w-[380px] opacity-90 pointer-events-none"
            />
          </div>
        </div>
      </div>











      <div className="bg-white  px-2 md:px-20 py-4 font-sans " >
        {/* Sous-titre haut */}
        <div className="text-gray-500 text-base mb-2 pl-1">Des solutions modernes</div>
        {/* Titre principal séparé et bien stylé */}
        <h1 className="mt-0 text-3xl md:text-4xl font-bold leading-tight pl-1 mb-6">
          PARCE QUE CHAQUE ACTEUR AGRO-SYLVO-PASTORAL EST UNIQUE,<br />
          NOUS FAÇONNONS DES RÉPONSES ADAPTÉES À VOS AMBITIONS.
        </h1>
        {/* Contenu des sections */}
        <div className="border-t-4 border-black">
          {sections.map(({ number, title, title1, desc }) => (
            <div key={number} className="grid grid-cols-12 py-8 border-b border-black last:border-0">
              {/* Numéro à gauche */}
              <div className="col-span-2 flex items-center">
                <span className="text-gray-400 text-6xl font-medium">{number}</span>
              </div>
              {/* Titre principal section, sur deux lignes et centré verticalement */}
              <div className="col-span-4 flex flex-col justify-center">
                <span className="block text-black font-bold text-2xl md:text-3xl uppercase leading-snug">
                  {title}
                  <br />
                  {title1}
                </span>
              </div>
              {/* Description à droite, alignée verticalement */}
              <div className="col-span-6 flex items-center">
                <span className="text-gray-800 text-base">{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>


















      <div className="relative w-full min-h-[540px] flex flex-col items-center justify-center bg-white overflow-hidden py-24">
        {/* Graphique en haut gauche */}
        <img
          src="/Groupe20.svg"
          alt=""
          className="absolute left-8 top-8 z-10"
          style={{ pointerEvents: "none" }}
        />
        {/* Graphique en haut droit */}
        <img
          src="/Vector4.svg"
          alt=""
          className="absolute top-8 right-20 w-[80px] z-10"
          style={{ pointerEvents: "none" }}
        />
        {/* Graphique en bas gauche */}
        <img
          src="/Vector3.svg"
          alt=""
          className="absolute bottom-16 left-40 w-[110px] z-10"
          style={{ pointerEvents: "none" }}
        />

        <div className="flex items-center justify-center w-full relative z-20">
          {/* Décoration verte au-dessus du mot "PERFORMANTES" côté bas droit */}
          {/* <div className="">
        <img
          src="/Vector2.svg"
          alt=""
          className="absolute right-[50%] top-[20%] z-0"
          style={{ pointerEvents: "none" }}
        />
      </div>  */}
          {/* Texte principal */}
          <h1 className="text-center text-3xl md:text-5xl lg:text-6xl font-bold leading-snug relative z-20 text-black px-2">
            {/* Partie 1 */}
            TRANSFORMONS VOS{" "}
            {/* Highlight SVG turquoise sous "IDÉES EN ... PERFORMANTES" */}
            <span className="relative inline-block mx-2">
              <span className="relative z-20">
                <span className="whitespace-nowrap">IDÉES EN SOLUTIONS DURABLES</span>
              </span>
              <img
                src="/Vector1.svg"
                alt=""
                className="absolute right-[10%] top-[10]%   z-10"
                style={{
                  objectFit: "cover",
                  pointerEvents: "none",
                  filter: "blur(0.5px)",
                  opacity: 0.65,
                }}
              />
            </span>
            <br />
            ET{" "}
            <span className="relative inline-block">
              <span className="relative z-20">PERFORMANTES</span>
              <img
                src="/Vector2.svg"
                alt=""
                className="absolute left-0 bottom-1  h-44 z-10"
                style={{
                  objectFit: "cover",
                  pointerEvents: "none",
                  filter: "blur(0.5px)",
                  opacity: 0.65,
                }}
              />
            </span>
          </h1>
        </div>
      </div>







      <div className="bg-white min-h-screen w-full  flex flex-col md:flex-row relative">
        {/* Image 1 : 1/3 largeur, moitié hauteur écran */}
        <div className="w-full md:w-1/3 h-[50vh] flex-shrink-0 relative pr-3">
          <img
            src="/image1.png"
            alt="Image 1"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Image 2 : 2/3 largeur, pleine hauteur écran */}
        <div className="w-full md:w-2/3 h-[50vh] md:h-screen flex-shrink-0 relative">
          <img
            src="/image2.png"
            alt="Image 2"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Texte (plein largeur) en bas, en 3 colonnes sur desktop*/}
        <div className="w-full bg-white flex flex-col md:flex-row items-start py-8 px-5 md:px-24 gap-10 absolute bottom-0 left-0 z-20 pl-3">
          {/* Bloc titre/slogan à gauche */}
          <div className="md:w-[28%]">
            <div className="text-gray-400 text-base mb-2">Stratégies sur mesure</div>
            <div className="text-black font-bold text-3xl md:text-4xl uppercase leading-tight mb-2">
              VALORISEZ<br />VOTRE VISION
            </div>
          </div>
          {/* Bloc texte personnalisé centre gauche */}
          <div className="md:w-[33%] text-gray-700 text-base leading-normal">
            Nous développons des stratégies personnalisées pour accompagner les acteurs du secteur agro-sylvo-pastoral.
            Chaque projet est conçu pour optimiser vos ressources, renforcer votre impact et révéler votre singularité.
          </div>
          {/* Bloc texte expertises droite */}
          <div className="md:w-[33%] text-gray-700 text-base leading-normal">
            Grâce à notre expertise en production, fourniture d’équipements et conseil spécialisé, nous vous aidons à atteindre vos objectifs avec efficacité, tout en alliant innovation, durabilité et performance.
          </div>
        </div>
      </div>



      <div className="frame19-container">
        {/* Image de fond */}
        <img
          src="/image3.jpg"
          alt=""
          className="frame19-bg"
        />
        {/* Overlay SVG lignes */}
        <img
          src="/Vercto5.svg"
          alt=""
          className="frame19-svg"
        />
        {/* Overlay gradient */}
        <div className="frame19-gradient" />
        {/* Texte central */}
        <div className="frame19-text">
          POUR UNE PERFORMANCE DURABLE
        </div>
      </div>




      <section className="frame24-container">
        <img
          src="/Vector6.svg"
          alt=""
          className="frame24-deco"
        />

        <div className="frame24-content">
          {/* En-tête */}
          <p className="frame24-header">Que faisons nous</p>

          {/* Texte principal avec mots-clés en vert */}
          <h1 className="frame24-title">
            Nous transformons vos idées en{" "}
            <span className="frame24-highlight">projets agro-sylvo-pastoraux durables</span>
            , en alliant expertise, innovation et engagement. Notre mission est de valoriser
            vos ressources,{" "}
            <span className="frame24-highlight">optimiser vos performances</span>
            {" "}et soutenir la croissance de vos activités, du champ jusqu'au marché.
          </h1>

          {/* Citation */}
          <div className="frame24-quote">
            <p className="frame24-author">Alexis Koalla</p>
            <p className="frame24-role">Co-fondateur</p>
          </div>
        </div>
      </section>




      <div className="frame27-grid">
        {cards.map((card, idx) => (
          <div className="frame27-card" key={idx}>
            <div className="frame27-img-container">
              <img src={card.img} alt="" className="frame27-img" />
            </div>
            <div className="frame27-title">{card.title}</div>
            <div className="frame27-subtitle">{card.subtitle}</div>
          </div>
        ))}
      </div>






      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Partie gauche - fond vert */}
      <div className="bg-[#0d6b45] flex flex-col justify-center items-center text-white relative overflow-hidden p-10">
        {/* Fond avec motif */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="/Vector10.svg" // image du fond
            alt="background pattern"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Logo et titre */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-24 h-24 mb-6 drop-shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Yamneko
          </h1>
          <p className="mt-4 text-lg text-green-100 max-w-md">
            Avec vous, nous valorisons votre vision 🌱
          </p>
        </div>
      </div>

      {/* Partie droite - formulaire */}
      <div className="flex justify-center items-center bg-gray-50 p-6 md:p-12">
        <div className="bg-white shadow-xl border border-gray-100 rounded-2xl w-full max-w-2xl p-8 md:p-12">
          <div className="mb-10">
            <p className="text-green-600 uppercase font-semibold tracking-wide mb-2">
              Contactez-nous
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
              Parlons de votre projet
            </h2>
          </div>

          <form className="space-y-6">
            {/* Nom & Prénom */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nom"
                className="border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-500 font-sans"
              />
              <input
                type="text"
                placeholder="Prénom(s)"
                className="border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-500 font-sans"
              />
            </div>

            {/* Email & Téléphone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-500 font-sans"
              />
              <input
                type="tel"
                placeholder="Téléphone"
                className="border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-green-500 font-sans"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Message"
              rows={5}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full text-lg resize-y focus:outline-none focus:ring-2 focus:ring-green-500 font-sans"
            />

            {/* Bouton */}
            <button
              type="submit"
              className="bg-green-600 text-white rounded-full px-8 py-3 text-lg font-semibold shadow-md hover:bg-green-700 hover:shadow-lg transition"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>




    </div>
  )
}

export default Home

