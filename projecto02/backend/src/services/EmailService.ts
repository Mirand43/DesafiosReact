interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}

interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage;
}

interface IEmailService {
    sendMail(request: IMessageDTO): void;
}

/*Data Transfer Object DTO - conceito usado pela métodologia DDD*/

class EmailService implements IEmailService {
    sendMail({ to, message}: IMessageDTO){
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
}

export default EmailService;