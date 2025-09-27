import { BiUserCircle } from "react-icons/bi";

export default function AuthButtons() {
    return (
        <div className="max-w-[1200px] flex gap-0  px-4">
            {/* Botão de Login com ícone */}
            <button className="flex items-center gap-2 border border-white 
            text-white px-4 py-2 text-[10px]">
                <BiUserCircle className="w-6 h-6" />
                LOGIN
            </button>

            {/* Botão de Cadastrar */}
            <button className="bg-gray-200 text-gray-800 px-3 py-2
             text-[10px]">
                CADASTRE-SE
            </button>
        </div>
    );
}
