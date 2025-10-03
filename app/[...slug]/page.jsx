// app/[...slug]/page.js
import { notFound } from "next/navigation";
import EntryTitle from "../components/EntryTitle";
import Container from "../components/Container";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// Simulando busca no "CMS"
async function getPage(slugArray) {
    const slugPath = slugArray.join("/");

    // https://sbot.org.br/wp-json/wp/v2/pages

    const pages = {
        "sobre": { title: "Sobre nós", content: "Texto da página sobre..." },
        "associados": { title: "Associados", content: "Texto da página associados..." },
        "associados/beneficios": { title: "Benefícios", content: "Página filha de associados" },
        "associados/beneficios/descontos": { title: "Descontos", content: "Página neta de associados" },
    };

    return pages[slugPath] || null;
}

export default async function Page({ params }) {
    const { slug = [] } = params; // slug vira array
    const page = await getPage(slug);

    if (!page) return notFound();

    return (
        <article>
            <EntryTitle>
                <h1>{page.title}</h1> 
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </EntryTitle>
            <Container>
                <div className="content py-6 px-3">
                    {page.content}
                </div>
                <small className="block mt-4 text-gray-500">
                    Caminho atual: /{slug.join("/")}
                </small>
            </Container>
        </article>
    );
}
