import { ReactNode } from "react"
import Container from "../Container"

export default function EntryTitle({ children }: { children: ReactNode }) {
    return (
        <header className="bg-brand">
            <Container>
                <div className="flex items-center justify-between h-20 text-white px-3">{children}</div>
            </Container>
        </header>
    )
}