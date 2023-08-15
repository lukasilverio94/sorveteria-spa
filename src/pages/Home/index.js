import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./style.css";

const Home = () => {
  return (
    <>
      <Header />

      <main>
        {/* BANNER */}
        <section className="banner">
          <div>
            <h1>Sorvete Artesanal</h1>
          </div>
        </section>
        {/* FIM BANNER */}

        {/* SABORES SECTION*/}
        <section>
          <div className="row">
            <div className="img-wrapper">
              <img
                src="assets/banner-sabores.jpg"
                alt="Sorvete foto"
                className="flex-item"
              />
            </div>
            <div className="content-wrapper">
              <div className="content">
                <h2>nossos sabores</h2>
                <span>Novos e deliciosos!</span>
                <p>
                  Sorvete bom é aquele feito com os melhores ingredientes! Aqui
                  na gelateria todos os nossos produtos são naturais, à base de
                  frutas e sem nenhum conservante! Também temos opções sem
                  lactose e sem açúcar. Venha conhecer e perceber que tem como o
                  sorvete ser delicioso e saudável ao mesmo tempo!{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* fim sabores */}

        {/* EVENTO SECTION  */}
        <section className="row">
          <div className="content-wrapper">
            <div className="content">
              <h2>NOSSOS EVENTOS</h2>
              <span>Delicias com sorvete!</span>
              <p>
                Mais do que uma sorveteria, uma extensão da sua casa! Estamos
                aqui prontinhos para te atender e oferecer os melhores eventos
                com os melhores sorvete da sua vida! Venha nos conhecer e passar
                um tempo aqui com a gente.
              </p>
            </div>
          </div>
          <div className="img-wrapper">
            <img src="assets/eventos-image.jpg" alt="mesa de festa" />
          </div>
        </section>
        {/* fim evento  */}

        {/* ABOUT SECTION*/}
        <section className="row">
          <div className="img-wrapper">
            <img
              src="assets/sobre-image.jpg"
              alt="pessoas comendo sorvete"
              className="flex-item"
            />
          </div>
          <div className="content-wrapper">
            <div className="content">
              <h2>SOBRE NÓS</h2>
              <span>Alegria em cada casquinha!</span>
              <p>
                Venha tomar o melhor sorvete da região aqui com a gente! Nós
                estamos há anos no mercado produzindo o que tem de melhor para o
                nosso cliente e você não pode ficar fora dessa. Venha nos fazer
                uma visita e aproveite o melhor atendimento e o melhor sorvete
                da cidade.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
