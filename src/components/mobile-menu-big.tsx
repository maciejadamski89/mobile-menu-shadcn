"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import MenuIcon from "./menu-icon";
import CloseIcon from "./close-icon";
import Link from "next/link";

type MobileMenuProps = {
    direction: "left" | "top" | "right" | "bottom";
    radius?: "sm" | "md" | "lg";
};

const radiusClasses = {
    left: { sm: "rounded-r-xl", md: "rounded-r-2xl", lg: "rounded-r-3xl" },
    right: { sm: "rounded-l-xl", md: "rounded-l-2xl", lg: "rounded-l-3xl" },
    top: { sm: "rounded-b-xl", md: "rounded-b-2xl", lg: "rounded-b-3xl" },
    bottom: { sm: "rounded-t-xl", md: "rounded-t-2xl", lg: "rounded-t-3xl" },
};

function MenuLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="-mx-3 block rounded-lg p-12 text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-center"
        >
            {children}
        </Link>
    );
}

export default function MobileMenuBig({ direction, radius }: MobileMenuProps) {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    return isDesktop ? (
        <div>Try to resize your screen to less then 768px</div>
    ) : (
        <div>
            <Drawer direction={direction}>
                <DrawerTrigger>
                    <MenuIcon />
                </DrawerTrigger>
                <DrawerContent
                    className={`bg-white ${radius ? `${radiusClasses[direction][radius]}` : "rounded-none border-2"}`}
                >
                    <DrawerHeader className="flex justify-between items-center border-b">
                        <DrawerTitle>Brand</DrawerTitle>
                        <DrawerClose>
                            <CloseIcon />
                        </DrawerClose>
                    </DrawerHeader>
                    <div className="p-4">
                        <MenuLink href="#">Home</MenuLink>
                        <MenuLink href="#">Features</MenuLink>
                        <MenuLink href="#">Marketplace</MenuLink>
                        <MenuLink href="#">Company</MenuLink>
                    </div>
                    <DrawerFooter className="border-t">
                        <MenuLink href="#">Log in</MenuLink>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
}
