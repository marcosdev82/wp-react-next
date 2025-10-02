"use client"
import { BiUserCircle } from "react-icons/bi"
import * as React from "react"

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@radix-ui/react-dialog"
import { DialogHeader } from "@/components/ui/dialog"

export default function AuthButtons() {
    const [open, setOpen] = React.useState(false)
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [rememberMe, setRememberMe] = React.useState(false)

    const handleOpen = () => setOpen(!open)

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Login attempt:", { email, password, rememberMe })
        // Add your login logic here
    }

    return (
        <div className="max-w-[1200px] flex gap-0  px-3">
            <button
                onClick={handleOpen}
                className="flex items-center gap-2 border border-white 
            text-white px-4 py-2 text-[10px]"
            >
                <BiUserCircle className="w-6 h-6" />
                LOGIN
            </button>

            <button
                className="bg-gray-200 text-gray-800 px-3 py-2
            text-[10px]"
            >
                CADASTRE-SE
            </button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

                    <div className="relative z-50 w-[90%] max-w-md bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-semibold text-gray-900 text-center">Bem-vindo de volta</DialogTitle>
                            <DialogDescription className="text-sm text-gray-600 text-center">
                                Entre com suas credenciais para acessar sua conta
                            </DialogDescription>
                        </DialogHeader>

                        <form onSubmit={handleLogin} className="mt-6 space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="seu@email.com"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                    Senha
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <span className="text-sm text-gray-700">Lembrar-me</span>
                                </label>
                                <button type="button" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                                    Esqueceu a senha?
                                </button>
                            </div>

                            <div className="flex gap-3 pt-2">
                                <DialogClose asChild>
                                    <button
                                        type="button"
                                        className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition font-medium"
                                    >
                                        Cancelar
                                    </button>
                                </DialogClose>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                                >
                                    Entrar
                                </button>
                            </div>
                        </form>

                        <div className="mt-4 text-center">
                            <p className="text-sm text-gray-600">
                                Não tem uma conta?{" "}
                                <button className="text-blue-600 hover:text-blue-700 font-medium">Cadastre-se</button>
                            </p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
