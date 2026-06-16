"use client";

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/app/_components/ui/field";
import { Input } from "@/app/_components/ui/input";
import { Textarea } from "@/app/_components/ui/textarea";
import { Button } from "@/app/_components/ui/button";
import { useRef, useState } from "react";
import { sendContactEmail } from "@/app/actions/email";
import { toast } from "sonner";

export default function ContactMeField() {
  const [isPending, setIsPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmitForm(formData: FormData) {
    setIsPending(true);

    const result = await sendContactEmail(formData);
    setIsPending(false);

    if (!result.success) {
      toast.error(result.error || "Failed to send message");
    } else {
      toast.success("Message sent successfully!");
      formRef.current?.reset();
    }
  }

  return (
    <form ref={formRef} action={handleSubmitForm}>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel
              className="text-secondary-text text-xs sm:text-sm"
              htmlFor="name"
            >
              Name
            </FieldLabel>
            <Input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              maxLength={30}
              placeholder="Full name"
              required
            />
          </Field>
          <Field>
            <FieldLabel className="text-secondary-text" htmlFor="email">
              Email
            </FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={60}
              placeholder="Email"
              required
            />
          </Field>
          <Field>
            <FieldLabel className="text-secondary-text" htmlFor="subject">
              Subject
            </FieldLabel>
            <Input
              id="subject"
              name="subject"
              type="text"
              maxLength={50}
              placeholder="Subject"
            />
          </Field>
          <Field>
            <FieldLabel className="text-secondary-text" htmlFor="message">
              Message
            </FieldLabel>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Type your message here"
              required
            />
          </Field>
          <Field>
            <Button
              className="bg-blue-600 text-sky-50 hover:cursor-pointer hover:bg-blue-500 dark:bg-sky-400 dark:text-slate-800 dark:hover:bg-sky-500"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Sending..." : "Send Message"}
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
