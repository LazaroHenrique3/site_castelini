import Image from "next/image";
import { format } from 'date-fns';

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin
} from 'react-icons/fa';


import logo from '../../../public/images/logos/castelini-logo-white.png';
import { LinkGroup } from "./internal-components/link-group";

interface IFooterLinks {
  icon: React.ReactNode;  // Aceita qualquer tipo de conteúdo renderizável, incluindo JSX
  linkUrl: string;
}

const FooterLinks: IFooterLinks[] = [
  { icon: <FaInstagram size={23} className="text-primary-red" />, linkUrl: "https://www.instagram.com/castelinibrasil/?hl=pt-br" },
  { icon: <FaFacebook size={23} className="text-primary-red" />, linkUrl: "https://www.facebook.com/CasteliniBrasil" },
  { icon: <FaYoutube size={23} className="text-primary-red" />, linkUrl: "https://www.youtube.com/channel/UCaTaqBsC4BgVqI1_WWeAzXQ" },
  { icon: <FaLinkedin size={23} className="text-primary-red" />, linkUrl: "https://www.linkedin.com/company/lojas-castelini/" },
];

const footerSections = [
  {
    title: 'Ajuda e Suporte',
    links: [{ label: 'Fale conosco', url: 'https://www.castelini.com.br/brasnorte/fale-conosco' }]
  },
  {
    title: 'Faça parte',
    links: [{ label: 'Trabalhe conosco', url: 'https://www.castelini.com.br/brasnorte/trabalhe-conosco' }]
  },
  {
    title: 'Grupo Castelini',
    links: [
      { label: 'Quem somos', url: 'https://www.castelini.com.br/grupo-castelini' },
      { label: 'Nossas lojas', url: 'https://www.castelini.com.br/nossas-lojas' }
    ]
  }
];

export const Footer = () => {
  const currentYear = format(new Date(), 'yyyy');

  return (
    <footer className="w-full">
      <div className="w-full h-[20px] bg-primary-red"></div>
      <div className="w-full py-5 bg-primary-gray">
        <div className="w-full">
          <Image className="w-36 mx-auto" src={logo} alt="Castelini logo branca" />
        </div>


        <div className="w-full py-5 flex justify-center gap-6">
          <div className="w-full py-5 flex justify-center items-center gap-6 flex-col md:items-start md:flex-row">
            {footerSections.map((section) => (
              <LinkGroup key={section.title} title={section.title} links={section.links} />
            ))}
          </div>
        </div>

        <div className="mx-auto w-[90%] h-[1px] my-3 bg-gray-500 opacity-45"></div>

        <div>
          <div className="w-full flex justify-center gap-2">
            {FooterLinks.map((link, index) => (
              <a key={index} href={link.linkUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ir para ${link.linkUrl}`}>
                <div className="inline-block p-1 bg-white rounded-full hover:shadow-lg hover:scale-105 hover:shadow-primary-red transition duration-300">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>

          <p className="text-white text-base text-center">
            &copy; {currentYear} Castelini. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer >
  )
}

