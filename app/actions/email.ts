"use server";

import { Resend } from "resend";
import { z } from "zod";
import { EmailTemplate } from "@/app/_components/email-template";
import { errorLogger } from "@/lib/logger";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  name: z.string().min(2, "Name too short").max(50, "Name too long"),
  email: z.string().email("Invalid Email address"),
  subject: z.string().max(100).optional().default("No Subject"),
  message: z.string().min(5, "Message is too short").max(2000),
});

type Contact = z.infer<typeof ContactSchema>;

export async function sendContactEmail(formData: FormData) {
  const validatedFields = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success)
    return {
      success: false,
      error: validatedFields.error.flatten().fieldErrors + "",
    };

  const { name, email, subject, message }: Contact = validatedFields.data;

  try {
    // We don't need the data.id so we don't store it
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Swap with your custom domain later if you verify one
      to: ["mehranghari9876@gmail.com"],
      subject: `${subject} from ${name}`,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      errorLogger("Resend API Error", { error });
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    errorLogger("Contact email failed", { error: err });
    return { success: false, error: "Failed to send email" };
  }
}
