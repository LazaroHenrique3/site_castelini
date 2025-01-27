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

export const storesData: IStoreType[] = [{
    city: "Bransorte",
    primaryImage: storeBrasnorte,
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.8343474581775!2d-58.00294340000001!3d-12.1234842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a4cf83ebedd921%3A0x542c21a1f0d871d3!2sCastelini%20Brasnorte!5e0!3m2!1spt-BR!2sbr!4v1737769155478!5m2!1spt-BR!2sbr",
    uf: "MT",
    cep: "78350-000",
    number: "22",
    address: "Av. dos Pioneiros, 1145 - Centro, Brasnorte - MT, 78350-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.7972284687376!2d-55.168439500000005!3d-15.548997199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x937635c523f02d93%3A0x9304c44d035bb1de!2sCastelini%20Campo%20Verde!5e0!3m2!1spt-BR!2sbr!4v1737769249651!5m2!1spt-BR!2sbr",
    uf: "MT",
    cep: "78840-000",
    number: "5",
    address: "R. Belém, 721 - Centro, Campo Verde - MT, 78840-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.9975697973327!2d-57.889827999999994!3d-13.657911499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a2efe1aeebe8bf%3A0xfcb4be65b1fee95a!2sCastelini%20Campo%20Novo%20do%20Parecis!5e0!3m2!1spt-BR!2sbr!4v1737769393064!5m2!1spt-BR!2sbr",
    uf: "MT",
    cep: "78360-000",
    number: "16",
    address: "Av. Brasil, 1080 - NE Centro, Campo Novo do Parecis - MT, 78360-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.025406925869!2d-59.26110989250931!3d-13.721340313221248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93bdad50fa84a9d1%3A0xc41c5d61a234fe86!2sCastelini%20Campos%20de%20J%C3%BAlio!5e0!3m2!1spt-BR!2sbr!4v1737769500350!5m2!1spt-BR!2sbr",
    uf: "MT",
    cep: "78307-000",
    number: "19",
    address: "Av. Valdir Masutti, 288S - Centro, Campos de Júlio - MT, 78307-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.634138046601!2d-52.2708826!3d-13.558021100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x936d174bdafb817b%3A0x4431b200db0bc0e1!2sCastelini%20Canarana!5e0!3m2!1spt-BR!2sbr!4v1737769642579!5m2!1spt-BR!2sbr",
    uf: "MT",
    cep: "78640-000",
    number: "27",
    address: "R. Guarita, 205, Canarana - MT, 78640-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0096467164926!2d-55.455375999999994!3d-10.810572599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9307890ec212152b%3A0x655ae455b3f68c09!2sCastelini%20Colider!5e0!3m2!1spt-BR!2sbr!4v1737769752275!5m2!1spt-BR!2sbr",
    uf: "MT",
    cep: "78500-000",
    number: "12",
    address: "Av. Mal. Cândido Rondon, 489 - Centro, Colíder - MT, 78500-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.821090971155!2d-54.9059761!3d-9.948839000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93072da4db56d7a9%3A0xbb830f070f69fb57!2sCastelini%20Guarant%C3%A3%20do%20Norte!5e0!3m2!1spt-BR!2sbr!4v1737769870629!5m2!1spt-BR!2sbr",
    uf: "MT",
    cep: "78520-000",
    number: "25",
    address: "Rua dos Cajueiros número 235, |, Quadra 22 - Lote 13, Guarantã do Norte - MT, 78520-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.922029210301!2d-54.9685056!3d-15.965447699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9377976766801433%3A0x770d5ddd935c9539!2sCastelini%20Modas%20(%20Jaciara)!5e0!3m2!1spt-BR!2sbr!4v1737770009250!5m2!1spt-BR!2sbr",
    uf: "MT",
    cep: "78820-000",
    number: "4",
    address: "Av. Antônio Ferreira Sobrinho, 1285 - Centro, Jaciara - MT, 78820-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0257914387066!2d-57.512058100000004!3d-11.259512899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93af71b65810c793%3A0xe61e517abc4a2126!2sCastelini%20Juara!5e0!3m2!1spt-BR!2sbr!4v1737770117705!5m2!1spt-BR!2sbr",
    uf: "MT",
    cep: "78575-000",
    number: "20",
    address: "Av. Rio Arinos, 798W - Centro, Juara - MT, 78575-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d430.9733675538621!2d-58.75899389038277!3d-11.417155248395634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93b06d43e048d651%3A0xe6ed15672c479592!2sCastelini%20Ju%C3%ADna!5e0!3m2!1spt-BR!2sbr!4v1737767852290!5m2!1spt-BR!2sbr",
    uf: "MT",
    cep: "78320-000",
    number: "21",
    address: "Av. Mato Grosso, 679N - Eixo Comercial I, Juína - MT, 78320-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2865.7934349639518!2d-54.92806506383427!3d-10.169045067796786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9307238e5d766417%3A0x48529cfc5b9a4554!2sCastelini%20Matup%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1737767975979!5m2!1spt-BR!2sbr",
    uf: "MT",
    cep: "78525-000",
    number: "24",
    address: "Avenida Victor Fidelis Donini número 2824 Lote 24 | Quadra 28, Matupá - MT, 78525-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.3266333497418!2d-56.082096199999995!3d-13.8194147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a029be6fde5355%3A0x4d4dd487e75e60f!2sCastelini%20Nova%20Mutum!5e0!3m2!1spt-BR!2sbr!4v1737768127890!5m2!1spt-BR!2sbr",
    uf: "MT",
    cep: "78450-000",
    number: "11",
    address: "Av. Mutum, 552 N - Centro, Nova Mutum - MT, 78450-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.203998708968!2d-54.9905999!3d-10.245124800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9307177406a7e0c3%3A0x39748b8527f9dd!2sCastelini%20Peixoto!5e0!3m2!1spt-BR!2sbr!4v1737768265858!5m2!1spt-BR!2sbr",
    uf: "MT",
    cep: "78530-000",
    number: "26",
    address: "Av. Brasil, 111 - Centro Antigo, Peixoto de Azevedo - MT, 78530-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.6722869239275!2d-54.2978919!3d-15.555689099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9377254ed7cdb89d%3A0x5c9f7394555a0434!2sCastelini%20Primavera%20do%20Leste!5e0!3m2!1spt-BR!2sbr!4v1737768402937!5m2!1spt-BR!2sbr",
    uf: "MT",
    cep: "78850-000",
    number: "14",
    address: "Av. Porto Alegre, 793 - Primavera I, Primavera do Leste - MT, 78850-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.804692090782!2d-58.814351699999996!3d-13.5475695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93bce1e85aebb6d1%3A0x80ffe60a64311829!2sCastelini%20Sapezal!5e0!3m2!1spt-BR!2sbr!4v1737768555880!5m2!1spt-BR!2sbr",
    uf: "MT",
    cep: "78365-000",
    number: "18",
    address: "Av. Pref. André Antônio Maggi, 1070 - Centro, Sapezal - MT, 78365-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.702396500513!2d-55.503842!3d-11.8560929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77f6129520985%3A0x6ee16cfe9b0e1d8b!2sCastelini%20Sinop!5e0!3m2!1spt-BR!2sbr!4v1737768714102!5m2!1spt-BR!2sbr",
    uf: "MT",
    cep: "78898-000",
    number: "17",
    address: "Av. Gov. Júlio Campos, 765 - St. Comercial, Sinop - MT, 78898-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1104.3940696126715!2d-55.716382473844504!3d-12.549483089060924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a0b36fcb234917%3A0x5dc96219abedf5d9!2sCastelini%20Sorriso!5e0!3m2!1spt-BR!2sbr!4v1737768976680!5m2!1spt-BR!2sbr",
    uf: "MT",
    cep: "78890-000",
    number: "9",
    address: "Av. Natalino João Brescansin, 210-342 - Centro Sul, Sorriso - MT, 78890-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.0261528768087!2d-52.6209476!3d-18.7969878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949d318abc91307b%3A0x525a80545c221a9e!2sCastelini%20Chapad%C3%A3o%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1737771440901!5m2!1spt-BR!2sbr",
    uf: "MS",
    cep: "79560-000",
    number: "7",
    address: "Av. Seis, 785 - Centro - Centro, Chapadão do Sul - MS, 79560-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.8106896911113!2d-53.1364812!3d-18.5374551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94829b2f088abd5b%3A0x6b16053ffd1a17cc!2sCastelini%20Costa%20Rica!5e0!3m2!1spt-BR!2sbr!4v1737771610890!5m2!1spt-BR!2sbr",
    uf: "MS",
    cep: "79550-000",
    number: "23",
    address: "Av. José Ferreira da Costa, 1435 - Lote 02 Quadra 42 - Centro, Costa Rica - MS, 79550-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.54397172028!2d-54.7487718!3d-18.5043045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x937e3512422a98eb%3A0xacd7258406eaf081!2sCastelini%20Coxim!5e0!3m2!1spt-BR!2sbr!4v1737771707068!5m2!1spt-BR!2sbr",
    uf: "MS",
    cep: "79400-000",
    number: "6",
    address: "Av. Virgínia Ferreira, 547 - Bairro Flávio Garcia, Coxim - MS, 79400-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.3633758077654!2d-54.570499399999996!3d-19.3966995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9481a79ca39a516f%3A0xb1a34813a75dc8c9!2sCastelini%20S%C3%A3o%20Gabriel%20do%20Oeste!5e0!3m2!1spt-BR!2sbr!4v1737771841132!5m2!1spt-BR!2sbr",
    uf: "MS",
    cep: "79490-000",
    number: "15",
    address: "R. Paraná, 1316 - Centro, São Gabriel do Oeste - MS, 79490-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15213.525160622545!2d-54.765672581675716!3d-17.58461991177729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x937ed680adb52b15%3A0xa43ae7a2853677a6!2sCastelini%20Sonora!5e0!3m2!1spt-BR!2sbr!4v1737771918761!5m2!1spt-BR!2sbr",
    uf: "MS",
    cep: "79415-000",
    number: "8",
    address: "Av. do Povo, 725, Sonora - MS, 79415-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7324.315880680396!2d-53.29198502261505!3d-23.382502916953765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x948d223b4734f3d3%3A0xdaa5f7f7dd48fd93!2sCastelini%20Douradina!5e0!3m2!1spt-BR!2sbr!4v1737772026389!5m2!1spt-BR!2sbr",
    uf: "PR",
    cep: "87485-000",
    number: "1",
    address: "Av. Barão do Rio Branco, 682 - Jardim Brussioli, Douradina - PR, 87485-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.8161798786996!2d-53.624763200000004!3d-23.3948663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x948ce9f9b4c4f6a1%3A0x17bcf3f1e5ed2fcb!2sCastelini%20Icara%C3%ADma!5e0!3m2!1spt-BR!2sbr!4v1737772132538!5m2!1spt-BR!2sbr",
    uf: "PR",
    cep: "87530-000",
    number: "3",
    address: "Av. Hermes Vissoto, 944 - Centro, Icaraíma - PR, 87530-000",
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
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.778977126548!2d-53.37193904049637!3d-23.408455453123516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x948d21553e2db39d%3A0xf8784e18577f5734!2sCastelini%20Ivat%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1737772277488!5m2!1spt-BR!2sbr",
    uf: "PR",
    cep: "87525-000",
    number: "2",
    address: "Av. Rio de Janeiro, 2423 - Centro, Ivaté - PR, 87525-000",
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