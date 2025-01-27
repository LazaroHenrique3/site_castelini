import { StaticImageData } from "next/image";

export interface IStoreType {
    primaryImage?: StaticImageData,
    images?: StaticImageData[],
    mapSrc: string,
    city: string,
    uf: string;
    cep: string,
    number: string,
    address: string,
    openingHours: {
        week: {
            startDay: string,
            endDay: string,
            startHour: string,
            endHour: string
        },
        weekend: {
            startDay: string,
            endDay: string,
            startHour: string,
            endHour: string
        }
    }
    cellPhone: string,
    description?: string
}