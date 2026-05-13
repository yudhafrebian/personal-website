import ContactForm from "@/components/form/ContactForm";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { Highlighter } from "@/components/ui/highlighter";
import { Particles } from "@/components/ui/particles";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      className="py-10 px-4 md:py-20 md:px-36 2xl:px-64 2xl:py-20 h-screen border-t"
      id="contact"
    >
      <div className="flex items-center justify-between gap-20 h-full">
        <BlurFade className="w-1/2">
          <div className="flex flex-col gap-2">
            <h2 className="text-5xl font-semibold">
              Get in <Highlighter action="underline"> Touch</Highlighter>
            </h2>
            <p className="w-3/4">
              Have a question, a project idea, or just want to say hello?
              I&apos;d love to hear from you!
            </p>
            <Separator className="my-4" />
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-light text-muted-foreground">
                  Email
                </p>
                <p>anandayudha777@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-light text-muted-foreground">
                  Phone
                </p>
                <p>+62 896-3766-3755</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-primary p-2 rounded-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-light text-muted-foreground">
                  Location
                </p>
                <p>Surabaya, Indonesia</p>
              </div>
            </div>

            <div className="bg-background relative flex h-48 w-3/4 flex-col items-center justify-center overflow-hidden rounded-lg border mt-12">
              <span className="pointer-events-none z-10 text-center text-7xl leading-none font-semibold whitespace-pre-wrap">
                Let&apos;s Talk
              </span>
              <Particles
                className="absolute inset-0 z-0"
                quantity={100}
                ease={80}
                refresh
              />
            </div>
          </div>
        </BlurFade>

        <BlurFade className="w-1/2">
          <Card>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </BlurFade>
      </div>
    </section>
  );
};

export default ContactSection;
