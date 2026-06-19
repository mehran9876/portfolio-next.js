import { LucideMail, MapPinHouse, Phone } from "lucide-react";
import { SiTelegram, SiWhatsapp } from "@icons-pack/react-simple-icons";
import { Route } from "next";

export type ContactInformation = {
  id: string;
  type: string;
  value: string;
  href: Route;
  icon: React.ReactElement;
};

export const contactInformation: ContactInformation[] = [
  {
    id: "tel",
    type: "Phone",
    href: "tel:+989196779737",
    value: "+989196779737",
    icon: <Phone />,
  },
  {
    id: "email",
    type: "Email",
    href: "email:mehranghari9876@gmail.com",
    value: "mehranghari9876@gmail.com",
    icon: <LucideMail />,
  },
  {
    id: "telegram",
    type: "Telegram",
    href: "https://t.me/MehranGhari9876",
    value: "@MehranGhari9876",
    icon: <SiTelegram />,
  },
  {
    id: "whatsapp",
    type: "WhatsApp",
    href: "https://wa.me/989196779737",
    value: "+989196779737",
    icon: <SiWhatsapp />,
  },
  {
    id: "city",
    type: "City",
    href: "https://www.google.com/maps/search/?api=1&query=Tehran&query_place_id=ChIJ2dzzH0kAjj8RvCRwVnxps_A",
    value: "Tehran",
    icon: <MapPinHouse />,
  },
];
