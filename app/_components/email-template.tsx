interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div>
      <h3>New Contact Form Submission</h3>
      <p>
        <strong>Name:</strong> ${name}
      </p>
      <p>
        <strong>Email:</strong> ${email}
      </p>
      <p>
        <strong>Message:</strong>
      </p>
      <p style={{ whiteSpace: "pre-wrap" }}>${message}</p>
    </div>
  );
}
