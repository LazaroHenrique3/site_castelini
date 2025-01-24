import { IStoreType } from "@/types/IStoreTypes";

import storeBrasnorte from '../../public/images/stores/store-brasnorte.jpeg';
import storeCampoVerde from '../../public/images/stores/store-campo-verde.jpg';
import storeCampoNovoDoParecs from'../../public/images/stores/store-campo-novo-do-parecis.jpg';
import storeCamposDeJulio from '../../public/images/stores/store-campos-de-julio.jpg';
/* import storeCanarana from '../../public/images/stores/store-campos-de-julio.jpg'; */
import storeColider from '../../public/images/stores/store-colider.jpg';
import storeGuarantaDoNorte from  '../../public/images/stores/store-guaranta-do-norte.jpeg';
import storeJaciara from '../../public/images/stores/store-jaciara.jpg';
import storeJuara from '../../public/images/stores/store-juara.jpeg';
import storeJuina from '../../public/images/stores/store-juina.jpeg';
import storeMatupa from '../../public/images/stores/store-matupa.jpg';
import storeNovaMutum from '../../public/images/stores/store-nova-mutum.jpeg';
import storePeixotoDeAzevedo from '../../public/images/stores/store-peixoto-do-azevedo.png';
import storePrimaveraDoLeste from '../../public/images/stores/store-primavera-do-leste.jpg';
import storeSapezal from '../../public/images/stores/store-sapezal.jpg';
import storeSinop from '../../public/images/stores/store-sinop.png';
import storeSorriso from '../../public/images/stores/store-sorriso.jpg';
import storeChapadaoDoSul from '../../public/images/stores/store-chapadao-do-sul.jpg';
import storeCostaRica from '../../public/images/stores/store-costa-rica.jpeg';
import storeCoxim from '../../public/images/stores/store-coxim.jpeg';
import storeSaoGabrielDoOeste from '../../public/images/stores/store-sao-gabriel-do-oeste.png';
import storeSonora from '../../public/images/stores/store-sonora.jpg';
import storeDouradina from '../../public/images/stores/store-douradina.jpg';
import storeIcaraima from '../../public/images/stores/store-icaraima.jpg';
import storeIvate from '../../public/images/stores/store-ivate.jpg';

export const stores: IStoreType[] = [{
    city: "Bransorte",
    primaryImage: storeBrasnorte,
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.80210896582588!2d-58.00331152520066!3d-12.123525500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a4cf83ebedd921%3A0x542c21a1f0d871d3!2sCastelini%20Brasnorte!5e0!3m2!1spt-BR!2sbr!4v1737684916931!5m2!1spt-BR!2sbr",
    uf: "MT",
    number: "1",
    address: "Avenida dos Pioneiros N°1145 - Quadra 45, Lote 01",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "09h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "09h",
            endHour: "13h"
        }
    },
    cellPhone: "(66) 9998-93683",
    description: "Atendimento"
},
{
    city: "Campo Verde",
    primaryImage: storeCampoVerde,
    mapSrc: "",
    uf: "MT",
    number: "2",
    address: "Rua Belém N°721 - Centro",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "08h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "08h",
            endHour: "14h"
        }
    },
    cellPhone: "(66) 3419-4064",
    description: "Atendimento"
},
{
    city: "Campo Novo do Parecis",
    primaryImage: storeCampoNovoDoParecs,
    mapSrc: "",
    uf: "MT",
    number: "3",
    address: "Avenida Brasil N°1080 - Centro",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "08h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "08h",
            endHour: "12h"
        }
    },
    cellPhone: "(65) 3382-2851",
    description: "Atendimento"
},
{
    city: "Campos de Júlio",
    primaryImage: storeCamposDeJulio,
    mapSrc: "",
    uf: "MT",
    number: "4",
    address: "Av Valdir Masutti N°288S - CENTRO",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "09h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "09h",
            endHour: "13h"
        }
    },
    cellPhone: "(65) 3383-3494",
    description: "Atendimento"
},
{
    city: "Canarana",
    mapSrc: "",
    uf: "MT",
    number: "5",
    address: "Rua Guarita N°205 - Centro",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "09h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "09h",
            endHour: "13h"
        }
    },
    cellPhone: "(67) 9965-44986",
    description: "Atendimento"
},
{
    city: "Colíder",
    primaryImage: storeColider,
    mapSrc: "",
    uf: "MT",
    number: "6",
    address: "Avenida Marechal Rondon N°1082 - Centro",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "08h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "08h",
            endHour: "17h"
        }
    },
    cellPhone: "(66) 3541-4567",
    description: "Atendimento"
},
{
    city: "Guarantã do Norte",
    primaryImage: storeGuarantaDoNorte,
    mapSrc: "",
    uf: "MT",
    number: "7",
    address: "Rua dos Cajueiros N°235 - Centro",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "09h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "09h",
            endHour: "13h"
        }
    },
    cellPhone: "(66) 9999-98633",
    description: "Atendimento"
},
{
    city: "Jaciara",
    primaryImage: storeJaciara,
    mapSrc: "",
    uf: "MT",
    number: "8",
    address: "Avenida Antônio Ferreira Sobrinho N°1285 - Jaciara",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "08h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "08h",
            endHour: "12h"
        }
    },
    cellPhone: "(66) 3461-3452",
    description: "Atendimento"
},
{
    city: "Juara",
    primaryImage: storeJuara,
    mapSrc: "",
    uf: "MT",
    number: "9",
    address: "Avenida Rio Arinos N°798-W - Centro",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "09h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "09h",
            endHour: "13h"
        }
    },
    cellPhone: "(66) 3556-1191",
    description: "Atendimento"
},
{
    city: "Juína",
    primaryImage: storeJuina,
    mapSrc: "",
    uf: "MT",
    number: "10",
    address: "Avenida Mato Grosso N°679 - Eixo Comercial I",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "09h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "09h",
            endHour: "13h"
        }
    },
    cellPhone: "(67) 9989-0659",
    description: "Atendimento"
},
{
    city: "Matupá",
    primaryImage: storeMatupa,
    mapSrc: "",
    uf: "MT",
    number: "11",
    address: "Av. Victor Fidelis Donini N°2824 - Centro",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "09h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "09h",
            endHour: "13h"
        }
    },
    cellPhone: "(66) 9971-43970",
    description: "Atendimento"
},
{
    city: "Nova Mutum",
    primaryImage: storeNovaMutum,
    mapSrc: "",
    uf: "MT",
    number: "12",
    address: "Avenida Mutum N°552N - Nova Mutum",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "08h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "08h",
            endHour: "16h"
        }
    },
    cellPhone: "(65) 3308-3110",
    description: "Atendimento"
},
{
    city: "Peixoto de Azevedo",
    primaryImage: storePeixotoDeAzevedo,
    mapSrc: "",
    uf: "MT",
    number: "13",
    address: "Avenida Brasil N°111 - Centro Antigo",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "09h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "09h",
            endHour: "13h"
        }
    },
    cellPhone: "(66) 9999-57535",
    description: "Atendimento"
},
{
    city: "Primavera do Leste",
    primaryImage: storePrimaveraDoLeste,
    mapSrc: "",
    uf: "MT",
    number: "14",
    address: "Avenida Pôrto Alegre N°793 - Centro",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "08h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "08h",
            endHour: "14h"
        }
    },
    cellPhone: "(66) 3498-5040",
    description: "Atendimento"
},
{
    city: "Sapezal",
    primaryImage: storeSapezal,
    mapSrc: "",
    uf: "MT",
    number: "15",
    address: "Av Antonio Andre Maggi, (Quadra 54 Lote 16) N°1070SW - Loteamento Cidezal",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "09h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "09h",
            endHour: "13h"
        }
    },
    cellPhone: "(65) 3383-3494",
    description: "Atendimento"
},
{
    city: "Sinop",
    primaryImage: storeSinop,
    mapSrc: "",
    uf: "MT",
    number: "16",
    address: "Avenida Governador Júlio Campos N°765 - Setor Comercial - Centro",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "09h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "09h",
            endHour: "13h"
        }
    },
    cellPhone: "(66) 2102-7888",
    description: "Atendimento"
},
{
    city: "Sorriso",
    primaryImage: storeSorriso,
    mapSrc: "",
    uf: "MT",
    number: "17",
    address: "Avenida Natalino João Brescansin N°241 - Centro",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "08h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "08h",
            endHour: "16:30h"
        }
    },
    cellPhone: "(66) 3545-1054",
    description: "Atendimento"
},
{
    city: "Chapadão do Sul",
    primaryImage: storeChapadaoDoSul,
    mapSrc: "",
    uf: "MS",
    number: "18",
    address: "Avenida Seis N°785 - Centro",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "07:00h",
            endHour: "17:30h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "07h",
            endHour: "12h"
        }
    },
    cellPhone: "(67) 3562-2488",
    description: "Atendimento"
},
{
    city: "Costa Rica",
    primaryImage: storeCostaRica,
    mapSrc: "",
    uf: "MS",
    number: "19",
    address: "Av. José Ferreira da Costa N°1435 - Centro",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "09h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "09h",
            endHour: "13h"
        }
    },
    cellPhone: "(67) 9960-52171",
    description: "Atendimento"
},
{
    city: "Coxim",
    primaryImage: storeCoxim,
    mapSrc: "",
    uf: "MS",
    number: "20",
    address: "Av. Virgínia Ferreira N°547 - Bairro Flávio Garcia",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "08h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "08h",
            endHour: "12h"
        }
    },
    cellPhone: "(67) 3291-3616",
    description: "Atendimento"
},
{
    city: "São Gabriel do Oeste",
    primaryImage: storeSaoGabrielDoOeste,
    mapSrc: "",
    uf: "MS",
    number: "21",
    address: "Rua Paraná N°1316 - São Gabriel do Oeste",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "08h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "08h",
            endHour: "13h"
        }
    },
    cellPhone: "(67) 3295-3743",
    description: "Atendimento"
},
{
    city: "Sonora",
    primaryImage: storeSonora,
    mapSrc: "",
    uf: "MS",
    number: "22",
    address: "Avenida do Povo N°725 - Centro",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "08h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "08h",
            endHour: "12:30h"
        }
    },
    cellPhone: "(67) 3254-2901",
    description: "Atendimento"
},
{
    city: "Douradina",
    primaryImage: storeDouradina,
    mapSrc: "",
    uf: "PR",
    number: "23",
    address: "Avenida Barão do Rio Branco N°682 - CENTRO",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "08:30h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "08h",
            endHour: "14h"
        }
    },
    cellPhone: "(44) 3663-1569",
    description: "Atendimento"
},
{
    city: "Icaraíma",
    primaryImage: storeIcaraima,
    mapSrc: "",
    uf: "PR",
    number: "24",
    address: "Avenida Hermes Vissoto N°944 - Centro",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "08h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "08h",
            endHour: "12h"
        }
    },
    cellPhone: "(44) 3665-1429",
    description: "Atendimento"
},
{
    city: "Ivaté",
    primaryImage: storeIvate,
    mapSrc: "",
    uf: "PR",
    number: "25",
    address: "Avenida Rio de Janeiro N°2423 - Centro",
    openingHours: {
        week: {
            startDay: "Seg",
            endDay: "Sex",
            startHour: "08h",
            endHour: "18h"
        },
        weekend: {
            startDay: "Sáb",
            endDay: "Sáb",
            startHour: "08h",
            endHour: "14h"
        }
    },
    cellPhone: "(44) 3673-1210",
    description: "Atendimento"
}]