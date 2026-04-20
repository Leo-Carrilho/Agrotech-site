// components/ComoFunciona.jsx
import { useEffect, useRef } from "react";
import { FaRocket, FaPlane, FaBrain, FaChartBar } from "react-icons/fa";

export default function ComoFunciona() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".step-card"),
      { opacity: 0, y: 60, rotateX: 15 },
      { opacity: 1, y: 0, rotateX: 0, stagger: 0.2, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 75%" } }
    );
  }, []);

  const steps = [
    { num: "01", icon: <FaRocket size={40} />, title: "Agende o Voo", desc: "Defina a área e o objetivo. Nossa equipe programa a missão e agenda o sobrevoo na sua propriedade." },
    { num: "02", icon: <FaPlane size={40} />, title: "Drone em Campo", desc: "Nossos drones autônomos sobrevoam e capturam imagens multiespectrais com precisão centimétrica." },
    { num: "03", icon: <FaBrain size={40} />, title: "IA Processa", desc: "Os dados são analisados pela nossa IA em tempo real, gerando insights acionáveis automaticamente." },
    { num: "04", icon: <FaChartBar size={40} />, title: "Você Decide", desc: "Relatórios detalhados e alertas chegam no seu celular. Decisão rápida, resultado superior." },
  ];

  return (
    <section className="como-funciona" id="como-funciona" ref={sectionRef}>
      <div className="tech-grid-bg" />
      <div className="container">
        <div className="como-funciona-header section-header">
          <span className="tag">Processo simples</span>
          <h2>Como <span>funciona</span></h2>
          <p>Do campo ao relatório em poucas horas</p>
        </div>
        <div className="steps-container">
          {steps.map((step, i) => (
            <div className="step-card" key={i}>
              <div className="step-number">{step.num}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {i < steps.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}