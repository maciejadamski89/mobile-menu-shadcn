"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import { MenuIcon } from "lucide-react";
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
import { Button } from "@/components/ui/button";

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

export default function MobileMenu({ direction, radius }: MobileMenuProps) {
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
                    className={`bg-white ${radius ? `${radiusClasses[direction][radius]}` : "rounded-none"}`}
                >
                    <DrawerHeader>
                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                        <DrawerDescription>This action cannot be undone.</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
}
