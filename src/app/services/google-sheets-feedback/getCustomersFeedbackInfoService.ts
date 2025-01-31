import { formattedDate } from "@/app/utils";
import { IServiceResponseType } from "@/types/IServiceResponseType";
import axios from "axios";

export type IFeedbackResponse = {
    dateFeedback: string;
    name: string;
    experience: string;
    rating: number;
    allowPublish: string;
};

export interface IGetCustomersFeedbackInfoService {
    googlApiKey: string;
    googleSheetId: string;
}

export const getCustomersFeedbackInfoService = async ({
    googlApiKey,
    googleSheetId
}: IGetCustomersFeedbackInfoService): Promise<IServiceResponseType> => {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${googleSheetId}/values/castelini-respostas-form-feedback-clientes?key=${googlApiKey}`;

    try {
        const response = await axios.get<{ values: string[][] }>(url);
        const data = response.data;
        const rows = data.values.slice(1); // Remove o cabeçalho

        const feedbacks: IFeedbackResponse[] = rows.map(row => ({
            dateFeedback: formattedDate(row[0]),
            name: row[1],
            experience: row[2],
            rating: Number(row[4]),
            allowPublish: row[5]
        }));

        return { success: true, data: feedbacks };
    } catch (error: any) {
         // Captura qualquer erro que ocorra no bloco try
         console.error("Erro no envio do email:", error);

         // Retorna um objeto de erro com mensagem
         return { success: false, error: error.message || "Erro desconhecido ao enviar o e-mail" };
    }
}