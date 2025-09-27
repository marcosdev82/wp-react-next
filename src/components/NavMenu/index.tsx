import Link from "next/link";

export default function NavMenu() {
    const menuItems = [
        { label: "Sobre a SBOT", href: "sobre" },
        { label: "Associados", href: "associados" },
        { label: "História da ortopedia", href: "historia" },
        { label: "Graduando e residentes", href: "graduando" },
        { label: "A ortopedia e a saúde", href: "saude" },
        { label: "Localize o ortopedista", href: "localize" },
    ];

    return (
        <nav>
            <div className="mx-auto px-4">
                <ul className="flex flex-wrap gap-6 py-4 text-gray-800 font-medium text-[12px] uppercase">
                    {menuItems.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className="hover:text-brand transition-colors">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
