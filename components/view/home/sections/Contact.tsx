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
      className="min-h-screen border-t px-4 py-20 sm:px-6 md:px-16 lg:px-36 2xl:px-64"
      id="contact"
    >
      <div className="flex min-h-[calc(100vh-10rem)] flex-col items-stretch justify-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
        <BlurFade className="w-full lg:w-1/2">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Get in <Highlighter action="underline"> Touch</Highlighter>
            </h2>
            <p className="w-full text-muted-foreground lg:w-3/4">
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
                <p className="break-all">anandayudha777@gmail.com</p>
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

            <div className="bg-background relative mt-8 flex h-36 w-full flex-col items-center justify-center overflow-hidden rounded-lg border sm:h-48 lg:w-3/4">
              <span className="pointer-events-none z-10 text-center text-4xl font-semibold leading-none whitespace-pre-wrap sm:text-6xl lg:text-7xl">
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

        <BlurFade className="w-full lg:w-1/2">
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
