import Container from "../Container"

export default function Footer() {
    const asides = [
        { title: 'Coluna 1', items: ['Item 1', 'Item 2', 'Item 3'] },
        { title: 'Coluna 2', items: ['Item 1', 'Item 2', 'Item 3'] },
        { title: 'Coluna 3', items: ['Item 1', 'Item 2', 'Item 3'] },
        { title: 'Coluna 4', items: ['Item 1', 'Item 2', 'Item 3'] },
    ]

    return (
        <footer className="bg-brand text-white">
            <Container>
                {asides && (
                    <div className="flex items-center justify-between py-4">
                        {asides.map((aside) => (
                            <aside className="px-3" key={aside.title}>
                                {aside.title}
                            </aside>
                        ))}
                    </div>
                )}
            </Container>
            <Container>
                <p>Teste</p>
            </Container>
        </footer>
    )
} 