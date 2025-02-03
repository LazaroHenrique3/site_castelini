import { parse, format, isAfter, getDay } from 'date-fns';
import { ptBR } from "date-fns/locale";

import { SelectOption } from "@/components/inputs/input-select";
import { ICityType } from "@/types/ICityTypes";
import { IStateType } from "@/types/IStateTypes";
import { IStoreType } from "@/types/IStoreTypes";

export const mapStatesToSelectOptions = (states: IStateType[]): SelectOption[] => {
  return states.map((state) => ({
    value: state.id,
    label: state.name,
  }));
};

export const mapCitiesToSelectOptions = (cities: ICityType[], selectedUf: string | null): SelectOption[] => {
  return cities
    .filter(city => city.stateUf === selectedUf) // Filtra as cidades com base no estado selecionado
    .map(city => ({
      value: city.city,
      label: city.city,
    }));
};

export const mapCitiesStoreToSelectOptions = (stores: IStoreType[], selectedUf: string | null): SelectOption[] => {
  return stores
    .filter(store => store.uf === selectedUf) // Filtra as cidades com base no estado selecionado
    .map(store => ({
      value: store.city,
      label: store.city,
    }));
};

export const mapStoreWithFilters = (
  stores: IStoreType[],
  selectedUf: string | null,
  selectedCity: string | null,
  selectedCep: string,
  selectedFilter: string
): IStoreType[] | null => {

  if(selectedFilter === 'all') return stores

  const filteredStores = stores.filter(store => {
    const matchesUf = selectedUf ? store.uf === selectedUf : true; // Se o estado foi informado, verifica, senão ignora
    const matchesCity = selectedCity ? store.city === selectedCity : true; // Se a cidade foi informada, verifica, senão ignora
    const matchesCep = selectedCep !== '' ? store.cep === selectedCep : true; // Se o CEP foi informado, verifica, senão ignora
    return matchesUf && matchesCity && matchesCep; // Deve satisfazer todas as condições aplicáveis
  });

  if (filteredStores.length === 0) {
    return null; // Retorna null se nenhum item corresponder aos filtros
  }

  return filteredStores.map(store => ({
    city: store.city,
    primaryImage: store.primaryImage,
    mapSrc: store.mapSrc,
    uf: store.uf,
    cep: store.cep,
    number: store.number,
    address: store.address,
    openingHours: {
      week: {
        startDay: store.openingHours.week.startDay,
        endDay: store.openingHours.week.endDay,
        startHour: store.openingHours.week.startHour,
        endHour: store.openingHours.week.endHour
      },
      weekend: {
        startDay: store.openingHours.weekend.startDay,
        endDay: store.openingHours.weekend.endDay,
        startHour: store.openingHours.weekend.startHour,
        endHour: store.openingHours.weekend.endHour
      }
    },
    cellPhone: store.cellPhone,
    description: store.description
  }));
};

export const mapStoresToSelectOptions = (stores: IStoreType[]): SelectOption[] => {
  return stores.map((store) => ({
    value: store.number,
    label: `${store.city} - ${store.uf}`,
  }));
};


//FUNÇÕES DE TEMPO
export const formattedDate = (date: string): string => {
  const formattedDate = format(parse(date, "dd/MM/yyyy HH:mm:ss", new Date()), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  return formattedDate;
}

export const checkClosingTime = (weekdayClosingTime: string, weekendClosingTime: string): boolean => {
  const now = new Date(); // Horário atual
  const currentDay = getDay(now); // 0 = Domingo, 1 = Segunda-feira, ..., 6 = Sábado

  // Determinar o horário de encerramento baseado no dia
  const rawClosingTime =
    currentDay === 0 || currentDay === 6 ? weekendClosingTime : weekdayClosingTime;

  // Normalizar o formato do horário
  const normalizedClosingTime = normalizeTime(rawClosingTime);

  // Converter o horário de encerramento para um objeto Date
  const closingDate = parse(normalizedClosingTime, 'HH:mm', now);

  // Verificar se o horário de encerramento já passou
  return isAfter(closingDate, now); // Retorna true se o horário de encerramento for maior que o horário atual
};

const normalizeTime = (time: string): string => {
  // Substituir "h" por ":00" se necessário
  return time.includes('h') ? time.replace('h', ':00') : time;
};



