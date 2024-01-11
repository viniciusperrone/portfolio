import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API);

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = await req.body;

  try {
    const htmlTemplate = `
      <p>Email: ${email}</p><br><p>Message: ${message}</p>
    `;

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['perronevinicius2018@gmail.com'],
      subject: `Lead | ${name}`,
      html: htmlTemplate
    });

    res.status(200).json({ message: 'Email successfully sent!' });
  } catch (error) {

    res.json({ error });
  }
};
