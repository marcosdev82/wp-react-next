export default function NavMenu() {
    return (
        <nav>
            <div className="mx-auto px-4">
                <ul className="flex flex-wrap gap-6 py-4 text-gray-800 font-medium text-[12px] uppercase">
                    <li>
                        <a href="#sobre" className="hover:text-brand transition-colors">
                            Sobre a SBOT
                        </a>
                    </li>
                    <li>
                        <a href="#associados" className="hover:text-brand transition-colors">
                            Associados
                        </a>
                    </li>
                    <li>
                        <a href="#historia" className="hover:text-brand transition-colors">
                            História da ortopedia
                        </a>
                    </li>
                    <li>
                        <a href="#graduando" className="hover:text-brand transition-colors">
                            Graduando e residentes
                        </a>
                    </li>
                    <li>
                        <a href="#saude" className="hover:text-brand transition-colors">
                            A ortopedia e a saúde
                        </a>
                    </li>
                    <li>
                        <a href="#localize" className="hover:text-brand transition-colors">
                            Localize o ortopedista
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
