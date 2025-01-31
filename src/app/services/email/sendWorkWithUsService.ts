import { Resend } from 'resend';
import { EmailContactTemplate } from "@/components/email/email-contact-template";
import { IServiceResponseType } from '@/types/IServiceResponseType';
import { IWorkWithUsFormType, IWorkWithUsFormTypeWithBase64 } from '@/types/IWorkWithUsFormDataType';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendWorkWithUsEmailService = async ({ city, email, name, message, phone, state, curriculum, curriculumBase64 }:  Omit<IWorkWithUsFormTypeWithBase64, 'store'>
): Promise<IServiceResponseType> => {
    try {
        /* Verificando se foi enviado */
        if (!curriculum) {
            throw new Error('Currpiculo não anexado');
        }

        // Enviando o e-mail através do serviço Resend
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['site.castelini@gmail.com'],
            subject: 'Currículo',
            react: EmailContactTemplate({ city, email, name, message, phone, state }) as React.ReactNode,
            attachments: [
                {
                    filename: curriculum.name,         // Nome do arquivo do currículo
                    content: curriculumBase64,        // Conteúdo do arquivo em base64
                    contentType: curriculum.type,      // Tipo MIME do arquivo
                },
            ],
        });

        // Verificando se houve erro no envio
        if (error) {
            throw new Error(`Erro ao enviar email: ${error}`);
        }

        // Se o envio for bem-sucedido, loga o resultado
        return { success: true, data };
    } catch (error: any) {
        // Captura qualquer erro que ocorra no bloco try
        console.error("Erro no envio do email:", error);

        // Retorna um objeto de erro com mensagem
        return { success: false, error: error.message || "Erro desconhecido ao enviar o e-mail" };
    }
};
