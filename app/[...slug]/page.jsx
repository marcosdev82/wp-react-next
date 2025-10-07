import { notFound } from "next/navigation";
import EntryTitle from "../components/EntryTitle";
import Container from "../components/Container";
import BreadcrumbDynamic from "../components/BreadcrumbDynamic";

// Simulando busca no CMS
async function getPage(slugArray) {
    const slugPath = slugArray.join("/");

    const pages = {
        "sobre": { title: "Sobre nós", content: "Texto da página sobre..." },
        "associados": { title: "Associados", content: "Texto da página associados..." },
        "associados/beneficios": { title: "Benefícios", content: "Página filha de associados" },
        "associados/beneficios/descontos": { title: "Descontos", content: "Página neta de associados" },
    };

    return pages[slugPath] || null;
    }

    export default async function Page({ params }) {
    const { slug = [] } = params;
    const page = await getPage(slug);

    if (!page) return notFound();

    return (
        <article>
        <EntryTitle>
            <h1>{page.title}</h1>
            {/* Breadcrumb é um componente Client */}
            <BreadcrumbDynamic slug={slug} />
        </EntryTitle>

        <Container>
            <div className="content py-6 px-3">
            {page.content}
            </div>
        </Container>
        </article>
    );
}
