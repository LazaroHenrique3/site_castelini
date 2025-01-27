import { InputSelect, SelectOption } from '@/components/input-select';
import { mapCitiesStoreToSelectOptions} from '@/app/utils';
import { storeStateData } from '@/data/StoreStateData';
import { InputCep } from '@/components/input-cep';
import { storesData } from '@/data/StoresData';

const filterType: SelectOption[] = [
    { value: 'city/state', label: 'CIDADE/ESTADO' },
    { value: 'cep', label: 'CEP' },
    { value: 'all', label: 'TODAS LOJAS' },
];

interface IInputFilter {
    handleChangeFilter: (selectedFilter: string) => void,
    handleChangeCep: (selectedCep: string) => void,
    handleChangeCity: (selectedCity: string) => void,
    handleChangeUf: (selectedUf: string) => void,

    isLoading: boolean,
    selectedFilter: string,
    selectedUf: string,
    selectedCity: string,
    selectedCep: string
}

export const InputFilter: React.FC<IInputFilter> = ({ 
    handleChangeFilter, 
    handleChangeCep, 
    handleChangeCity, 
    handleChangeUf,
    isLoading,
    selectedFilter,
    selectedUf,
    selectedCity,
    selectedCep
}) => {
    return (
        <div className='flex flex-col'>
            <h3 className="text-xl md:text-2xl font-bold text-primary-gray mb-4 uppercase">
                Conheça nossas lojas
            </h3>

            <div className='w-full grid grid-cols-6 lg:grid-cols-9 gap-6'>
                <div className="flex flex-col col-span-6 md:col-span-2 lg:col-span-3">
                    <InputSelect
                        name="filter"
                        id="filter"
                        value={selectedFilter}
                        options={filterType}
                        onChange={(event) => handleChangeFilter(event.target.value)}
                        placeholder="Filtrar por"
                        disabled={isLoading}
                    />
                </div>

                {selectedFilter === 'city/state' && (
                    <>
                        <div className="flex flex-col col-span-6 md:col-span-2 lg:col-span-3">
                            <InputSelect
                                name="state"
                                id="state"
                                options={storeStateData}
                                placeholder="Selecione o Estado"
                                onChange={(event) => handleChangeUf(event.target.value)}
                                value={selectedUf}
                                disabled={isLoading}
                            />
                        </div>

                        <div className="flex flex-col col-span-6 md:col-span-2 lg:col-span-3">
                            <InputSelect
                                name="city"
                                id="city"
                                value={selectedCity}
                                options={mapCitiesStoreToSelectOptions(storesData, selectedUf)}
                                onChange={(event) => handleChangeCity(event.target.value)}
                                placeholder="Selecione a Cidade"
                                disabled={isLoading}
                            />
                        </div>
                    </>
                )}

                {selectedFilter === 'cep' && (
                    <div className="flex flex-col col-span-6 md:col-span-3 lg:col-span-3">
                        <InputCep
                            name="cep"
                            id="cep"
                            value={selectedCep}
                            onChange={(event) => handleChangeCep(event.target.value)}
                            placeholder="Digite o CEP"
                            disabled={isLoading}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

