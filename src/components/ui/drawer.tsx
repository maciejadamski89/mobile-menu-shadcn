"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

const DrawerContext = React.createContext<{ direction?: "top" | "bottom" | "left" | "right" }>({});

const Drawer = ({
    shouldScaleBackground = true,
    ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root> & { direction?: "top" | "bottom" | "left" | "right" }) => (
    <DrawerContext.Provider value={{ direction: props.direction }}>
        <DrawerPrimitive.Root {...props} />
    </DrawerContext.Provider>
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

type OverlayType = "overlay" | "blur";

interface DrawerOverlayProps extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> {
    overlay?: OverlayType;
}

const DrawerOverlay = React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Overlay>, DrawerOverlayProps>(
    ({ className, overlay = "overlay", ...props }, ref) => (
        <DrawerPrimitive.Overlay
            ref={ref}
            className={cn(
                "fixed inset-0 z-50",
                {
                    "bg-black/80": overlay === "overlay",
                    "backdrop-blur-sm": overlay === "blur",
                },
                className
            )}
            {...props}
        />
    )
);

DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

interface DrawerContentProps extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> {
    overlay?: OverlayType;
}

const DrawerContent = React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Content>, DrawerContentProps>(
    ({ className, children, overlay = "overlay", ...props }, ref) => {
        const { direction } = React.useContext(DrawerContext);
        return (
            <DrawerPortal>
                <DrawerOverlay overlay={overlay} />
                <DrawerPrimitive.Content
                    ref={ref}
                    className={cn(
                        "fixed z-50 flex h-auto flex-col bg-background",
                        overlay === "blur" && "border",
                        (!direction || direction === "bottom") && "inset-x-0 bottom-0 mt-24",
                        direction === "right" && "top-0 right-0 w-screen max-w-80 h-full",
                        direction === "left" && "top-0 left-0 w-screen max-w-80 h-full",
                        direction === "top" && "inset-x-0 top-0 mb-24",
                        className
                    )}
                    {...props}
                >
                    {!direction ||
                        (direction === "bottom" && (
                            <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-neutral-100" />
                        ))}
                    {children}
                </DrawerPrimitive.Content>
            </DrawerPortal>
        );
    }
);
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
    <DrawerPrimitive.Title
        ref={ref}
        className={cn("text-lg font-semibold leading-none tracking-tight", className)}
        {...props}
    />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
    <DrawerPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
    Drawer,
    DrawerPortal,
    DrawerOverlay,
    DrawerTrigger,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerTitle,
    DrawerDescription,
};
