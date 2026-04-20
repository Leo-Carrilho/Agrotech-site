// components/ServicesSection.jsx
import { useEffect, useRef } from "react";
import { FaPlane, FaBrain, FaChartLine, FaMap, FaArrowRight } from "react-icons/fa";

export default function ServicesCard() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      sectionRef.current.querySelector(".section-header"),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
    );

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".service-card"),
      { opacity: 0, y: 60, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.7, ease: "back.out(1.2)", scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } }
    );
  }, []);

  const services = [
    {
      icon: <FaPlane size={42} />,
      title: "Monitoramento por Drones",
      desc: "Drones com sensores multiespectrais para identificar pragas, doenças e estresse hídrico antes que se tornem problema.",
      features: ["Imagens de alta resolução", "Mapeamento NDVI", "Relatórios automatizados"],
    },
    {
      icon: <FaBrain size={42} />,
      title: "Análise com IA",
      desc: "Inteligência artificial avançada para análise de dados agrícolas, previsão de safras e recomendações personalizadas.",
      features: ["Previsão de produtividade", "Alertas automáticos", "Recomendações em tempo real"],
    },
    {
      icon: <FaChartLine size={42} />,
      title: "Gestão de Custos",
      desc: "Análise detalhada de investimentos e otimização de recursos para maximizar o retorno financeiro da sua produção.",
      features: ["Controle financeiro completo", "Relatórios de rentabilidade", "Planejamento de safras"],
    },
    {
      icon: <FaMap size={42} />,
      title: "Mapeamento Agrícola",
      desc: "Mapas detalhados de suas propriedades com zoneamento de produtividade e análise de solo.",
      features: ["Zoneamento agrícola", "Análise de fertilidade", "Mapas interativos"],
    },
  ];

  return (
    <section className="services-section" ref={sectionRef}>
      {/* Borda curvada no topo */}
      <div className="services-wave-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path 
            fill="var(--bg-dark)" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      </div>

      <div className="container">
        <div className="section-header">
          <span className="tag">🚀 O que oferecemos</span>
          <h2>Tecnologia que <span>brota do campo</span></h2>
          <p>Soluções completas desenvolvidas para o agronegócio moderno</p>
        </div>

        <div className="services-grid-enhanced">
          {services.map((service, index) => (
            <div className="service-card-enhanced" key={index}>
              <div className="card-glow-effect" />
              <div className="card-circuit-line" />
              
              <div className="service-icon-enhanced">
                {service.icon}
              </div>
              
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              
              <ul className="service-features-enhanced">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              
              <a href="#" className="service-link-enhanced">
                Saiba mais <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Textura de solo no fundo */}
      <div className="services-soil-overlay" />
    </section>
  );
}