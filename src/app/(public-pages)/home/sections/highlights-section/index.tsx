import { FaBlog, FaUserPlus } from "react-icons/fa";
import { BsGrid } from "react-icons/bs";
import { HighlightCard } from "@/components/home/highlight-card";
import { IHighlightItemType } from "@/types/IHighlightItemType";

const highlightData: IHighlightItemType[] = [
    {
      icon: <BsGrid size={32} className="text-slate-600" />,
      text: "Conheça nosso catálogo online",
      link: "#",
      ariaLabel: "Ir para catálogo online",
    },
    {
      icon: <FaBlog size={32} className="text-slate-600" />,
      text: "Fique por dentro das novidades no Blog Castelini",
      link: "https://www.blogcastelini.com.br/",
      ariaLabel: "Ir para blog Castelini",
    },
    {
      icon: <FaUserPlus size={32} className="text-slate-600" />,
      text: "Faça seu cadastro no crediário Castelini",
      link: "https://www.blogcastelini.com.br/cadastro",
      ariaLabel: "Ir para cadastro no blog Castelini",
    },
  ];

export const HighlightsSection = () => (
    <section>
        <div className="w-full flex gap-4 justify-start md:justify-center overflow-x-scroll scrollbar-hide pl-4 pr-4 hide-scrollbar">
            {highlightData.map((item, index) => (
                <HighlightCard key={index} item={item} />
            ))}
        </div>
    </section>
);