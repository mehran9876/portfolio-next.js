import ContactMeField from "@/app/_components/contact-me-form";
import {
  ContactInformation,
  contactInformation,
} from "@/lib/data/contact-info";

export default function ContactMe() {
  return (
    <section
      id="contact"
      className="section mb-4 grid w-8/10 max-w-350 scroll-mt-24 items-center gap-12 pt-10 pb-24 text-sm sm:scroll-mt-10 sm:text-base md:w-9/10 md:grid-cols-2 md:pt-22 lg:items-stretch lg:gap-24"
    >
      <div className="">
        <h4 className="fancy-text mb-6 bg-linear-to-r text-4xl font-extrabold text-transparent sm:text-5xl">
          Contact Me
        </h4>
        <p className="mb-6">
          Use this form if you need to contact me, and I will respond to you as
          soon as possible.
        </p>
        <ContactMeField />
      </div>
      <ContactInfo />
    </section>
  );
}

function ContactInfo() {
  return (
    <div className="flex items-center justify-center rounded-2xl bg-slate-50 py-8 dark:bg-slate-900">
      <ul className="flex flex-col gap-6 py-4">
        {contactInformation.map((info) => (
          <ContactInfoCard key={info.id} info={info} />
        ))}
      </ul>
    </div>
  );
}

interface ContactInfoCardProps {
  info: ContactInformation;
}
function ContactInfoCard({
  info: { type, value, href, icon },
}: ContactInfoCardProps) {
  return (
    <li>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className="group"
      >
        <div className="flex flex-wrap items-center gap-2">
          <div className="bg-secondary group-hover:border-primary-own hover group-active:border-primary-own group-hover:text-primary-own group-active:text-primary-own aspect-square rounded-2xl border-2 border-slate-300 p-2 transition-colors duration-100 sm:p-3.5">
            {icon}
          </div>
          <div className="flex-1">
            <h5 className="text-sm sm:text-base">{type}:</h5>
            <p className="text-secondary-text group-hover:text-primary-own group-active:text-primary-own text-xs transition-colors duration-100 sm:text-sm">
              {value}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
}
