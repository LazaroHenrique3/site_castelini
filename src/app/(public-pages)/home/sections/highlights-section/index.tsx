import { FaBlog, FaWallet } from "react-icons/fa";
import { BsGrid } from "react-icons/bs";

export const HighlightsSection = () => (
    <section>
        <div className="w-full flex gap-4 justify-start md:justify-center overflow-x-scroll scrollbar-hide pl-4 pr-4 hide-scrollbar">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Ir para catálogo online">
                <div className="w-[300px] flex gap-3 items-center justify-center p-2 rounded-lg border-2 border-gray-300 shrink-0">
                    <BsGrid size={32} className="text-slate-600" />
                    <p className="font-semibold text-base text-slate-600">Conheça nosso catálogo online</p>
                </div>
            </a>

            <a href="https://www.blogcastelini.com.br/" target="_blank" rel="noopener noreferrer" aria-label="Ir para blog Castelini">
                <div className="w-[300px] flex gap-3 items-center justify-center p-2 rounded-lg border-2 border-gray-300 shrink-0">
                    <FaBlog size={32} className="text-slate-600" />
                    <p className="font-semibold text-base text-slate-600">Fique por dentro das novidades no Blog Castelini</p>
                </div>
            </a>

            <a href="https://crediario.castelini.com.br/login" target="_blank" rel="noopener noreferrer" aria-label="Ir para crediário online">
                <div className="w-[300px] flex gap-3 items-center justify-center p-2 rounded-lg border-2 border-gray-300 shrink-0">
                    <FaWallet size={32} className="text-slate-600" />
                    <p className="font-semibold text-base text-slate-600">Pague sua fatura no crediário online</p>
                </div>
            </a>
        </div>
    </section>
);