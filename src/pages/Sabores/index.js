import Header from "../../components/Header";
import Footer from "../../components/Footer";

import './style.css'

const Sabores = () => {
  return (
    <>
      <Header />
      <main>
        {/* banner sabores */}
        <section>
          <div className="banner-flavours">
            <h1>nossos sabores</h1>
          </div>
        </section>
        {/* fim banner */}

        {/* section sabores */}
        <section>
          <h2>sabores de sorvete</h2>
          <div className="cards container">
            <div className="card">
              <img src="assets/sabor-oreo.png" alt="Sorvete Oreo" />
              <h3>Sorvete de Oreo</h3>
              <p>Delicioso sorvete sabor Oreo. Uma explosão de sabores</p>
              
            </div>

            <div className="card">
              <img src="assets/sabor-pistache.png" alt="Sorvete Pistache" />
              <h3>Sorvete de Pistache</h3>
              <p>Cremoso sorvete sabor pistache com pedaços de castanhas</p>
            </div>

            <div className="card">
              <img src="assets/sabor-cookies-avela.png" alt="Sorvete Cookies e avela" />
              <h3>Sorvete Cookies & Avelã</h3>
              <p>Nosso melhor sorvete. Voce vai adorar.</p>
            
            </div>

            <div className="card">
              <img src="assets/sorbet-kiwi.png" alt="Sorvete Oreo" />
              <h3>Sorvete de Kiwi</h3>
              <p>Delicioso e refrescante sorvete sabor Kiwi. Rico em vitamina C.</p>
             
            </div>

            <div className="card">
              <img src="assets/sorbet-morango.png" alt="Sorvete Oreo" />
              <h3>Sorvete de Morango</h3>
              <p>Sorvete de morango gourmet. Tradicional e saboroso</p>
              
            </div>

            <div className="card">
              <img src="assets/sorbet-limao.png" alt="Sorvete Oreo" />
              <h3>Sorvete de Limão Siciliano</h3>
              <p>Incrível sabor de limão siciliano vai te encantar.</p>
              
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Sabores;
