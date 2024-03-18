import MobileMenuBackDropBlur from "@/components/mobile-menu-backdrop-blur";
import MobileMenuBig from "@/components/mobile-menu-big";
import MobileMenuClassic from "@/components/mobile-menu-classic";
import MobileMenuCore from "@/components/mobile-menu-core";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-16 max-w-xl mx-auto gap-y-4">
            <div className="w-full">
                <h1 className="font-bold text-2xl mb-2">Mobile Menu Snippets</h1>
                <p>
                    This project showcases various mobile menu snippets built using the shadcn drawer component. The
                    drawer component can be configured to slide out from different directions, providing a versatile
                    solution for mobile navigation. The table below lists the different menu directions along with a
                    corresponding icon. Click on an icon to see the menu in action.
                </p>
            </div>
            <div className="w-full mt-4">
                <h2 className="text-xl font-bold">Direction</h2>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Right</TableCell>
                            <TableCell>
                                <MobileMenuCore direction="right" />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Left</TableCell>
                            <TableCell>
                                <MobileMenuCore direction="left" />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Top</TableCell>
                            <TableCell>
                                <MobileMenuCore direction="top" />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Bottom</TableCell>
                            <TableCell>
                                <MobileMenuCore direction="bottom" />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div className="w-full mt-4">
                <h2 className="text-xl font-bold">Radius</h2>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">none</TableCell>
                            <TableCell>
                                <MobileMenuCore direction="right" />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">sm</TableCell>
                            <TableCell>
                                <MobileMenuCore direction="right" radius="sm" />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">md</TableCell>
                            <TableCell>
                                <MobileMenuCore direction="right" radius="md" />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">lg</TableCell>
                            <TableCell>
                                <MobileMenuCore direction="right" radius="lg" />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div className="w-full mt-4">
                <h2 className="text-xl font-semibold">Icon</h2>
                <p className="text-base font-normal mt-2">
                    The menu icon is represented by the <code className="font-semibold bg-gray-200">MenuIcon</code>{" "}
                    component. This component can be replaced with any other SVG-JSX icon to change the appearance of
                    the menu icon. By default{" "}
                    <a href="https://heroicons.com/" className="underline">
                        Heroicons
                    </a>{" "}
                    is used to render the menu icon but it can be easly replaced by custom SVG. Check{" "}
                    <code className="font-semibold bg-gray-200">MenuIcon</code> component implementation. The{" "}
                    <code className="font-semibold bg-gray-200">MenuIcon</code> component is wrapped by a{" "}
                    <code className="font-semibold bg-gray-200">ClickableArea</code> component, which increases the
                    clickable area around the icon, making it easier for users to interact with the menu based on{" "}
                    <a
                        href="https://m3.material.io/foundations/accessible-design/accessibility-basics"
                        className="underline"
                    >
                        Material Design v3 guide.
                    </a>
                </p>
            </div>
            <div className="w-full mt-4">
                <h2 className="text-xl font-semibold">Overlay</h2>
                <p className="text-base font-normal mt-2">
                    The <code className="font-semibold bg-gray-200">overlay</code> prop can be used to apply different
                    overlay effects to the drawer. It accepts two values:{" "}
                    <code className="font-semibold bg-gray-200">overlay</code> and{" "}
                    <code className="font-semibold bg-gray-200">blur</code>. When{" "}
                    <code className="font-semibold bg-gray-200">overlay</code> is used, a semi-transparent black overlay
                    is applied to the drawer. When <code className="font-semibold bg-gray-200">blur</code> is used, a
                    blur effect is applied to the drawer, and a border is added to the drawer.
                </p>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">classic</TableCell>
                            <TableCell>
                                <MobileMenuClassic direction="right" />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">blur</TableCell>
                            <TableCell>
                                <MobileMenuBackDropBlur direction="right" />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div className="w-full mt-4">
                <h2 className="text-xl font-semibold">Themes</h2>
                <p className="text-base font-normal mt-2">
                    The <code className="font-semibold bg-gray-200">overlay</code> prop can be used to apply different
                    overlay effects to the drawer. It accepts two values:{" "}
                    <code className="font-semibold bg-gray-200">overlay</code> and{" "}
                    <code className="font-semibold bg-gray-200">blur</code>. When{" "}
                    <code className="font-semibold bg-gray-200">overlay</code> is used, a semi-transparent black overlay
                    is applied to the drawer. When <code className="font-semibold bg-gray-200">blur</code> is used, a
                    blur effect is applied to the drawer, and a border is added to the drawer.
                </p>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">classic</TableCell>
                            <TableCell>
                                <MobileMenuClassic direction="right" />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">big</TableCell>
                            <TableCell>
                                <MobileMenuBig direction="right" radius="sm" />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </main>
    );
}
