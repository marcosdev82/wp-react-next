'use client'
import Image from "next/image";
import Link from "next/link";

import AuthButtons from "../AuthButtons/indext";
import NavMenu from "../NavMenu";
import TopNavMenu from "../TopNavMenu";
import Container from "../Container";
import OffCanvasMenu from "../OffCanvasMenu";
import { useEffect, useState } from "react";

export default function Header() {

    const [top, setTop] = useState(true);

    useEffect(() => {
        const scrollHandler = () => {
            setTop(window.scrollY <= 40);
        };

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    return (
        <header className={`w-full shadow-sm z-10  ${!top ? `fixedTop` : 'relative'}`}>
            <div className={`bg-brand text-white p-1 ${!top ? `hidden` : 'block'}`}>
                <Container>
                    <div className="flex justify-between items-center">
                        <TopNavMenu />
                        <div className="max-w-[1200px]">
                            <AuthButtons />
                        </div>
                    </div>
                </Container>
            </div>

            <div className="w-full">
                <Container>
                    <div className="h-25 flex justify-between items-center px-3">
                        <Link href="/">
                            <Image
                                src="/logo-sbot.png" // <-- use o path direto da pasta public
                                alt="Logotipo SBOT"
                                width={145}
                                height={57}
                            />
                        </Link>
                        <NavMenu />
                        <OffCanvasMenu />
                    </div>
                </Container>
            </div>

        </header >
    );
}
