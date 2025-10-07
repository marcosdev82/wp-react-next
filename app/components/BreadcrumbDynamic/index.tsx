"use client";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useBreadcrumb } from "@/hooks/useBreadcrumb";

interface BreadcrumbDynamicProps {
    slug: string;
}

export default function BreadcrumbDynamic({ slug }: BreadcrumbDynamicProps) {

    const breadcrumbItems = useBreadcrumb(slug);

    return (
        <Breadcrumb>
            <BreadcrumbList className="text-white">
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>

                {breadcrumbItems.map((item, index) => (
                    <span key={index} className="flex items-center">
                        <BreadcrumbSeparator />
                        {index < breadcrumbItems.length - 1 ? (
                            <BreadcrumbItem>
                                <BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
                            </BreadcrumbItem>
                        ) : (
                            <BreadcrumbItem>
                                <BreadcrumbPage>{item.name}</BreadcrumbPage>
                            </BreadcrumbItem>
                        )}
                    </span>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
