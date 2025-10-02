'use client'
import { BiUserCircle } from "react-icons/bi";
import * as React from "react";

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { DialogHeader } from "../ui/dialog";


export default function AuthButtons() {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <div className="max-w-[1200px] flex gap-0  px-3">
            {/* Botão de Login com ícone */}
            <button
                onClick={handleOpen}
                className="flex items-center gap-2 border border-white 
            text-white px-4 py-2 text-[10px]">
                <BiUserCircle className="w-6 h-6" />
                LOGIN
            </button>

            {/* Botão de Cadastrar */}
            <button className="bg-gray-200 text-gray-800 px-3 py-2
            text-[10px]">
                CADASTRE-SE
            </button>

            <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>


    );
}
