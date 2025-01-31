"use server"

import { getCustomersFeedbackInfoService } from "@/app/services/google-sheets-feedback/getCustomersFeedbackInfoService";
import { IServiceResponseType } from "@/types/IServiceResponseType";

export const getCustomersFeedbackInfoAction = async (): Promise<IServiceResponseType> => {
    try {
        const googlApiKey = process.env.GOOGLE_API_KEY;
        const googleSheetId = process.env.GOOGLE_SHEETS_ID;

        if (!googlApiKey || !googleSheetId) {
            return { success: false, error: "Credenciais não encontradas" };
        }

        const result = await getCustomersFeedbackInfoService({googlApiKey, googleSheetId});

        if (!result.success) {
            return { success: false, error: result.error || "Erro desconhecido ao buscar feedbacks." };
        }

        return { success: true, data: result.data };
    } catch (error: any) {
        console.error("Erro no envio do e-mail:", error);
        return { success: false, error: error.message || "Erro desconhecido ao nuscar feedbacks." };
    }
};
