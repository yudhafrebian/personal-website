"use client";
import * as React from "react";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import emailjs from '@emailjs/browser';
import { Button } from "../ui/button";
import { toast } from "sonner";

const ContactForm = () => {
    const form = React.useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      'service_dbus5e6', 
      'template_qfilrpv', 
      form.current, 
      'u_avWGO7O9LYxxRmw'
    )
    .then((result) => {
        console.log(result.text);
        toast("Your message has been sent.", {
            description: "I will reply within 24 hours."
        });
        form.current?.reset();
    }, (error) => {
        console.log(error.text);
        toast.error("Something went wrong. Please try again.");
    });
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="flex h-full flex-col">
      <FieldGroup className="flex h-full flex-col">
        <Field>
          <FieldLabel htmlFor="name">Fullname</FieldLabel>
          <Input id="name" name="name" placeholder="Your name" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="title">Subject</FieldLabel>
          <Input
            id="title"
            name="title"
            placeholder="What do you need help with"
            required
          />
        </Field>

        <Field className="flex-1">
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me about your project"
            className="h-full min-h-20"
          />
        </Field>
        <Field className="mt-auto">
            <Button type="submit" size={"xl"}>
                Submit
            </Button>
        </Field>
      </FieldGroup>

    </form>
  );
};

export default ContactForm;
