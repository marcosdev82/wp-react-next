import Image from "next/image";
import Container from "../Container";
import iconCalendar from "@/public/calendar.svg";
import iconCredCard from "@/public/credit-card.svg"; 
import iconWebinar from "@/public/webinar.svg"; 
import iconSearchProfessional from "@/public/search-professional.svg"; 

const link = "https://localhost:3000/";

export default function LinksRapidos() {
  const linksRapidos = [
    { id: 1, title: "Eventos", Icon: iconCalendar, url: link, description: "teste 1" },
    { id: 2, title: "Anuidade", Icon: iconCredCard, url: link, description: "teste 2" },
    { id: 4, title: "Atualiza SBOT", Icon: iconWebinar, url: link, description: "teste 4" },
    { id: 3, title: "Localizador profissional", Icon: iconSearchProfessional, url: link, description: "teste 3" },
    // { id: 5, title: "Eventos", Icon: iconCalendar, url: link, description: "teste 5" },
    // { id: 6, title: "Eventos", Icon: iconCalendar, url: link, description: "teste 6" },
    // { id: 7, title: "Eventos", Icon: iconCalendar, url: link, description: "teste 7" },
  ];

  return (
    <section className="flex items-center justify-center">
      <Container>
        {linksRapidos.length > 0 && (
          <ul className="flex flex-row space-y-6 gap-3 py-2">
            {linksRapidos.map((item) => (
              <li
                key={item.id}
                className="w-full p-4 text-white text-center bg-brand"
              >
                <a href={item.url} className="flex flex-col items-center gap-2">
                  <Image
                    src={item.Icon}
                    alt={item.title}
                    width={55}
                    height={55}
                    className="hover:scale-110 transition-transform duration-200"
                  />
                  <span className="text-sm font-medium text-white-700">
                    {item.title}
                  </span>
                  <p className="text-xs text-white-500">{item.description}</p>
                </a>
              </li>
            ))} 
          </ul>
        )}
      </Container>
    </section>
  );
}
