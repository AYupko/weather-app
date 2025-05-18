import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendConfirmationEmail = async ({
  to,
  token,
}: {
  to: string;
  token: string;
}) => {
  const confirmationLink = `http://localhost:3000/api/confirm/${token}`;

  return resend.emails.send({
    from: "Weather App <onboarding@resend.dev>",
    to,
    subject: "Confirm your weather subscription",
    html: `
      <h1>Confirm your subscription</h1>
      <p>Click the link below to confirm:</p>
      <a href="${confirmationLink}">${confirmationLink}</a>
    `,
  });
};
