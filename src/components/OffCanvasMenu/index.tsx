'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export default function OffCanvasMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { label: "Sobre a SBOT", href: "sobre" },
        { label: "Associados", href: "associados" },
        { label: "História da ortopedia", href: "historia" },
        { label: "Graduando e residentes", href: "graduando" },
        { label: "A ortopedia e a saúde", href: "saude" },
        { label: "Localize o ortopedista", href: "localize" },
    ];

    return (
        <div className="block md:hidden"> {/* Exibe apenas em telas pequenas */}
            <button
                onClick={toggleMenu}
                className="text-2xl p-2 focus:outline-none text-brand"
            >
                ☰
            </button>
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <button
                    onClick={toggleMenu}
                    className="text-3xl p-4 focus:outline-none"
                >
                    ×
                </button>
                <nav className="mt-8">
                    <ul className="space-y-4">
                        {menuItems.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="block px-4 py-2 hover:bg-gray-700">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50"
                    onClick={toggleMenu}
                />
            )}
        </div>
    );
}