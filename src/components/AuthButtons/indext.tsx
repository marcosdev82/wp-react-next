'use client'
import * as React from "react";
import Modal from "../Modal";

export default function AuthButtons() {

    return (
        <div className="max-w-[1200px] flex gap-0  px-3">

            {/* Botão de Cadastrar */}
            <button
                className="bg-gray-200 text-gray-800 px-3 py-2 text-[10px]">
                CADASTRE-SE
            </button>

            <Modal />

        </div>
    );
}
