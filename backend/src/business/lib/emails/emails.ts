import { InternalServerError } from "../error";

const RESEND_API_URL = "https://api.resend.com/emails";

export const sendConfirmationEmail = async ({
  to,
  token,
}: {
  to: string;
  token: string;
}) => {
  const confirmationLink = `http://localhost:3000/api/confirm/${token}`;

  const res = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Weather App <onboarding@resend.dev>",
      to,
      subject: "Confirm your weather subscription",
      html: `
        <h1>Confirm your subscription</h1>
        <p>Click the link below to confirm:</p>
        <a href="${confirmationLink}">${confirmationLink}</a>
      `,
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new InternalServerError(`Failed to send email: ${error}`);
  }
};
