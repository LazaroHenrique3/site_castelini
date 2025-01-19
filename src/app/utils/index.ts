import * as Yup from 'yup'

import { SelectOption } from "@/components/input-select";
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

export const mapStoresToSelectOptions = (stores: IStoreType[]): SelectOption[] => {
  return stores.map((store) => ({
    value: store.number,
    label: `${store.city} - ${store.uf}`,
  }));
};

