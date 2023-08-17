import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./style.css";

const Sobre = () => {
  return (
    <>
      <Header />
      {/* banner */}
      <section>
        <div class="banner-about">
          <h1 className="banner-title">a gelateria</h1>
        </div>
      </section>
      {/* fim banner */}

      {/* TEXTO */}
      <section className="about">
        <div className="container container-about">
          <h1>Sobre Nós</h1>
          <span>Nós simplesmente amamos sorvete!</span>
          <p className="paragraph">
            Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
            sorvete produzido. Fazemos o melhor sorvete para os nossos clientes
            e gostamos de receber elogios. Estamos operando desde 2009 com as
            melhores matérias-primas para a produção final do sorvete. Vendemos
            tanto para varejo como para atacado.
          </p>
          <p className="paragraph">
            Nossos clientes podem comprar os nossos sorvetes e degustar na nossa
            loja ou levar para sua residência e aproveitar junto com a família.
            Também vendemos para estabelecimentos e criamos eventos como festa
            de aniversário, formaturas e eventos empresariais. Para contratar os
            nossos serviços, basta entrar em contato conosco. Iremos
            proporcionar o melhor atendimento e os melhores produtos para você
            fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
          </p>
        </div>
      </section>

      {/* SECTION FOTOS */}
      <section className="photos-about">
        <div className="row">
          <div className="img-wrapper">
            <img src="assets/sobre-image.jpg"/>
          </div>
          <div className="img-wrapper">
            <img src="assets/sorveteria.jpg"/>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Sobre;
