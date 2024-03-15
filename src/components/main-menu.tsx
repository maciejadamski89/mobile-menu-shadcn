"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Menu, MenuIcon } from "lucide-react";
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

export default function MainMenu() {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    return isDesktop ? (
        <div>desktop</div>
    ) : (
        <div>
            <Drawer direction="top">
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
