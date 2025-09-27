import Image from "next/image";
import Link from "next/link";

import AuthButtons from "../AuthButtons/indext";
import NavMenu from "../NavMenu";
import TopNavMenu from "../TopNavMenu";

export default function Header() {
    return (
        <header className="shadow-sm">
            <div className="bg-brand text-white p-1">
                <div className="max-w-[1200px] h-8 mx-auto w-full flex justify-between items-center">
                    <TopNavMenu />
                    <div className="max-w-[1200px]">
                        <AuthButtons />
                    </div>
                </div>
            </div>

            <div className="bg-white w-full">
                <div className="max-w-[1200px] mx-auto w-full h-25 flex justify-between items-center">
                    <Link href="/">
                        <Image
                            src="/logo-sbot.png" // <-- use o path direto da pasta public
                            alt="Logotipo SBOT"
                            width={145}
                            height={57}
                        />
                    </Link>
                    <NavMenu />
                </div>
            </div>
        </header>
    );
}
