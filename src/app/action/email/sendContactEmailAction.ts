"use server"

import { sendContactEmailService } from "@/app/services/email/sendContactEmailService";
import { brazilStates } from "@/data/StatesData";
import { IContactFormType } from "@/types/IContactFormDataType";
import { IServiceResponseType } from "@/types/IServiceResponseType";

export const sendContactEmailAction = async ({ city, email, name, message, phone, state }: IContactFormType): Promise<IServiceResponseType> => {
    try {
        const namedState = brazilStates.find((item) => item.id === state);

        if (!namedState) {
            return { success: false, error: "Estado não encontrado" };
        }

        const emailData = { city, email, name, message, phone, state: namedState.name };

        const result = await sendContactEmailService(emailData);

        if (!result.success) {
            return { success: false, error: result.error || "Erro desconhecido ao enviar o e-mail." };
        }

        return { success: true, data: result.data };
    } catch (error: any) {
        console.error("Erro no envio do e-mail:", error);
        return { success: false, error: error.message || "Erro desconhecido ao enviar o e-mail." };
    }
};
