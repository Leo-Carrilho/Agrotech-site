// Services.jsx
import { 
  FaPlane, FaChartLine, FaBrain, FaAward, FaShieldAlt, FaUsers, FaClock, FaArrowRight,
  FaMap, FaRegAddressCard, FaMailBulk, FaPhoneAlt, FaWhatsapp
} from 'react-icons/fa';
import "../styles/Services.css";
import Header from '../components/Header';

export default function Services() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="services-hero">
        <div className="services-hero-bg"></div>
        <div className="services-hero-content">
          <div className="hero-content">
            <span className="tag">Nossos Serviços</span>
            <h1>Soluções completas para <span>agricultura inteligente</span></h1>
            <p>Oferecemos as melhores tecnologias para otimizar sua produção agrícola, reduzir custos e aumentar a produtividade com precisão e sustentabilidade.</p>
            <div className="hero-buttons">
              <a href="#planos" className="btn">Ver Planos</a>
              <a href="https://wa.me/5519999999999" className="btn-whatsapp"><FaWhatsapp /> Falar no WhatsApp</a>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">+500</span>
              <span className="stat-label">Hectares Monitorados</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Precisão</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">-35%</span>
              <span className="stat-label">Redução de Custos</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS PRINCIPAIS */}
      <section className="main-services">
        <div className="container">
          <div className="section-header">
            <span className="tag">O que oferecemos</span>
            <h2>Serviços de <span>alta tecnologia</span></h2>
            <p>Conheça nossas soluções desenvolvidas especialmente para o agronegócio</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><FaPlane size={40} /></div>
              <h3>Monitoramento por Drones</h3>
              <p>Drones equipados com sensores multiespectrais para identificar pragas, doenças e estresse hídrico antes que se tornem um problema.</p>
              <ul className="service-features">
                <li>Imagens de alta resolução</li>
                <li>Mapeamento NDVI</li>
                <li>Relatórios automatizados</li>
              </ul>
              <a href="#" className="service-link">Saiba mais <FaArrowRight /></a>
            </div>

            <div className="service-card">
              <div className="service-icon"><FaBrain size={40} /></div>
              <h3>Análise com IA</h3>
              <p>Inteligência artificial avançada para análise de dados agrícolas, previsão de safras e recomendações personalizadas.</p>
              <ul className="service-features">
                <li>Previsão de produtividade</li>
                <li>Alertas automáticos</li>
                <li>Recomendações em tempo real</li>
              </ul>
              <a href="#" className="service-link">Saiba mais <FaArrowRight /></a>
            </div>

            <div className="service-card">
              <div className="service-icon"><FaChartLine size={40} /></div>
              <h3>Gestão de Custos</h3>
              <p>Análise detalhada de investimentos e otimização de recursos para maximizar o retorno financeiro da sua produção.</p>
              <ul className="service-features">
                <li>Controle financeiro completo</li>
                <li>Relatórios de rentabilidade</li>
                <li>Planejamento de safras</li>
              </ul>
              <a href="#" className="service-link">Saiba mais <FaArrowRight /></a>
            </div>

            <div className="service-card">
              <div className="service-icon"><FaMap size={40} /></div>
              <h3>Mapeamento Agrícola</h3>
              <p>Mapas detalhados de suas propriedades com zoneamento de produtividade e análise de solo.</p>
              <ul className="service-features">
                <li>Zoneamento agrícola</li>
                <li>Análise de fertilidade</li>
                <li>Mapas interativos</li>
              </ul>
              <a href="#" className="service-link">Saiba mais <FaArrowRight /></a>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <span className="tag">Por que escolher a AgroTech</span>
            <h2>Nossos <span>diferenciais</span></h2>
          </div>
          
          <div className="features-grid">
            <div className="feature-item"><div className="feature-icon"><FaShieldAlt /></div><h3>Tecnologia de Ponta</h3><p>Utilizamos os melhores equipamentos e softwares do mercado.</p></div>
            <div className="feature-item"><div className="feature-icon"><FaUsers /></div><h3>Suporte Especializado</h3><p>Equipe de agrônomos e engenheiros prontos para ajudar.</p></div>
            <div className="feature-item"><div className="feature-icon"><FaClock /></div><h3>Resposta Rápida</h3><p>Atendimento em até 24 horas para urgências.</p></div>
            <div className="feature-item"><div className="feature-icon"><FaAward /></div><h3>Certificação ISO</h3><p>Processos certificados garantindo qualidade e segurança.</p></div>
          </div>
        </div>
      </section>

      {/* PLANOS E PREÇOS */}
      <section className="pricing-section" id="planos">
        <div className="container">
          <div className="section-header">
            <span className="tag">Planos e preços</span>
            <h2>Escolha o plano <span>ideal para você</span></h2>
            <p>Planos flexíveis que se adaptam às suas necessidades</p>
          </div>
          
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-badge">Iniciante</div>
              <h3>Básico</h3>
              <div className="pricing-price"><span className="price">R$ 299</span><span className="period">/mês</span></div>
              <ul className="pricing-features">
                <li>Monitoramento de até 50 hectares</li>
                <li>Relatórios mensais</li>
                <li>Suporte por e-mail</li>
                <li>Acesso ao app básico</li>
              </ul>
              <a href="https://wa.me/5519999999999" className="btn-pricing">Assinar</a>
            </div>

            <div className="pricing-card featured">
              <div className="pricing-badge">Recomendado</div>
              <h3>Profissional</h3>
              <div className="pricing-price"><span className="price">R$ 599</span><span className="period">/mês</span></div>
              <ul className="pricing-features">
                <li>Monitoramento de até 200 hectares</li>
                <li>Relatórios semanais com IA</li>
                <li>Suporte prioritário 24/7</li>
                <li>Acesso completo ao app</li>
                <li>Consultoria especializada</li>
              </ul>
              <a href="https://wa.me/5519999999999" className="btn-pricing featured-btn">Assinar</a>
            </div>

            <div className="pricing-card">
              <div className="pricing-badge">Empresarial</div>
              <h3>Enterprise</h3>
              <div className="pricing-price"><span className="price">Sob consulta</span></div>
              <ul className="pricing-features">
                <li>Monitoramento ilimitado</li>
                <li>Relatórios em tempo real</li>
                <li>API de integração</li>
                <li>Gestor de conta exclusivo</li>
                <li>Treinamento in loco</li>
              </ul>
              <a href="https://wa.me/5519999999999" className="btn-pricing">Fale conosco</a>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="tag">O que dizem nossos clientes</span>
            <h2>Histórias de <span>sucesso</span></h2>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p>Com a AgroTech, aumentamos nossa produtividade em 40% e reduzimos perdas com pragas. O monitoramento por drones revolucionou nossa gestão."</p>
              <div className="testimonial-author"><strong>João Silva</strong><span>Fazenda Santa Maria, SP</span></div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p>A análise de dados da AgroTech nos ajudou a economizar 30% em insumos. A precisão é impressionante e o suporte sempre disponível."</p>
              <div className="testimonial-author"><strong>Maria Oliveira</strong><span>Agropecuária Boa Vista, GO</span></div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p>Melhor investimento que fizemos. A plataforma é intuitiva e os relatórios gerados pela IA são extremamente valiosos."</p>
              <div className="testimonial-author"><strong>Carlos Mendes</strong><span>Sítio São Pedro, MG</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="tag">Dúvidas frequentes</span>
            <h2>Perguntas <span>frequentes</span></h2>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item"><h3>Como funciona o monitoramento por drones?</h3><p>Nossos drones sobrevoam sua propriedade programados para capturar imagens multiespectrais. Os dados são processados por nossa IA que identifica áreas de estresse, pragas e necessidade de irrigação.</p></div>
            <div className="faq-item"><h3>Preciso comprar os drones?</h3><p>Não! Nós realizamos todo o serviço de monitoramento com nossos equipamentos. Você apenas contrata o plano e recebe os relatórios e análises.</p></div>
            <div className="faq-item"><h3>Qual a periodicidade do monitoramento?</h3><p>O monitoramento pode ser semanal, quinzenal ou mensal, conforme sua necessidade e plano contratado.</p></div>
            <div className="faq-item"><h3>Atendem todo o Brasil?</h3><p>Atualmente atendemos toda a região Sudeste, com planos de expansão para outras regiões em breve.</p></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <h2 className="footer-logo">AgroTech</h2>
            <p>Soluções com drones e tecnologia de precisão para monitoramento agrícola, identificação de pragas e otimização de lavouras.</p>
          </div>

          <div className="footer-col">
            <h3>Links rápidos</h3>
            <a href="/">Início</a>
            <a href="/services">Serviços</a>
            <a href="/como-acessar">Como acessar</a>
          </div>

          <div className="footer-col">
            <h3>FAQ</h3>
            <a href="#">Como funcionam os drones?</a>
            <a href="#">Quanto custa o serviço?</a>
            <a href="#">Atendem quais regiões?</a>
            <a href="#">Como contratar?</a>
          </div>

          <div className="footer-col">
            <h3>Onde estamos</h3>
            <p><div className="centralizar-footer"><FaRegAddressCard /> Americana - SP</div></p>
            <p>Atendimento em toda região do interior paulista.</p>
            <p><div className="centralizar-footer"><FaMailBulk /> contato@agrotech.com</div></p>
            <p><div className="centralizar-footer"><FaPhoneAlt /> (19) 99999-9999</div></p>
          </div>

          <div className="footer-col footer-action">
            <h3>Plataforma</h3>
            <p>Acesse o sistema para acompanhar monitoramentos e relatórios.</p>
            <a href="/app" className="footer-btn">Acessar Plataforma</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 AgroTech • Todos os direitos reservados</p>
        </div>
      </footer>
    </>
  );
}