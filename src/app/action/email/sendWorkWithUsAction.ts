"use server"

import { sendWorkWithUsEmailService } from "@/app/services/email/sendWorkWithUsService";
import { brazilStates } from "@/data/StatesData";
import { IServiceResponseType } from "@/types/IServiceResponseType";
import { IWorkWithUsFormTypeWithBase64 } from "@/types/IWorkWithUsFormDataType";

export const sendWorkWithUsEmailAction = async ({ city, email, name, message, phone, state, curriculum, curriculumBase64 }: IWorkWithUsFormTypeWithBase64): Promise<IServiceResponseType> => {
    try {
        const namedState = brazilStates.find((item) => item.id === state);

        if (!namedState) {
            return { success: false, error: "Estado não encontrado." };
        }

        if (!curriculum) {
            return { success: false, error: "Currículo inválido." };
        }

        // Garante que estamos removendo apenas o prefixo "data:{mime};base64,"
        const base64WithoutPrefix = curriculumBase64.includes(',') ? curriculumBase64.split(',')[1] : curriculumBase64;

        // Ajustando o tipo MIME corretamente                   // Tipo de imagem (image/png, image/jpeg)
        const contentType = curriculum.type.startsWith('image/') ? curriculum.type : 'application/pdf'; // Caso contrário, assume que é PDF

        const emailData = { city, email, name, message, phone, state: namedState.name, curriculum, contentType, curriculumBase64: base64WithoutPrefix };

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
