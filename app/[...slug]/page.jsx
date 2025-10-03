// app/[slug]/page.js
// import { Container } from "lucide-react";
import { notFound } from "next/navigation";
import EntryTitle from "../components/EntryTitle";
import Container from "../components/Container"

// Simulando busca do banco / CMS
async function getPage(slug) {
    const pages = {
        "sobre": { title: "Sobre nós", content: "Texto da página sobre..." },
        "associados": { title: "Associados", content: "Texto da página associados..." }
    };

    return pages[slug] || null;
}

export default async function Page({ params }) {
    const page = await getPage(params.slug);

    if (!page) return notFound();

    return (
        <article>
            <EntryTitle>{page.title}</EntryTitle>
            <Container>
                <div className="content py-6 px-3">
                    {page.content}
                </div>
            </Container>
        </article>
    );
}
