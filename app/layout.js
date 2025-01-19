// app/layout.js
import '../public/css/normalize.css';
import '../public/css/components.css';
import '../public/css/segurosimediato.css';
import Script from 'next/script';

export const metadata = {
  title: 'Cotação Seguro Auto - Cotação Grátis e Completa Sem Compromisso',
  description:
    'Os Seguros de Auto da Imediato têm coberturas completas para seu carro a partir de R$ 79,99 por mës. Perda e roubo 100% da tabela FIPE. Colisão. Perda Total. Assistencia 24 Hs. Cotação em 16 Seguradoras. Especialistas em Auto. Calcule Online Já. Roubo, Furto, Colisão, Incêndio, Ass24hs, RCF, Vidros, mais Cobertura Imediata.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        {/* Favicon and Apple touch icon */}
        <link rel="shortcut icon" href="/images/favicon.gif" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/webclip.gif" />
      </head>
      <body className="body">
        {/* Example global script inserted before interactive */}
        <Script strategy="beforeInteractive" id="wf-loader-script">{`
          !function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);
        `}</Script>
        {children}
      </body>
    </html>
  );
}
