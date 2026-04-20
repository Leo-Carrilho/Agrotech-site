// components/FAQ.jsx
import { useEffect, useRef, useState } from "react";

export default function FAQ() {
  const sectionRef = useRef(null);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".faq-item"),
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, stagger: 0.12, duration: 0.7, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
    );
  }, []);

  const faqs = [
    { q: "Como funciona o monitoramento por drones?", a: "Nossos drones sobrevoam sua propriedade capturando imagens multiespectrais. A IA processa os dados identificando áreas de estresse, pragas e necessidade de irrigação." },
    { q: "Preciso comprar os drones?", a: "Não! Realizamos todo o serviço com nossos equipamentos. Você contrata o plano e recebe relatórios e análises prontos." },
    { q: "Qual a periodicidade do monitoramento?", a: "O monitoramento pode ser semanal, quinzenal ou mensal, conforme sua necessidade e plano contratado." },
    { q: "Atendem todo o Brasil?", a: "Atualmente cobrimos toda a região Sudeste, com planos de expansão para outras regiões em breve." },
  ];

  const toggleFaq = (i) => {
    const gsap = window.gsap;
    const newOpen = open === i ? null : i;
    setOpen(newOpen);

    if (gsap && newOpen !== null) {
      const answer = document.querySelectorAll(".faq-answer")[newOpen];
      if (answer) {
        gsap.fromTo(answer, { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" });
      }
    }
  };

  return (
    <section className="faq-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="tag">Dúvidas frequentes</span>
          <h2>Perguntas <span>frequentes</span></h2>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, i) => (
            <div className={`faq-item ${open === i ? "open" : ""}`} key={i} onClick={() => toggleFaq(i)}>
              <h3>
                {faq.q}
                <span className="faq-arrow">{open === i ? "−" : "+"}</span>
              </h3>
              {open === i && <p className="faq-answer">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}