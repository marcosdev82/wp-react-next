import Container from "../Container"

export default function Footer() {
    return (
        <footer className="bg-brand text-white">
            <Container>
                <div className="flex items-center justify-between py-4">
                    <aside className="px-3">
                        Coluna 1
                    </aside>
                    <aside className="px-3">
                        Coluna 2
                    </aside>
                    <aside className="px-3">
                        Coluna 3
                    </aside>
                    <aside className="px-3">
                        Coluna 4
                    </aside>
                    <aside className="px-3">
                        Coluna 5
                    </aside>
                </div>
            </Container>
        </footer>
    )
} 