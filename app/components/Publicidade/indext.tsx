'use client'

import Image from "next/image"
import Link from "next/link"
import Container from "../Container"

export default function Publicidade() {
    return (
        <section className="flex items-center justify-center h-60 px-3">
            <Container>
                <h1>Conteúdos Patrocinados</h1>
                <Link href="/">
                    <Image
                        src="/Banner-portal-SBOT-600x197.jpg" // <-- use o path direto da pasta public
                        alt="Conteúdos Patrocinados"
                        width={600}
                        height={197}
                    />
                </Link>
            </Container>
        </section>
    )
}