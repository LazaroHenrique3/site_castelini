"use server"

import { sendWorkWithUsEmailService } from "@/app/services/email/sendWorkWithUsService";
import { brazilStates } from "@/data/StatesData";
import { IServiceResponseType } from "@/types/IServiceResponseType";
import { IWorkWithUsFormType, IWorkWithUsFormTypeWithBase64 } from "@/types/IWorkWithUsFormDataType";

export const sendWorkWithUsEmailAction = async ({ city, email, name, message, phone, state, curriculum, curriculumBase64}: IWorkWithUsFormTypeWithBase64): Promise<IServiceResponseType> => {
    try {
        const namedState = brazilStates.find((item) => item.id === state);

        if (!namedState) {
            return { success: false, error: "Estado não encontrado" };
        }

        const emailData = { city, email, name, message, phone, state: namedState.name, curriculum, curriculumBase64 };

        const result = await sendWorkWithUsEmailService(emailData);

        if (!result.success) {
            return { success: false, error: result.error || "Erro desconhecido ao enviar o e-mail." };
        }

        return { success: true, data: result.data };
    } catch (error: any) {
        console.error("Erro no envio do e-mail:", error);
        return { success: false, error: error.message || "Erro desconhecido ao enviar o e-mail." };
    }
};
