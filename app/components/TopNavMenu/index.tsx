import Link from "next/link";

export default function TopNavMenu() {
    const menuItems = [
        "ATUALIZA SBOT",
        "EVENTOS",
        "TEOT",
        "TEPOT",
        "CONGRESSO",
        "ANUIDADE",
        "LOJAS",
        "ABOT",
        "VALORIZAÇÃO PROFISSIONAL",
    ];

    return (
        <nav className="">
            <div className="max-w-[1200px] mx-auto px-3">
                <ul className="flex flex-wrap gap-4 py-2 text-white-800 font-medium text-[10px] uppercase">
                    {menuItems.map((item) => (
                        <li key={item}>
                            <Link
                                href="#"
                                className="hover:text-brand transition-colors"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
