type EmailTemplateProps = {
  name: string;
  language: 'pt' | 'en';
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, language }: EmailTemplateProps) => {
  return(
    <div>
      {
        language && 'pt' ? (
          <div>
            <h1>Olá, {name}!</h1>
            <br />
            <p>
              Agradeço que tenha se interessado. Logo estarei entrando em contato.
              <br />
              Whatsapp: +55 92 993041762
            </p>
          </div>
        ) : (
          <div>
            <h1>Hello, {name}!</h1>
            <br />
            <p>
              Thank you for being interested. I{"'ll"} be in touch soon.
              <br />
              Whatsapp: +55 92 993041762
            </p>
          </div>
        )
      }
    </div>
  )
}
