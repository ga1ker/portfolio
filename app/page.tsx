"use client"

import { Github, Linkedin, Mail, Phone, ExternalLink, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"
import { ProjectSlider } from "@/components/project-slide"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl" />
      </div>

      {/* Diagonal lines texture */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 50px,
            rgb(148 163 184) 50px,
            rgb(148 163 184) 51px
          )`,
          }}
        />
      </div>

      {/* Dot pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgb(148 163 184) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/50 backdrop-blur-md border-b border-slate-800/50 transition-all duration-300 hover:bg-slate-950/70">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-cyan-400 transition-all duration-300 hover:scale-105 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">
              GB
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              <a 
                href="#about" 
                className="relative text-slate-300 hover:text-cyan-400 transition-all duration-300 group"
              >
                Sobre mí
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#experience" 
                className="relative text-slate-300 hover:text-cyan-400 transition-all duration-300 group"
              >
                Experiencia
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#skills" 
                className="relative text-slate-300 hover:text-cyan-400 transition-all duration-300 group"
              >
                Habilidades
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#projects" 
                className="relative text-slate-300 hover:text-cyan-400 transition-all duration-300 group"
              >
                Proyectos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#contact" 
                className="relative text-slate-300 hover:text-cyan-400 transition-all duration-300 group"
              >
                Contacto
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-180"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 animate-spin-in" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`
            md:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${mobileMenuOpen 
              ? 'max-h-96 opacity-100 py-4' 
              : 'max-h-0 opacity-0 py-0'
            }
          `}>
            <div className="bg-slate-900/95 backdrop-blur-md rounded-b-xl border-t border-slate-800/50 pt-4 space-y-2">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg hover:shadow-cyan-900/20"
              >
                Sobre mí
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg hover:shadow-cyan-900/20"
              >
                Experiencia
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg hover:shadow-cyan-900/20"
              >
                Habilidades
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg hover:shadow-cyan-900/20"
              >
                Proyectos
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg hover:shadow-cyan-900/20"
              >
                Contacto
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl w-full text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-pretty">
              Gadiel Alcazar Bernal
            </h1>
            <p className="text-xl sm:text-2xl text-slate-400 font-light">Desarrollador Full-Stack</p>
          </div>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto text-balance leading-relaxed">
            Ingeniero en Desarrollo y Gestión de Software con experiencia en crear aplicaciones web y móviles
            escalables. Especializado en React, TypeScript y Node.js, con pasión por transformar ideas en soluciones
            digitales efectivas.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://github.com/ga1ker" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="bg-slate-900/50 backdrop-blur-sm border-slate-700 hover:bg-slate-800/50 hover:text-white cursor-pointer"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </a>
            <a href="https://linkedin.com/in/gadiel-alcazar" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="bg-slate-900/50 backdrop-blur-sm border-slate-700 hover:bg-slate-800/50 hover:text-white cursor-pointer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </a>
            <a href="mailto:zenget009@gmail.com">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 cursor-pointer">
                <Mail className="mr-2 h-5 w-5" />
                Contacto
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-left">Sobre mí</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6 text-left">
              <p className="text-slate-300 text-lg leading-relaxed">
                Soy un desarrollador apasionado por la tecnología y la resolución de problemas mediante código limpio y
                eficiente. Mi enfoque está en crear experiencias de usuario intuitivas y sistemas backend robustos.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Titulado como{" "}
                <strong className="text-cyan-400">Ingeniero en Desarrollo y Gestión de Software Multiplataforma</strong>{" "}
                por la Universidad Tecnológica de Tlaxcala, he desarrollado proyectos que van desde e-commerce hasta
                sistemas CRM, trabajando tanto de forma autónoma como en equipos ágiles.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Actualmente busco oportunidades para contribuir en equipos innovadores donde pueda aplicar mis
                habilidades técnicas y seguir creciendo profesionalmente en el desarrollo de soluciones digitales
                impactantes.
              </p>
            </div>
            <div className="bg-slate-900/30 backdrop-blur-md border border-slate-800 rounded-xl p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Información</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">8132204256</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300 break-all">zenget009@gmail.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <Github className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">github.com/ga1ker</span>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-700">
                <p className="text-sm text-slate-400">
                  <strong>Idiomas:</strong> Español (Nativo), Inglés (Intermedio)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-left">Experiencia</h2>
          <div className="space-y-8">
            {[
              {
                role: "Desarrollador Full-Stack",
                company: "Aromantial",
                period: "Julio 2025 - Noviembre 2025",
                description:
                  "Desarrollo de e-commerce web para venta de perfumes y posterior desarrollo de app móvil en equipo.",
                achievements: [
                  "Desarrollé el frontend completo con React, Tailwind y Shadcn",
                  "Implementé el backend con Node.js y Express",
                  "Colaboré en el desarrollo de la aplicación móvil con React Native",
                ],
              },
              {
                role: "Líder de Desarrollo",
                company: "1er Lugar Hackathon UTT - Pixsoft",
                period: "Diciembre 2025",
                description:
                  "Lideré un equipo de 4 desarrolladores en hackathon de 24 horas para crear un e-commerce de hardware.",
                achievements: [
                  "Gestión de inventario y panel de administración con gráficas",
                  "Integración de IA para chatbot y automatizaciones",
                  "Implementación de pagos con MercadoPago y sistema de envíos",
                  "Despliegue con metodologías DevOps y CI/CD",
                ],
              },
              {
                role: "Intern Desarrollador de Software",
                company: "AIZU",
                period: "Mayo 2024 - Septiembre 2024",
                description:
                  "Desarrollo de CRM para gestión de clientes del ERP durante mi primera etapa de estadías profesionales.",
                achievements: [
                  "Desarrollé CRM con HTML, CSS, Bootstrap, JavaScript y PHP",
                  "Implementé envíos automáticos por Email y WhatsApp",
                  "Integré API de Facebook para gestión de chats de Messenger",
                ],
              },
            ].map((exp, idx) => (
              <div
                key={idx}
                className="bg-slate-900/30 backdrop-blur-md border border-slate-800 rounded-xl p-6 hover:border-cyan-600/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="text-left">
                    <h3 className="text-2xl font-semibold">{exp.role}</h3>
                    <p className="text-cyan-400 text-lg">{exp.company}</p>
                  </div>
                  <span className="text-slate-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-slate-300 mb-4 text-left leading-relaxed">{exp.description}</p>
                <ul className="space-y-2 text-left">
                  {exp.achievements.map((achievement, achIdx) => (
                    <li key={achIdx} className="text-slate-400 flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-left">Habilidades</h2>

          {/* Technology Icons */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-left text-cyan-400">Tecnologías que manejo</h3>
            <div className="flex flex-wrap gap-8 justify-center md:justify-start">
              {[
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                {
                  name: "TypeScript",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                },
                {
                  name: "JavaScript",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                },
                {
                  name: "Node.js",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                },
                {
                  name: "Tailwind",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                },
                {
                  name: "PostgreSQL",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                },
                { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                {
                  name: "MongoDB",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                },
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                {
                  name: "Flutter",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
                },
                { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
                {
                  name: "Firebase",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
                },
              ].map((tech, idx) => (
                <div key={idx} className="group flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-slate-900/30 backdrop-blur-md border border-slate-800 rounded-xl p-3 group-hover:border-cyan-600/50 transition-colors flex items-center justify-center">
                    <img
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm text-slate-400 group-hover:text-cyan-400 transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Frontend",
                skills: ["React", "React Native", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "Shadcn UI"],
              },
              { category: "Backend", skills: ["Node.js", "Express", "Hono.js", "PHP", "API REST", "JWT", "Bcrypt"] },
              { category: "Bases de Datos", skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"] },
              { category: "Mobile", skills: ["React Native", "Flutter", "Responsive Design"] },
              { category: "Herramientas", skills: ["Git", "GitHub", "Vercel", "Railway", "DevOps CI/CD"] },
              { category: "Otras", skills: ["Metodologías Ágiles", "Liderazgo de Equipos", "UX/UI", "Seguridad Web"] },
            ].map((group, idx) => (
              <div
                key={idx}
                className="bg-slate-900/30 backdrop-blur-md border border-slate-800 rounded-xl p-6 hover:border-cyan-600/50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-400 text-left">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIdx) => (
                    <span key={skillIdx} className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-left">Proyectos Destacados</h2>
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {[
              {
                title: "Tucash Finance",
                description:
                  "Sistema completo de gestión personal de finanzas con dashboard interactivo, gráficas en tiempo real y gestión de transacciones.",
                tech: ["Hono.js", "TypeScript", "React", "Tailwind CSS"],
                link: "https://tucash-finance.vercel.app",
                images: ["/tucash_dashboard.png", "/tucash_transactions.png"],
                status: "Productivo",
                height: "tall",
              },
              {
                title: "Telcel Bernal E-commerce",
                description:
                  "Sistema de punto de venta y e-commerce para tienda de reparación y venta de celulares. Incluye gestión de inventario, catálogo y ventas.",
                tech: ["React", "Node.js", "PostgreSQL", "Express"],
                link: "#",
                images: ["/placeholder.svg"],
                status: "En Desarrollo",
                height: "medium",
              },
              {
                title: "Aromantial E-commerce",
                description:
                  "Plataforma de e-commerce para venta de perfumes con integración de pagos, sistema de envíos y app móvil complementaria.",
                tech: ["React", "React Native", "Node.js", "Express", "Shadcn"],
                link: "https://aromantial.com",
                images: ["/aromantial_home.png", "/aromantial_app.png", "/aromantial_details.png", "/aromantial_admin.png"],
                status: "Completado",
                height: "medium",
              },
              {
                title: "Pixsoft Hackathon",
                description:
                  "E-Commerce de hardware desarrollado en 24 horas. Panel admin con gráficas, integración con IA para chatbot, y sistema de pagos con MercadoPago.",
                tech: ["React", "Node.js", "IA", "MercadoPago", "Vercel"],
                link: "#",
                images: ["/pixsoft_categories.png", "/pixsoft_products.png", "/pixsoft_admin.png"],
                status: "Completado",
                height: "tall",
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="group break-inside-avoid bg-slate-900/30 backdrop-blur-md border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-600/50 transition-all hover:transform hover:scale-[1.02]"
              >
                {/* Placeholder para imagen del proyecto */}
                <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                  <ProjectSlider 
                    images={project.images} 
                    title={project.title}
                    className={project.height === "tall" ? "h-64" : "h-48"}
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-2xl font-semibold text-left">{project.title}</h3>
                    {project.status === "Productivo" && (
                      <span className="px-2 py-1 bg-green-900/50 text-green-400 rounded text-xs whitespace-nowrap">
                        Live
                      </span>
                    )}
                    {project.status === "En Desarrollo" && (
                      <span className="px-2 py-1 bg-yellow-900/50 text-yellow-400 rounded text-xs whitespace-nowrap">
                        WIP
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-left leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-xs border border-cyan-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2 bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 w-full"
                      >
                        Ver Proyecto
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">¿Trabajemos juntos?</h2>
          <p className="text-xl text-slate-300 mb-12 text-balance">
            Estoy disponible para proyectos freelance y oportunidades de tiempo completo. Si tienes un proyecto en mente
            o simplemente quieres conectar, no dudes en contactarme.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <a href="mailto:zenget009@gmail.com">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                <Mail className="mr-2 h-5 w-5" />
                Enviar Email
              </Button>
            </a>
            <a href="tel:8132204256">
              <Button
                variant="outline"
                size="lg"
                className="bg-slate-900/50 backdrop-blur-sm border-slate-700 hover:bg-slate-800/50"
              >
                <Phone className="mr-2 h-5 w-5" />
                Llamar
              </Button>
            </a>
          </div>

          {/* Contact Icons */}
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/ga1ker"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-14 h-14 bg-slate-900/30 backdrop-blur-md border border-slate-800 rounded-full p-3 group-hover:border-cyan-600/50 transition-colors flex items-center justify-center">
                <Github className="w-full h-full text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>
              <span className="text-sm text-slate-400 group-hover:text-cyan-400 transition-colors">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/gadiel-alcazar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-14 h-14 bg-slate-900/30 backdrop-blur-md border border-slate-800 rounded-full p-3 group-hover:border-cyan-600/50 transition-colors flex items-center justify-center">
                <Linkedin className="w-full h-full text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>
              <span className="text-sm text-slate-400 group-hover:text-cyan-400 transition-colors">LinkedIn</span>
            </a>
            <a href="mailto:zenget009@gmail.com" className="group flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-slate-900/30 backdrop-blur-md border border-slate-800 rounded-full p-3 group-hover:border-cyan-600/50 transition-colors flex items-center justify-center">
                <Mail className="w-full h-full text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>
              <span className="text-sm text-slate-400 group-hover:text-cyan-400 transition-colors">Email</span>
            </a>
            <a href="tel:8132204256" className="group flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-slate-900/30 backdrop-blur-md border border-slate-800 rounded-full p-3 group-hover:border-cyan-600/50 transition-colors flex items-center justify-center">
                <Phone className="w-full h-full text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>
              <span className="text-sm text-slate-400 group-hover:text-cyan-400 transition-colors">Teléfono</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400 text-sm">
          <p>© 2025 Gadiel Alcazar Bernal. Desarrollador Full-Stack.</p>
        </div>
      </footer>
    </div>
  )
}
