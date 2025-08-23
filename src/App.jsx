import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Github, Linkedin, Mail, Phone, ExternalLink, MessageCircle, User, Code, Briefcase, Contact, Heart, Sparkles, Camera } from 'lucide-react'
import { motion } from 'framer-motion'
import logo from './assets/logo.png'
import './App.css'

import { Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'







function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const projects = [
    {
      title: "CliMar | Aplicação de Clima, Marés e previsões de Alagamentos",
      description: "A aplicação CliMar é uma ferramenta web que usa dados oficiais da Marinha e da API OpenWeather para fornecer informações reais e em tempo real sobre clima, marés e cruzamento de dados para previsões de clima, marés e alagamentos.",
      technologies: ["Python", "Flask", "Requests", "math", "HTML", "CSS", "JavaScript", "APIs"],
      /*link: "https://github.com/Julia-Albertim/CliMar",*/
      github: "https://github.com/Julia-Albertim/CliMar",
     images: [
     "src/assets/projects/climar1.png",
     "src/assets/projects/climar2.png",
     "src/assets/projects/climar3.png", 
     "src/assets/projects/climar4.png" ,
     "src/assets/projects/climar5.png"
    ],
    },
    {
      title: "HuB‑IA | Assistente Inteligente para Dados Públicos da Fecomércio",
      description: "O HuB-IA é um assistente inteligente que usa IA para analisar dados públicos para Fecomércio e responder perguntas em linguagem natural com insights precisos.",
      technologies: ["Pyhton", "Streamlit", "LLM", "Pandas", "SQlite","Chart.js"],
      /*link: "https://github.com/RonierisonMaciel/hub-ia",*/
      github: "https://github.com/RonierisonMaciel/hub-ia",
      images: ["src/assets/projects/hubia1.png"],// Placeholder para screenshot
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard interativo em Power BI para visualização de métricas de negócio, com gráficos dinâmicos baseados em dados extraídos via processo ETL da Fecomércio PE.",
      technologies: ["Power BI", "Python", "Pandas", "ETL", "CSV"],
     /* link: "#",
      github: "#",*/
      images: ["src/assets/projects/fecom1.png",
               "src/assets/projects/fecom2.png",
               "src/assets/projects/fecom3.png", 
               "src/assets/projects/fecom4.png"],
    }
  ]

  return (

    
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50">
      {/* Fixed Contact Buttons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
        <motion.a
          href="https://wa.me/5581998590287"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle size={24} />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/julia-albertim"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Linkedin size={24} />
        </motion.a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-pink-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={logo} alt="Julia Albertim" className="h-10 w-auto" />
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Início', icon: Sparkles },
                { id: 'about', label: 'Sobre', icon: Heart },
                { id: 'projects', label: 'Projetos', icon: Code },
                { id: 'contact', label: 'Contato', icon: Contact }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === id
                      ? 'bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 border border-pink-300'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-pink-50'
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <img src={logo} alt="Julia Albertim" className="h-32 w-auto mx-auto mb-8" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              Olá, eu sou {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500">
                Julia
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Estudante de Análise e Desenvolvimento de Sistemas
              <br />
              <span className="text-purple-600">Apaixonada por tecnologia e inovação</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 text-lg rounded-full shadow-lg"
              >
                <Sparkles className="mr-2" size={20} />
                Ver Projetos
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg rounded-full"
              >
                <Heart className="mr-2" size={20} />
                Entre em Contato
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Mim</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Foto Pessoal */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-8">
                  <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center shadow-2xl">
                    {/* Placeholder para foto - substitua por sua foto real */}
                    <div className="w-72 h-72 rounded-full bg-white flex items-center justify-center">
                      <div className="text-center">
                        <img
                            src="src/assets/Imagem do WhatsApp de 2025-06-19 à(s) 21.17.32_eed3e147.jpg"
                            className="w-72 h-72 rounded-full object-cover"
                          />
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-400 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 -right-8 w-4 h-4 bg-rose-400 rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Sou estudante de Análise e Desenvolvimento de Sistemas, com paixão por criar soluções 
                    tecnológicas inovadoras. Tenho experiência em desenvolvimento web, mobile e análise de dados.
                  </p>
                  
                  <p>
                    Sempre em busca de novos desafios e oportunidades para aplicar meus conhecimentos 
                    em projetos que façam a diferença no mundo da tecnologia.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {['Python', 'SQL', 'MongoDB',   'HTML', 'CSS','ETL','APIs'].map((tech) => (
                    <Badge key={tech} className="bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 border border-pink-200 px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="bg-white/70 backdrop-blur-sm border-pink-200 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-purple-700 flex items-center gap-2">
                        <Code size={20} />
                        Formação
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Análise e Desenvolvimento de Sistemas
                        <br />
                        <span className="text-sm text-purple-600">Em andamento</span>
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/70 backdrop-blur-sm border-pink-200 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-purple-700 flex items-center gap-2">
                        <Briefcase size={20} />
                        Foco
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Desenvolvimento Full Stack
                        <br />
                        <span className="text-sm text-purple-600">Frontend | Backend | Dados</span>
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

{/* Projects Section */}

<section id="projects" className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Meus <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Projetos</span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mb-6"></div>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Aqui estão alguns dos projetos que desenvolvi durante minha jornada acadêmica e profissional.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white border-pink-200 hover:border-purple-300 transition-all duration-300 h-full shadow-lg hover:shadow-xl group">
            <div className="relative overflow-hidden rounded-t-lg">
              {project.images && project.images.length > 0 ? (
                <Swiper
                  modules={[Navigation, Autoplay]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  navigation={{
                    nextEl: `.swiper-button-next-${index}`,
                    prevEl: `.swiper-button-prev-${index}`,
                  }}
                  loop={project.images.length > 1}
                  className="w-full h-48 sm:h-56 md:h-64  lg:h-80 relative"
                >
                  {project.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={`Screenshot do projeto ${project.title} - ${i + 1}`}
                        className="w-full h-64 object-cover rounded-t-lg"
                      />
                    </SwiperSlide>
                  ))}

    {/* Botões personalizados */}
<div
  className={`swiper-button-prev-${index} absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-purple-600 hover:bg-purple-100 p-1.5 rounded-full shadow-sm z-10 cursor-pointer select-none`}
    style={{
    width: '15px',
    height: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.71)', // mais transparente
  }}
>
  {/* vazio */}
</div>
<div
  className={`swiper-button-next-${index} absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-10 text-purple-600 hover:bg-purple-100 p-1.5 rounded-full shadow-sm z-10 cursor-pointer select-none`}
     style={{
    width: '15px',
    height: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.71)', // mais transparente
  }}
>

</div>
                </Swiper>
              ) : (
                <div className="w-full h-64 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <Camera size={32} className="text-purple-400 mx-auto mb-2" />
                    <p className="text-purple-600 text-sm font-medium">Screenshot do Projeto</p>
                    <p className="text-xs text-gray-500">Adicione a imagem aqui</p>
                  </div>
                </div>
              )}
            </div>

       <CardHeader>
  <CardTitle className="text-gray-800 group-hover:text-purple-700 transition-colors">
    {project.title}
  </CardTitle>
  <CardDescription className="text-gray-600">
    {project.description}
  </CardDescription>
</CardHeader>

<CardContent>
  <div className="flex flex-wrap gap-2 mb-4">
    {project.technologies.map((tech) => (
      <Badge
        key={tech}
        className="bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 border border-pink-200"
      >
        {tech}
      </Badge>
    ))}
  </div>
  
  <div className="flex gap-2">
    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="sm"
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full"
        >
          <ExternalLink size={16} className="mr-2" />
          Ver Projeto
        </Button>
      </a>
    )}

    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="sm"
          variant="outline"
          className="border-purple-300 text-purple-600 hover:bg-purple-50 rounded-full"
        >
          <Github size={16} className="mr-2" />
          Código
        </Button>
      </a>
    )}
  </div>
</CardContent>

          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Conversar?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mb-8"></div>
            
            <p className="text-xl text-gray-600 mb-12">
              Estou sempre aberta a novas oportunidades e colaborações. Entre em contato! 💜
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.a
                href="mailto:juliaffalbertim@gmail.com"
                className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mb-4">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-gray-800 font-semibold mb-2">Email</h3>
                <p className="text-gray-600 text-sm">juliaffalbertim@gmail.com</p>
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/júlia-albertim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Linkedin className="text-white" size={24} />
                </div>
                <h3 className="text-gray-800 font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-600 text-sm">júlia-albertim</p>
              </motion.a>
              
              <motion.a
                href="https://github.com/Julia-Albertim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center mb-4">
                  <Github className="text-white" size={24} />
                </div>
                <h3 className="text-gray-800 font-semibold mb-2">GitHub</h3>
                <p className="text-gray-600 text-sm">júlia-albertim</p>
              </motion.a>
              
              <motion.a
                href="https://wa.me/5581998590287"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-pink-200 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <h3 className="text-gray-800 font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-600 text-sm">81 | 99859-0287</p>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-pink-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 flex items-center justify-center gap-2">
            © 2024 Julia Albertim. 
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

