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
};

export default function MobileMenu({ direction }: MobileMenuProps) {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    return isDesktop ? (
        <div>Try to resize your screen to less then 768px</div>
    ) : (
        <div>
            <Drawer direction={direction}>
                <DrawerTrigger>
                    <MenuIcon />
                </DrawerTrigger>
                <DrawerContent className="bg-white">
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
