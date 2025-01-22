import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Cotação Seguro Auto - Cotação Grátis e Completa Sem Compromisso</title>
        <meta
          name="description"
          content="Os Seguros de Auto da Imediato têm coberturas completas para seu carro a partir de R$ 79,99 por mës. Perda e roubo 100% da tabela FIPE. Colisão. Perda Total. Assistencia 24 Hs. Cotação em 16 Seguradoras. Especialistas em Auto. Calcule Online Já. Roubo, Furto, Colisão, Incêndio, Ass24hs, RCF, Vidros, mais Cobertura Imediata."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#108fce" />
        <link rel="preload" as="image" href="/images/logotipo-imediato-seguros.svg" />
        <style>{`
          body {
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            margin: 0;
            font-family: sans-serif;
          }
          select, input {
            -webkit-appearance: none;
            -moz-appearance: none;
          }
          .w-lightbox-backdrop {
            background-color: transparent;
          }
          .w-lightbox-backdrop img {
            border: 4px solid rgba(0,0,0,0.5);
          }
        `}</style>
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/components.css" />
        <link rel="stylesheet" href="/css/segurosimediato.css" />
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.gif" />
        <link rel="apple-touch-icon" href="/images/webclip.gif" />
      </Head>

      <Script
        id="webflow-js"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);
          `,
        }}
      />

      <Script
        id="ga-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-123256811-1', 'auto');
            ga('send', 'pageview');
          `,
        }}
      />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-123256811-1"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-123256811-1');
        `}
      </Script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-815139667"
        strategy="afterInteractive"
      />
      <Script id="gtag-init-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-815139667');
        `}
      </Script>

      <Script
        src="https://apis.google.com/js/platform.js?onload=renderBadge"
        strategy="afterInteractive"
      />

      <Script src="/lazysizes.min.js" strategy="lazyOnload" />
      <Script
        src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
      />

      <body page="home" className="body">
        <div id="new-header" section="new-header" className="new-header-2">
          <div className="container-15 w-container">
            <div className="dvblksess2-2">
              <div className="div-block-38">
                <a
                  href="/"
                  id="link-home"
                  aria-current="page"
                  className="link-image-header-2 w-inline-block w--current"
                >
                  <img
                    src="/images/logotipo-imediato-seguros.svg"
                    loading="lazy"
                    alt="Logotipo Imediato Seguros"
                    className="image-30"
                    width="200"
                    height="auto"
                  />
                </a>
              </div>
              <div className="div-block-37">
                <div className="dvblkhdr2-2">
                  <div className="dvblkstd1">
                    <h2 className="heading-19">São Paulo:</h2>
                  </div>
                  <div className="dvblkstd11">
                    <img
                      src="/images/fone-azul.svg"
                      alt="Icone Telefone"
                      className="image-26"
                      width="24"
                      height="24"
                    />
                  </div>
                  <div className="dvblkstd12">
                    <a
                      href="tel:+551132301422"
                      id="sp-fone-link"
                      className="fone-link top sp"
                    >
                      (11) 3230-1422
                    </a>
                  </div>
                </div>
                <div className="dvblkhdr2-2">
                  <div className="dvblkstd1">
                    <h2 className="heading-19">Rio de Janeiro:</h2>
                  </div>
                  <div className="dvblkstd11">
                    <img
                      src="/images/fone-azul.svg"
                      alt="Icone Telefone"
                      className="image-26"
                      width="24"
                      height="24"
                    />
                  </div>
                  <div className="dvblkstd12">
                    <a
                      href="tel:+552140421811"
                      id="rj-fone-link-header"
                      className="fone-link top sp"
                    >
                      (21) 4042-1811
                    </a>
                  </div>
                </div>
                <div className="dvblkhdr2-2">
                  <div className="dvblkstd1">
                    <h2 className="heading-19">Whatsapp:</h2>
                  </div>
                  <div className="dvblkstd11">
                    <img
                      src="/images/whatsapp-azul-2.svg"
                      alt="Icone Whatsapp"
                      className="image-26"
                      width="24"
                      height="24"
                    />
                  </div>
                  <div className="dvblkstd12">
                    <a
                      href="#"
                      id="whatsappfone1"
                      className="whatsapplink"
                    >
                      (11) 3230-1422
                    </a>
                  </div>
                </div>
                <div className="dvblkhdr2-2">
                  <div className="dvblkstd1">
                    <h2 className="heading-19">Emergência:</h2>
                  </div>
                  <div className="dvblkstd11">
                    <img
                      src="/images/fone-azul.svg"
                      alt="Icone Telefone"
                      className="image-26"
                      width="24"
                      height="24"
                    />
                  </div>
                  <div className="dvblkstd12">
                    <a
                      href="tel:+5511953288466"
                      id="sp-cellfone-link"
                      className="fone-link-copy top sp"
                    >
                      (11) 95328-8466
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-block-45">
              <div className="w-embed w-script">
                <div className="elfsight-app-397c1d00-8aa7-467b-bf40-2d9264a6c53a"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero hero-auto auto">
          <div className="container_padrao menina w-container">
            <div id="submit_button" whenclicked="set" className="wrapper w-form">
              <div className="cabecalho-form">
                <div className="row-form w-row">
                  <div className="col-form cotacao-form auto-form w-col w-col-6 w-col-medium-6 w-col-small-6 w-col-tiny-6">
                    <div className="div-main-title-esq auto">
                      <div className="text-title-form-esq auto">SEGURO</div>
                    </div>
                    <div className="div-main-title-esq auto">
                      <div className="text-title-form-esq auto">DE AUTO</div>
                    </div>
                    <div className="div-sub-title">
                      <div className="sub-text-form-esq auto">
                        CÁLCULO ONLINE
                      </div>
                    </div>
                    <div className="div-sub-title">
                      <div className="sub-text-form-esq auto">
                        COTAÇÃO EM 16 SEGURADORAS
                      </div>
                    </div>
                  </div>
                  <div className="col-form dir w-col w-col-6 w-col-medium-6 w-col-small-6 w-col-tiny-6">
                    <div className="div-pre-preco">
                      <div className="pre-preco">A PARTIR DE </div>
                    </div>
                    <div className="div-preco">
                      <div className="preco">R$ 54</div>
                      <div className="centavos-preco">90</div>
                    </div>
                    <div className="div-pre-preco">
                      <div className="pre-preco">MENSAIS</div>
                    </div>
                  </div>
                </div>
              </div>
              <form
                id="wf-form-Home-Seguro-Auto"
                name="wf-form-Home-Seguro-Auto"
                data-name="Home Seguro Auto"
                action="/sucesso"
                method="post"
                className="form_auto w-clearfix"
              >
                <input
                  className="field nome w-input"
                  maxLength="256"
                  name="NOME"
                  placeholder="Nome"
                  type="text"
                  id="NOME"
                  required
                />
                <div className="div-block-3"></div>
                <div className="text-block-44">
                  Preencher os DDDs e Telefones só com números, sem traços
                </div>
                <input
                  className="field ddd-fone w-input"
                  maxLength="256"
                  name="DDD-CELULAR"
                  placeholder="DDD"
                  type="number"
                  id="DDD-CELULAR"
                  required
                />
                <input
                  className="field celular noauto w-input"
                  maxLength="256"
                  name="CELULAR"
                  placeholder="CELULAR"
                  type="number"
                  id="CELULAR"
                  required
                />
                <input
                  className="field ddd-fone w-input"
                  maxLength="256"
                  name="DDD-TELEFONE"
                  placeholder="DDD"
                  type="number"
                  id="DDD-TELEFONE"
                />
                <input
                  className="field telefone w-input"
                  maxLength="256"
                  name="TELEFONE"
                  placeholder="TELEFONE"
                  type="number"
                  id="TELEFONE"
                />
                <input
                  className="field email w-input"
                  maxLength="256"
                  name="email"
                  placeholder="Email"
                  type="email"
                  id="email"
                  required
                />
                <input
                  className="field cep w-input"
                  maxLength="256"
                  name="CEP"
                  placeholder="Cep"
                  type="text"
                  id="CEP"
                />
                <input
                  className="field cidade noauto w-input"
                  maxLength="256"
                  name="CIDADE"
                  placeholder="Cidade"
                  type="text"
                  id="CIDADE"
                />
                <input
                  className="field estado w-input"
                  maxLength="256"
                  name="ESTADO"
                  placeholder="UF"
                  type="text"
                  id="ESTADO"
                />
                <input
                  className="field veiculo w-input"
                  maxLength="256"
                  name="MARCA"
                  placeholder="Marca Ex: FIAT"
                  type="text"
                  id="MARCA"
                />
                <input
                  className="field veiculo w-input"
                  maxLength="256"
                  name="VEICULO"
                  placeholder="Veiculo ex: Uno"
                  type="text"
                  id="VEICULO"
                />
                <input
                  className="field seguradora noauto w-input"
                  maxLength="256"
                  name="MODELO"
                  placeholder="Modelo Ex: VIVACE 1.4 Flex"
                  type="text"
                  id="MODELO"
                />
                <input
                  className="field ano w-input"
                  maxLength="256"
                  name="ANO"
                  placeholder="Ano"
                  type="text"
                  id="ANO"
                />
                <input
                  type="submit"
                  data-wait="Aguarde..."
                  id="submit_button_form"
                  whenclicked="set"
                  className="submit-button w-button"
                  value="CALCULE AGORA!"
                />
              </form>
              <div className="box-sucesso w-form-done">
                <div>
                  Obrigado!
                  <br />
                  Sua mensagem foi enviada com sucesso e em breve retornaremos
                  com as melhores opções de seguros pra você.
                </div>
              </div>
              <div className="w-form-fail">
                <div>
                  Desculpe. Algo está errado no preenchimento do formulário.
                  <br />
                  Tente novamente.
                </div>
              </div>
            </div>
            <div className="text-block-16">
              25 ANOS DE EXPERIÊNCIA.
              <br />
              ESPECIALISTAS EM
              <br />
              SEGUROS DE AUTO.
              <br />
              ATENDIMENTO EM TODO
              <br />O TERRITÓRIO NACIONAL.
            </div>
          </div>
        </div>

        <div className="fraude">
          <div className="w-container">
            <h1 className="titulo-principal-isolado">alerta de fraude</h1>
            <p className="sub-titulo-principal">
              Solicitamos aos amigos e clientes que fiquem atentos à{" "}
              <strong>fraudadores </strong>
              que estão <strong>utilizando o nome da IMEDIATO SEGUROS</strong>{" "}
              para vender serviços de instalação de rastreadores{" "}
              <strong>solicitando transferências via PIX</strong>.<br /><br />
              A IMEDIATO SEGUROS <strong>não efetua qualquer cobrança direta de seus clientes</strong>.<br /><br />
              Atuamos como corretores de seguros, intermediando a venda de produtos de companhias seguradoras devidamente registradas nos órgãos reguladores. Essas companhias fazem a cobrança dos seus serviços diretamente aos nossos clientes.
            </p>
          </div>
        </div>

        <div className="google-reviews">
          <div className="container-13 w-container">
            <h1 className="titulo-principal-c-subtitulo">
              A IMEDIATO SEGUROS É A CORRETORA DE SEGUROS COM MELHOR AVALIAÇÃO DO MERCADO NO GOOGLE
            </h1>
            <div className="sub-titulo-principal-esp">
              96% DE SATISFAÇÃO (NOTA 4.8 DE 5.0)
              <br />
              MAIS DE 1.700 AVALIAÇÕES ESPONTÂNEAS E CERTIFICADAS
            </div>
            <div className="html-embed-2 w-embed w-script">
              <Script
                src="https://apps.elfsight.com/p/platform.js"
                strategy="lazyOnload"
              />
              <div className="elfsight-app-d8022a65-9939-4319-844b-874c127272fb"></div>
            </div>
          </div>
        </div>

        <div className="facebook">
          <div className="container_facebook w-container">
            <div className="w-embed w-script">
              <Script
                src="https://apps.elfsight.com/p/platform.js"
                strategy="lazyOnload"
              />
              <div className="elfsight-app-07363152-5ad3-4e44-adf1-d8e81001b4a4"></div>
            </div>
          </div>
        </div>

        <div className="sessao-menu menu-auto">
          <div className="w-container">
            <div className="titulo-principal-isolado">escolha o seu seguro</div>
            <div className="w-layout-grid grid-7">
              <div className="dvblkseguro">
                <a href="/seguro-auto.html" className="link-blk-seg w-inline-block">
                  <div className="dvblksegurologo">
                    <img
                      src="/images/logo-auto-sem-linha.svg"
                      loading="lazy"
                      alt=""
                      className="imglogoseguro lazyload"
                    />
                  </div>
                  <div className="dvblksegurodescpreco">
                    <div className="dvblkseguropreo">
                      <h1 className="headsegdescricao">Auto</h1>
                    </div>
                    <div className="dvblksegurodescricao">
                      <div className="txtblksegpreco">
                        A partir de
                        <br />
                        R$ 79,90 / mês
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="dvblkseguro caminhao">
                <a href="/seguro-caminhao.html" className="link-blk-seg w-inline-block">
                  <div className="dvblksegurologo">
                    <img
                      src="/images/caminhao-0.svg"
                      alt=""
                      loading="lazy"
                      className="imglogoseguro lazyload"
                    />
                  </div>
                  <div className="dvblksegurodescpreco">
                    <div className="dvblkseguropreo">
                      <h1 className="headsegdescricao">Caminhão</h1>
                    </div>
                    <div className="dvblksegurodescricao">
                      <div className="txtblksegpreco">
                        A partir de
                        <br />
                        R$ 99,90 / mês
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="dvblkseguro uber">
                <a href="/seguro-uber.html" className="link-blk-seg w-inline-block">
                  <div className="dvblksegurologo">
                    <img
                      src="/images/logo-uber-sem-linha.svg"
                      alt=""
                      loading="lazy"
                      className="imglogoseguro lazyload"
                    />
                  </div>
                  <div className="dvblksegurodescpreco">
                    <div className="dvblkseguropreo">
                      <h1 className="headsegdescricao">Aplicativo</h1>
                    </div>
                    <div className="dvblksegurodescricao">
                      <div className="txtblksegpreco">
                        A partir de
                        <br />
                        R$ 84,90 / mês
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="dvblkseguro utilitarios">
                <a href="/seguro-utilitario.html" className="link-blk-seg w-inline-block">
                  <div className="dvblksegurologo">
                    <img
                      src="/images/logo-utilitario-sem-linha.svg"
                      alt=""
                      loading="lazy"
                      className="imglogoseguro lazyload"
                    />
                  </div>
                  <div className="dvblksegurodescpreco">
                    <div className="dvblkseguropreo">
                      <h1 className="headsegdescricao">Utilitários</h1>
                    </div>
                    <div className="dvblksegurodescricao">
                      <div className="txtblksegpreco">
                        A partir de
                        <br />
                        R$ 94,90 / mês
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="dvblkseguro motos">
                <a href="/seguro-motos.html" className="link-blk-seg w-inline-block">
                  <div className="dvblksegurologo">
                    <img
                      src="/images/logo-moto-sem-linha.svg"
                      alt=""
                      loading="lazy"
                      className="imglogoseguro lazyload"
                    />
                  </div>
                  <div className="dvblksegurodescpreco">
                    <div className="dvblkseguropreo">
                      <h1 className="headsegdescricao">Motos</h1>
                    </div>
                    <div className="dvblksegurodescricao">
                      <div className="txtblksegpreco">
                        A partir de
                        <br />
                        R$ 49,90 / mês
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="dvblkseguro _24hs">
                <a href="/assistencia-24-horas.html" className="link-blk-seg w-inline-block">
                  <div className="dvblksegurologo">
                    <img
                      src="/images/colisao-branco-centralizado.svg"
                      alt="Colisao svg"
                      loading="lazy"
                      className="imglogoseguro lazyload"
                    />
                  </div>
                  <div className="dvblksegurodescpreco">
                    <div className="dvblkseguropreo">
                      <h1 className="headsegdescricao">RCF/24 Hs</h1>
                    </div>
                    <div className="dvblksegurodescricao">
                      <div className="txtblksegpreco">
                        A partir de
                        <br />
                        R$ 39,90 / mês
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="dvblkseguro taxi">
                <a href="/seguro-taxi.html" className="link-blk-seg w-inline-block">
                  <div className="dvblksegurologo">
                    <img
                      src="/images/logo-taxi-sem-linha.svg"
                      alt=""
                      loading="lazy"
                      className="imglogoseguro lazyload"
                    />
                  </div>
                  <div className="dvblksegurodescpreco">
                    <div className="dvblkseguropreo">
                      <h1 className="headsegdescricao">Taxi</h1>
                    </div>
                    <div className="dvblksegurodescricao">
                      <div className="txtblksegpreco">
                        A partir de
                        <br />
                        R$ 99,90/ mês
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="dvblkseguro pet">
                <a href="/assistencia-24-horas.html" className="link-blk-seg w-inline-block">
                  <div className="dvblksegurologo">
                    <img
                      src="/images/pet-pequeno.svg"
                      alt=""
                      loading="lazy"
                      className="imglogoseguro lazyload"
                    />
                  </div>
                  <div className="dvblksegurodescpreco">
                    <div className="dvblkseguropreo">
                      <h1 className="headsegdescricao">Pet</h1>
                    </div>
                    <div className="dvblksegurodescricao">
                      <div className="txtblksegpreco">
                        A partir de
                        <br />
                        R$ 99,90 / mês
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="dvblkseguro fianca">
                <a href="/fianca.html" className="link-blk-seg w-inline-block">
                  <div className="dvblksegurologo">
                    <img
                      src="/images/rental.svg"
                      alt=""
                      loading="lazy"
                      className="imglogoseguro lazyload"
                    />
                  </div>
                  <div className="dvblksegurodescpreco">
                    <div className="dvblkseguropreo">
                      <h1 className="headsegdescricao">Aluguel</h1>
                    </div>
                    <div className="dvblksegurodescricao">
                      <div className="txtblksegpreco">
                        A partir de
                        <br />
                        R$ 99,90 / mês
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="por-que">
          <div className="w-container">
            <div className="titulo-principal-isolado">somos a imediato seguros</div>
            <div className="w-layout-grid grid-8">
              <div className="dv-blk-pq">
                <img
                  src="/images/call-center-menina.jpg"
                  alt=""
                  loading="lazy"
                  className="image-16"
                />
                <h1 className="head-pq">atendimento</h1>
                <div className="text-block-36">
                  Na Imediato Seguros você é <strong>atendido por gente de verdade</strong>, que entende suas necessidades e busca o seguro com as coberturas que você necessita e com um preço que cabe no seu bolso.
                </div>
              </div>
              <div className="dv-blk-pq">
                <img
                  src="/images/equipe-experiente-mobile-optimized.jpg"
                  alt=""
                  loading="lazy"
                  className="image-16"
                />
                <h1 className="head-pq">experiência</h1>
                <div className="text-block-36">
                  A Imediato Seguros tem mais de <strong>25 anos de experiência</strong> lidando apenas com produtos de seguros. Os profissionais conhecem profundamente as regiões que atuam e suas peculiaridades.
                </div>
              </div>
              <div className="dv-blk-pq">
                <img
                  src="/images/visao-geral-equipe-optimized.jpg"
                  alt=""
                  loading="lazy"
                  className="image-16"
                />
                <h1 className="head-pq">equipe</h1>
                <div className="text-block-36">
                  A <strong>equipe </strong>de negócios da Imediato Seguros é <strong>jovem, dinâmica e altamente treinada e capacitada</strong>. E trabalha com os mais modernos recursos e sistemas para tornar o atendimento ágil e rápido.
                </div>
              </div>
              <div className="dv-blk-pq">
                <img
                  src="/images/reputacao-compressed.jpg"
                  alt=""
                  loading="lazy"
                  className="image-16"
                />
                <h1 className="head-pq">reputação</h1>
                <div className="text-block-36">
                  <strong>O nível de satisfação</strong> com a Imediato Seguros atinge <strong>mais de 98%</strong> no <strong>Google </strong>e no <strong>Facebook</strong>.
                </div>
                <a href="/reputacao.html" className="reputacao-botao w-button">CONFIRA</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pqa pqauto">
          <div className="w-container">
            <div className="titulo-principal-isolado">preço, qualidade e atendimento</div>
            <div className="div-block-16">
              <div className="dv-blk-condicoes">
                <img
                  src="/images/BEST-PRICE-4.svg"
                  width="169"
                  alt=""
                  loading="lazy"
                  className="img-cond lazyload"
                />
                <h1 className="heading-4">preço</h1>
                <div className="txtblk2">
                  Uma equipe especializada <strong>busca o melhor preço</strong> para o seu seguro em todos os nossos parceiros.
                </div>
              </div>
              <div className="dv-blk-condicoes">
                <img
                  src="/images/BONUS4.svg"
                  width="169"
                  alt=""
                  loading="lazy"
                  className="img-cond lazyload"
                />
                <h1 className="heading-4">bônus</h1>
                <div className="txtblk2">
                  <strong>Usamos </strong>integralmente o <strong>bônus de seu seguro atual</strong> para todos as companhias seguradoras do mercado.
                </div>
              </div>
              <div className="dv-blk-condicoes">
                <img
                  src="/images/SOB-MEDIDA-2.svg"
                  width="169"
                  alt=""
                  loading="lazy"
                  className="img-cond lazyload"
                />
                <h1 className="heading-4">sob medida</h1>
                <div className="txtblk2">
                  Seu seguro será adaptado à sua necessidade. <strong> Não "empurramos" produtos</strong> prontos e inflexíveis.
                </div>
              </div>
              <div className="dv-blk-condicoes">
                <img
                  src="/images/sinistro.svg"
                  width="169"
                  alt=""
                  loading="lazy"
                  className="img-cond lazyload"
                />
                <h1 className="heading-4">sinistro</h1>
                <div className="txtblk2">
                  <strong>Não abandonamos você em caso de sinistro.</strong> Uma equipe especializada o acompanha e auxilia.
                </div>
              </div>
              <div className="dv-blk-condicoes">
                <img
                  src="/images/canais-19.svg"
                  width="169"
                  alt=""
                  loading="lazy"
                  className="img-cond lazyload"
                />
                <h1 className="heading-4">Canais</h1>
                <div className="txtblk2">
                  Fale conosco como e quando você quiser, pelo <strong>Telefone, Whatsapp, e-mail ou mídias sociais</strong>.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="secao-parceiras" className="seguradoras parceiras">
          <div className="w-container">
            <h1 className="titulo-principal-c-subtitulo">Parceiros</h1>
            <h4 className="sub-titulo-principal">
              Companhias seguradoras de confiança, registradas na SUSEP e fiscalizadas pelos órgãos reguladores
            </h4>
            <div className="w-layout-grid grid-9">
              <img src="/images/porto-grey.svg" alt="" loading="lazy" className="img-seg-3 lazyload" />
              <img src="/images/bradesco-grey.svg" alt="" loading="lazy" className="img-seg-3 lazyload" />
              <img src="/images/azul-grey.svg" alt="" loading="lazy" className="img-seg-3 azul lazyload" />
              <img src="/images/itau-grey.svg" alt="" loading="lazy" className="img-seg-3 lazyload" />
              <img src="/images/hdi-grey.svg" alt="" loading="lazy" className="img-seg-3 lazyload" />
              <img src="/images/tokio-grey.svg" alt="" loading="lazy" className="img-seg-3 tokio lazyload" />
              <img src="/images/sompo-grey.svg" alt="" loading="lazy" className="img-seg-3 sompo lazyload" />
              <img src="/images/mapfre-grey.svg" alt="" loading="lazy" className="img-seg-3 lazyload" />
              <img src="/images/liberty-grey.svg" alt="" loading="lazy" className="img-seg-3 lazyload" />
              <img src="/images/allianz-grey-quadrado.svg" alt="" loading="lazy" className="img-seg-3" />
              <img src="/images/LOOVI-SVG.svg" alt="" loading="lazy" className="img-seg-3" />
              <img src="/images/pier-svg-3.svg" alt="" loading="lazy" className="img-seg-3" />
              <img src="/images/justus-svg-1.svg" alt="" loading="lazy" className="img-seg-3" />
              <img src="/images/darwin-svg.svg" alt="" loading="lazy" className="img-seg-3" />
              <img src="/images/usebens-svg-1.svg" alt="" loading="lazy" className="img-seg-3" />
              <img src="/images/novo-svg.svg" alt="" loading="lazy" className="img-seg-3" />
              <img src="/images/youse-svg.svg" alt="" loading="lazy" className="img-seg-3" />
              <img src="/images/ezze-svg.svg" alt="" loading="lazy" className="img-seg-3" />
            </div>
          </div>
        </div>

        <div className="new-coberturas-auto">
          <div className="container-coberturas w-container">
            <div className="titulo-principal-c-subtitulo">COBERTURAS DISPONÍVEIS</div>
            <h4 className="sub-titulo-principal">
              As mais completas coberturas para a sua tranquilidade e segurança
            </h4>
            <div className="w-layout-grid grid-6">
              <div className="dvblk-std-1">
                <img src="/images/colisao-branco-centralizado.svg" width="50" alt="" loading="lazy" className="img-std-1 colisao" />
                <h1 className="heading-std-1-copy">COLISÃO</h1>
              </div>
              <div className="dvblk-std-1">
                <img src="/images/furto-branco-centralizado.svg" width="50" alt="" loading="lazy" className="img-std-1 roubo" />
                <h1 className="heading-std-1-copy">ROUBO E FURTO</h1>
              </div>
              <div className="dvblk-std-1">
                <img src="/images/incendio-branco-centralizado.svg" width="50" alt="" loading="lazy" className="img-std-1 fogo" />
                <h1 className="heading-std-1-copy">INCÊNDIO</h1>
              </div>
              <div className="dvblk-std-1">
                <img src="/images/DP-branco-centralizado.svg" width="50" alt="" loading="lazy" className="img-std-1 dp" />
                <h1 className="heading-std-1-copy">DANOS PESSOAIS</h1>
              </div>
              <div className="dvblk-std-1">
                <img src="/images/dm-colisao-branco-centralizado.svg" width="50" alt="" loading="lazy" className="img-std-1 dm" />
                <h1 className="heading-std-1-copy">DANOS MATERIAIS</h1>
              </div>
              <div className="dvblk-std-1">
                <img src="/images/24hs-branco-centralizado.svg" width="50" alt="" loading="lazy" className="img-std-1 _24hs" />
                <h1 className="heading-std-1-copy">ASSISTÊNCIA 24HS</h1>
              </div>
              <div className="dvblk-std-1">
                <img src="/images/chave-branco-centralizado.svg" width="50" alt="" loading="lazy" className="img-std-1 chave" />
                <h1 className="heading-std-1-copy">CHAVEIRO</h1>
              </div>
              <div className="dvblk-std-1">
                <img src="/images/vidros-branco-centralizado.svg" width="50" alt="" loading="lazy" className="img-std-1 vidros" />
                <h1 className="heading-std-1-copy">VIDROS</h1>
              </div>
              <div className="dvblk-std-1">
                <img src="/images/pane-seca-branco-centralizado.svg" width="50" alt="" loading="lazy" className="img-std-1 paneseca" />
                <h1 className="heading-std-1-copy">PANE SECA</h1>
              </div>
              <div className="dvblk-std-1">
                <img src="/images/BATERIA-branco-centralizado.svg" width="50" alt="" loading="lazy" className="img-std-1 paneeletrica" />
                <h1 className="heading-std-1-copy">PANE ELÉTRICA</h1>
              </div>
              <div className="dvblk-std-1">
                <img src="/images/PANE-MECANICA-branco-centralizado.svg" width="50" alt="" loading="lazy" className="img-std-1 panemecanica" />
                <h1 className="heading-std-1-copy">PANE MECÂNICA</h1>
              </div>
              <div className="dvblk-std-1">
                <img src="/images/FAROIS-branco-centralizado.svg" width="50" alt="" loading="lazy" className="img-std-1 farois" />
                <h1 className="heading-std-1-copy">FARÓIS</h1>
              </div>
              <div className="dvblk-std-1">
                <img src="/images/TAXI-branco-centralizado.svg" width="50" alt="Taxi svg" loading="lazy" className="img-std-1 taxi" />
                <h1 className="heading-std-1-copy">TAXI</h1>
              </div>
              <div className="dvblk-std-1">
                <img src="/images/retrovisor-branco-centralizado.svg" width="50" alt="" loading="lazy" className="img-std-1 retrovisor" />
                <h1 className="heading-std-1-copy">RETROVISORES</h1>
              </div>
              <div className="dvblk-std-1">
                <img src="/images/pneu-branco-centralizado.svg" width="50" alt="" loading="lazy" className="img-std-1 pneu" />
                <h1 className="heading-std-1-copy">PNEUS</h1>
              </div>
              <div className="dvblk-std-1">
                <img src="/images/rentalcar-branco-centralizado.svg" width="50" alt="" loading="lazy" className="img-std-1 reserva" />
                <h1 className="heading-std-1-copy">CARRO RESERVA</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="equipe">
          <div className="container-16 w-container">
            <h1 className="titulo-principal-c-subtitulo">CONHEÇA NOSSA EQUIPE DE ESPECIALISTAS</h1>
            <h4 className="sub-titulo-principal">
              <strong>39 COLABORADORES </strong>PARA MELHOR ATENDÊ-LO
            </h4>
            <div className="collection-list-wrapper-3 w-dyn-list">
              <div role="list" className="collection-list-3 w-dyn-items">
                <div role="listitem" className="equipe-item w-dyn-item">
                  <div className="div-block-36">
                    <img
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/5f4547a72eb9133a64c8b085/614cce34405fb19a4dc72dc4_Alberto_2.jpg"
                      className="image-25"
                    />
                  </div>
                  <div className="text-block-47">Alberto</div>
                </div>
                <div role="listitem" className="equipe-item w-dyn-item">
                  <div className="div-block-36">
                    <img
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/5f4547a72eb9133a64c8b085/614cce3ea2f79ed315f43e13_alex_2.jpg"
                      className="image-25"
                    />
                  </div>
                  <div className="text-block-47">Alex</div>
                </div>
                <div role="listitem" className="equipe-item w-dyn-item">
                  <div className="div-block-36">
                    <img
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/5f4547a72eb9133a64c8b085/614cce473570282024ea043a_Aline_2.jpg"
                      className="image-25"
                    />
                  </div>
                  <div className="text-block-47">Aline</div>
                </div>
                <div role="listitem" className="equipe-item w-dyn-item">
                  <div className="div-block-36">
                    <img
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/5f4547a72eb9133a64c8b085/614cce5068f3522027d68ae8_Alyssa_2.jpg"
                      className="image-25"
                    />
                  </div>
                  <div className="text-block-47">Alyssa</div>
                </div>
                <div role="listitem" className="equipe-item w-dyn-item">
                  <div className="div-block-36">
                    <img
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/5f4547a72eb9133a64c8b085/614cce59f6f8fd1c6a2c6520_ana_2.jpg"
                      className="image-25"
                    />
                  </div>
                  <div className="text-block-47">Ana</div>
                </div>
                <div role="listitem" className="equipe-item w-dyn-item">
                  <div className="div-block-36">
                    <img
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/5f4547a72eb9133a64c8b085/614cce649102f86ecfd59a87_Andrade-Jr_2.jpg"
                      className="image-25"
                    />
                  </div>
                  <div className="text-block-47">Andrade Jr</div>
                </div>
              </div>
            </div>
            <a href="/equipe.html" className="equipe-botao w-button">
              CONHEÇA TODOS OS NOSSOS COLABORADORES
            </a>
          </div>
        </div>

        <div className="calculo-auto footer">
          <div className="container_padrao footer w-container">
            <div className="row footer w-row">
              <div className="col rodape w-col w-col-5 w-col-medium-6 w-col-small-6">
                <p className="paragraph">
                  <strong className="bold-text">
                    IMEDIATO SOLUÇÕES CORRETORA DE SEGUROS LTDA.
                  </strong>
                </p>
                <p className="paragraph-sub">
                  MAIS DE 35 ANOS DE EXPERIÊNCIA.
                  <br />
                  ESPECIALISTA EM SEGUROS DE AUTO.
                </p>
                <div className="div-block-43">
                  <div className="div-block-44">
                    <div className="text-block-48">
                      Registro na SUSEP:&nbsp;
                      <strong className="bold-text-3">222137462</strong>
                    </div>
                  </div>
                  <div>
                    <a
                      href="https://www2.susep.gov.br/safe/menumercado/certidoes/emite_certidoescorretores_2011.asp?id=9bd84712-1ee6-4171-af95-df8e09bcb1bc"
                      target="_blank"
                      className="link"
                    >
                      (Consulte Aqui)
                    </a>
                    <link
                      rel="prefetch"
                      href="https://www2.susep.gov.br/safe/menumercado/certidoes/emite_certidoescorretores_2011.asp?id=9bd84712-1ee6-4171-af95-df8e09bcb1bc"
                    />
                  </div>
                </div>
                <div className="text-block-49">
                  CPNJ:&nbsp;
                  <strong className="bold-text-2">45.998.165/0001-32</strong>
                </div>
                <p className="paragraph-text">
                  Rua Barão de Itapetininga, 125 - 6o andar
                  <br />
                  <span className="thin">
                    CEP 01042-001 - Centro - São Paulo – SP
                  </span>
                </p>
              </div>
              <div className="col rodape w-col w-col-7 w-col-medium-6 w-col-small-6">
                <div className="div-block-39">
                  <div className="dvblkfone">
                    <div className="text-block-12 rod">São Paulo:</div>
                    <a
                      href="tel:+551132301422"
                      id="sp-fone-link-footer"
                      className="fone-link sp"
                    >
                      (11) 3230-1422
                    </a>
                  </div>
                  <div className="dvblkfone">
                    <div className="text-block-12 rod">Rio de Janeiro:</div>
                    <a
                      href="tel:+552140421811"
                      id="rj-fone-link"
                      className="fone-link rj"
                    >
                      (11) 4042-1811
                    </a>
                  </div>
                  <div className="dvblkfone whatsapp">
                    <div className="text-block-12 rod">Whatsapp:</div>
                    <a
                      href="#"
                      id="whatsappfone2"
                      className="whatsapp-link wp"
                    >
                      (11) 4171-8837
                    </a>
                  </div>
                  <div className="dvblkfone">
                    <div className="text-block-12 rod">Ouvidoria:</div>
                    <a
                      href="tel:+5511976687668"
                      id="ouvidoria-fone"
                      className="ouvidoria-link rj"
                    >
                      (11) 97668-7668
                    </a>
                  </div>
                  <div className="dvblkfone">
                    <a
                      href="mailto:CONTATO@IMEDIATOSEGUROS.COM.BR"
                      className="link-header mail"
                    >
                      contato@imediatoseguros.com.br
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="div-whatsapp" data-w-id="ad2ec8dc-2923-fbb8-7a3c-7f765efe2fc5" className="divwhatsappclass">
          <a id="whatsapplink" href="#" target="_blank" className="linkblkwhatsapp w-inline-block">
            <img src="/images/whatsapp-icon-seeklogo.com.svg" width="62" id="whatsppimg" alt="Icone whatsapp svg" loading="lazy" className="imgclasswhatsapp" />
          </a>
        </div>

        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=59eb807f9d16950001e202af"
          strategy="afterInteractive"
        />
        <Script src="/js/segurosimediato.js" strategy="afterInteractive" />
        <Script id="click-events" strategy="afterInteractive">
          {`
            $(document).ready(function(){
              $('#sp-fone-link').on('click', function(e){
                gtag_report_conversion('tel:+551132301422');
              });
              $('#rj-fone-link').on('click', function(e){
                gtag_report_conversion('tel:+552140421811');
              });
              $('#whatsapplink, #whatsappfone1, #whatsappfone2').on('click', function(e) {
                var gclid = (function(name){ 
                  var n = name + "="; 
                  var cookie = document.cookie.split(';');
                  for(var i=0;i < cookie.length;i++){
                    var c = cookie[i];
                    while (c.charAt(0)==' ') { c = c.substring(1); }
                    if (c.indexOf(n) === 0) { return c.substring(n.length); }
                  }
                  return null;
                })("gclid");
                window.open("https://api.whatsapp.com/send?phone=551132301422&text=Ola.%20Quero%20fazer%20uma%20cotacao%20de%20seguro.%20Codigo%20de%20Desconto%20(Nao%20apagar,%20por%20favor)%20=%20" + gclid);
              });
              $('#CELULAR').on('change', function(e) {
                var ddd = $('#DDD-CELULAR').val();
                var numero = $('#CELULAR').val();
                var number = ddd + numero;
                var str1 = 'Parece que o número do celular informado\\n\\n';
                var str2 = ddd + '-' + numero;
                var str3 = '\\n\\nnão é válido.\\n\\nO telefone celular correto é muito importante para que possamos entrar em contato para detalhar os dados do seu perfil.\\n\\n';
                var str4 = 'Deseja voltar e corrigir o número do seu celular?';
                fetch('https://apilayer.net/api/validate?access_key=dce92fa84152098a3b5b7b8db24debbc&country_code=BR&number=' + number)
                  .then(response => response.json())
                  .then(data => {
                    if (!data["valid"]) {
                      swal({
                        title: "Ops!",
                        text: str1 + str2 + str3 + str4,
                        icon: "warning",
                        buttons: ["Não Corrigir", "Corrigir"],
                      })
                      .then((r) => {
                        if (r) {
                          $('#DDD-CELULAR').focus();
                        } else {
                          $('#DDD-TELEFONE').focus();
                        }
                      });
                    }
                  });
              });
              $("#email").on('change', function(){
                var a = "https://optin.safetymails.com/main/safetyoptin/20a7a1c297e39180bd80428ac13c363e882a531f/9bab7f0c2711c5accfb83588c859dc1103844a94/";
                $.get(a + btoa($("#email").val()), function(a, i) {
                  if(a.StatusEmail !== 'VALIDO') {
                    swal({
                      title: "Ops!",
                      text: "Parece que o email informado\\n\\n" + $("#email").val() + "\\n\\nnão é válido.\\n\\nO email correto é muito importante para que possamos enviar cotação, proposta, apólice e futuras comunicações.\\n\\nDeseja voltar e corrigir o seu email?",
                      icon: "warning",
                      buttons: ["Não Corrigir", "Corrigir"],
                    })
                    .then((r) => {
                      if (r) {
                        $('#email').focus();
                      } else {
                        $('#CEP').focus();
                      }
                    });
                  }
                });
              });
            });
          `}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PD6J398"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </>
  );
}
