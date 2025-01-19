import { IStoreType } from "@/types/IStoreTypes";

export const stores: IStoreType[] = [{
    city: "Bransorte",
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
    uf: "MT",
    number: "4",
    address: "AV VALDIR MASUTTI N°288S - CENTRO",
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
}]