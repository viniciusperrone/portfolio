import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { FeedbackEmail } from '@/components/email/Feedback';
import { LeadEmail } from '@/components/email/Lead';

const resend = new Resend(process.env.RESEND_API);

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message, language } = await req.body;

  try {
    await resend.emails.send({
      from: 'Nova Lead <onboarding@resend.dev>',
      to: ['perronevinicius2018@gmail.com'],
      subject: `Lead | ${name}`,
      react: LeadEmail({ 
        name, 
        email, 
        message, 
        language 
      })
    });

    await resend.emails.send({
      from: 'Feedback <onboarding@resend.dev>',
      to: [email],
      subject: `Feedback | ${name}`,
      text: '',
      react: FeedbackEmail({ name, language })
    });

    res.status(200).json({ message: 'Email successfully sent!' });
  } catch (error) {

    res.json({ error });
  }
};
