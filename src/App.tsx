import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  MessageSquare, 
  Rocket, 
  ShieldCheck, 
  Smartphone, 
  Zap,
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  Github,
  Twitter,
  Linkedin,
  Phone,
  Download,
  ExternalLink
} from 'lucide-react';
import { useState, useEffect, FormEvent } from 'react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">L</div>
          <span className="font-bold text-xl tracking-tight">Logic<span className="text-brand-primary">Flow</span></span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#servicios" className="hover:text-brand-primary transition-colors">Servicios</a>
          <a href="#proceso" className="hover:text-brand-primary transition-colors">Proceso</a>
          <a href="#tecnologias" className="hover:text-brand-primary transition-colors">Tecnologías</a>
          <a 
            href="https://drive.google.com/uc?export=download&id=1Zg6Vef2yAjYl6_0FnhCJGyZLbNX-u0p_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-brand-primary transition-colors"
          >
            <Download size={16} /> Descargar CV
          </a>
          <a href="#contacto" className="bg-brand-primary hover:bg-brand-secondary text-white px-5 py-2.5 rounded-full transition-all shadow-lg hover:shadow-brand-primary/20">
            Hablemos
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 md:hidden"
        >
          <a href="#servicios" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Servicios</a>
          <a href="#proceso" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Proceso</a>
          <a href="#tecnologias" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Tecnologías</a>
          <a href="#contacto" className="bg-brand-primary text-white p-4 rounded-xl text-center font-bold" onClick={() => setIsMenuOpen(false)}>Contáctanos</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Decorative Elements */}
      <motion.div style={{ y: y1 }} className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl -z-10" />
      <motion.div style={{ y: y1 }} className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Zap size={14} className="fill-current" />
              Nueva Era de Desarrollo
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Software que <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Transforma</span> Ideas en Realidad.
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Diseñamos, desarrollamos y escalamos soluciones digitales personalizadas para empresas que no se conforman con lo convencional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-[0_20px_40px_-15px_rgba(14,165,233,0.3)] flex items-center justify-center gap-2 group">
                Empezar Proyecto <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white border border-slate-200 hover:border-brand-primary text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                Ver Portafolio
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-yellow-400">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <p className="text-slate-500 font-medium">+200 proyectos exitosos</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100 rotate-2">
               <div className="bg-slate-900 rounded-[2rem] p-6 aspect-square flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-1.5">
                       <div className="w-3 h-3 rounded-full bg-red-400" />
                       <div className="w-3 h-3 rounded-full bg-amber-400" />
                       <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <div className="px-3 py-1 bg-white/10 rounded-full text-[10px] text-white/50 font-mono">logicflow_v1.0.ts</div>
                  </div>
                  
                  <div className="font-mono text-sm leading-relaxed">
                    <div className="text-blue-400">const<span className="text-white"> flow = </span><span className="text-emerald-400">new</span><span className="text-amber-300"> LogicFlow</span><span className="text-white">(&#123;</span></div>
                    <div className="pl-4 text-slate-400">precision: <span className="text-orange-300">'maximum'</span>,</div>
                    <div className="pl-4 text-slate-400">logic: <span className="text-purple-400">100</span>,</div>
                    <div className="pl-4 text-slate-400">efficiency: <span className="text-emerald-400">true</span></div>
                    <div className="text-white">&#125;);</div>
                    <div className="mt-4 text-blue-400">await<span className="text-white"> flow.optimize(</span><span className="text-orange-300">'business_process'</span><span className="text-white">);</span></div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="w-20 h-2 bg-white/10 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        className="h-full bg-brand-primary" 
                      />
                    </div>
                    <div className="text-white/20">LogicFlow IDE</div>
                  </div>
               </div>
            </div>
            {/* Floating UI Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <Rocket size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Performance</p>
                <p className="text-xl font-bold text-slate-900">+40% speed boost</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Desarrollo Web Pro",
      desc: "Aplicaciones web modernas, rápidas y escalables utilizando el stack más avanzado del mercado.",
      icon: <Globe className="text-blue-500" />,
      color: "bg-blue-50"
    },
    {
      title: "Mobile First",
      desc: "iOS y Android con experiencias nativas fluidas que enamoran a tus usuarios finales.",
      icon: <Smartphone className="text-purple-500" />,
      color: "bg-purple-50"
    },
    {
      title: "Arquitectura Cloud",
      desc: "Migración, mantenimiento y optimización de infraestructura robusta en la nube.",
      icon: <Layers className="text-cyan-500" />,
      color: "bg-cyan-50"
    },
    {
      title: "Inteligencia Artificial",
      desc: "Integramos LLMs y modelos personalizados para automatizar y potenciar tu negocio.",
      icon: <Cpu className="text-amber-500" />,
      color: "bg-amber-50"
    },
    {
      title: "Ciberseguridad",
      desc: "Protegemos tus activos digitales con las mejores prácticas de seguridad y auditoría.",
      icon: <ShieldCheck className="text-emerald-500" />,
      color: "bg-emerald-50"
    },
    {
      title: "Soporte & Escalabilidad",
      desc: "No solo construimos, te acompañamos en el crecimiento orgánico de tu plataforma.",
      icon: <Zap className="text-pink-500" />,
      color: "bg-pink-50"
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">Nuestros Servicios</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Soluciones que rompen los límites tecnológicos.</h3>
          <p className="text-lg text-slate-600">Enfocados en entregar valor real a través de código artesanal y arquitectura industrial.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-[2rem] border border-slate-100 hover:border-brand-primary/20 hover:bg-slate-50 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {s.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">{s.desc}</p>
              <a href="#contacto" className="text-sm font-bold text-slate-900 flex items-center gap-1 group-hover:gap-2 transition-all">
                Saber más <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Inmersión", desc: "Entendemos tu negocio, los retos y los objetivos de tus usuarios." },
    { title: "Arquitectura", desc: "Diseñamos la estructura técnica ideal para escalar sin fricción." },
    { title: "Construcción", desc: "Desarrollo iterativo con feedback constante por tu parte." },
    { title: "Evolución", desc: "Lanzamiento, optimización y escalado global de tu solución." }
  ];

  return (
    <section id="proceso" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">Metodología LogicFlow</h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-8 italic serif tracking-tight">Cómo damos vida a tu visión.</h3>
            <p className="text-slate-400 text-lg mb-10">Creemos en la transparencia y la agilidad absoluta. Sin burocracia, solo resultados.</p>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={24} className="text-white" />
                  </div>
                  <span className="font-bold text-xl uppercase tracking-tighter">Entregas Semanales</span>
                </div>
                <p className="text-slate-400">Nunca te quedarás a oscuras. Sabrás exactamente en qué estamos en cada momento.</p>
            </div>
          </div>
          
          <div className="lg:w-2/3 grid gap-12 relative pt-20">
            {/* Draw a vertical line for the steps */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />
            
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                <div className="absolute left-0 top-0 w-12 h-12 bg-slate-900 border-2 border-brand-primary rounded-full flex items-center justify-center z-10">
                  <span className="font-mono text-sm text-brand-primary">0{i+1}</span>
                </div>
                <h4 className="text-2xl font-bold mb-3">{step.title}</h4>
                <p className="text-slate-400 text-lg leading-relaxed max-w-xl">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const techs = ["Angular", "Laravel", "React", "TypeScript", "Node.js", "Python", "AWS", "Google Cloud", "PostgreSQL", "TailwindCSS", "Next.js", "Flutter"];
  
  return (
    <section id="tecnologias" className="py-20 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <p className="text-center text-slate-400 text-sm font-bold uppercase tracking-widest">Tecnologías en nuestro arsenal</p>
      </div>
      
      <div className="flex overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap py-10"
        >
          {[...techs, ...techs].map((t, i) => (
            <span key={i} className="text-5xl lg:text-7xl font-black text-black hover:text-brand-primary transition-colors cursor-default select-none uppercase tracking-tighter">
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    resumen: ''
  });

  const isFormValid = formData.nombre.trim() !== '' && formData.email.trim() !== '';

  const handleWhatsAppSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    const message = `Nombre: ${formData.nombre}\nEmail: ${formData.email}\nResumen: ${formData.resumen}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/584247027209?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] p-8 lg:p-20 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[100px]" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-tight">¿Listo para construir el futuro?</h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">Describe tu proyecto y nos pondremos en contacto contigo en menos de 24 horas.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Hablemos ahora</p>
                    <p className="text-white font-bold">ramirez.fred016@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Oficinas Centrales</p>
                    <p className="text-white font-bold">Barinas, Venezuela</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-2xl">
              <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Nombre</label>
                    <input 
                      type="text" 
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none" 
                      placeholder="Tu nombre" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none" 
                      placeholder="correo@empresa.com" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase">Resumen del Proyecto (Opcional)</label>
                  <textarea 
                    rows={4} 
                    value={formData.resumen}
                    onChange={(e) => setFormData({...formData, resumen: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none resize-none" 
                    placeholder="Cuéntanos brevemente qué necesitas construir..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${isFormValid ? 'bg-brand-primary hover:bg-brand-primary/90 text-white shadow-brand-primary/20' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">L</div>
              <span className="font-bold text-xl tracking-tight">Logic<span className="text-brand-primary">Flow</span></span>
            </div>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Ingeniería de software de precisión para empresas innovadoras. Construyendo el futuro línea por línea.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/ramirez_fred" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-primary hover:border-brand-primary transition-all"><Twitter size={18} /></a>
              <a href="https://www.linkedin.com/in/freddy-ramirez-18668a339/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-primary hover:border-brand-primary transition-all"><Linkedin size={18} /></a>
              <a href="https://github.com/ramirezfred" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-primary hover:border-brand-primary transition-all"><Github size={18} /></a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div>
              <h5 className="font-bold text-slate-900 mb-6">Compañía</h5>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-brand-primary transition-colors">Sobre LogicFlow</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Portafolio</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Carreras</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-6">Servicios</h5>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-brand-primary transition-colors">Web Apps</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Mobile</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Cloud</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">IA & ML</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h5 className="font-bold text-slate-900 mb-6">Legal</h5>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-brand-primary transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Términos</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© 2026 LogicFlow Software Engineering. Todos los derechos reservados.</p>
          <p>Hecho con <span className="text-red-400">♥</span> en el futuro.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans relative">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <TechStack />
      <Contact />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/584247027209" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <Phone size={32} />
      </a>
    </div>
  );
}
