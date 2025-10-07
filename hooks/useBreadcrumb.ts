"use client";

import { useMemo } from "react";

/**
 * Hook que gera os itens de breadcrumb com base no slug.
 * @param {string[]} slugArray - Array de segmentos da URL (ex: ["associados", "beneficios"])
 * @returns {Array<{ name: string, href: string }>} Lista de itens do breadcrumb.
 */
export function useBreadcrumb(slugArray: string[] = []) {
    const breadcrumbItems = useMemo(() => {
        return slugArray.map((part, index) => ({
        name: part.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()), 
        href: "/" + slugArray.slice(0, index + 1).join("/"),
        }));
    }, [slugArray]);

    return breadcrumbItems;
}
