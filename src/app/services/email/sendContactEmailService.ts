import { Resend } from 'resend';
import { EmailContactTemplate } from "@/components/email/email-contact-template";
import { IContactFormType } from "@/types/IContactFormDataType";
import { IServiceResponseType } from '@/types/IServiceResponseType';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmailService = async ({ city, email, name, message, phone, state }: Omit<IContactFormType, 'store'>): Promise<IServiceResponseType> => {
    try {
        // Enviando o e-mail através do serviço Resend
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['site.castelini@gmail.com'],
            subject: 'Contato',
            react: EmailContactTemplate({ city, email, name, message, phone, state }) as React.ReactNode,
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
