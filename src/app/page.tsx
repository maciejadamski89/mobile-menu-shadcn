import MainMenu from "@/components/main-menu";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-16 max-w-xl mx-auto gap-y-4">
            <div>
                <h1 className="font-bold text-2xl mb-2">Mobile Menu Snippets</h1>
                <p>
                    This project showcases various mobile menu snippets built using the shadcn drawer component. The
                    drawer component can be configured to slide out from different directions, providing a versatile
                    solution for mobile navigation. The table below lists the different menu directions along with a
                    corresponding icon. Click on an icon to see the menu in action.
                </p>
            </div>
            <Table>
                <TableCaption>
                    Mobile menus build using{" "}
                    <a href="https://ui.shadcn.com/docs/components/drawer" className="underline">
                        shadcn drawer component
                    </a>
                    with different directions.
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] font-bold">Direction</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Right</TableCell>
                        <TableCell>
                            <MainMenu direction="right" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Left</TableCell>
                        <TableCell>
                            <MainMenu direction="left" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Top</TableCell>
                        <TableCell>
                            <MainMenu direction="top" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Bottom</TableCell>
                        <TableCell>
                            <MainMenu direction="bottom" />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Table>
                <TableCaption>
                    Mobile menus build using{" "}
                    <a href="https://ui.shadcn.com/docs/components/drawer" className="underline">
                        shadcn drawer component
                    </a>
                    with different radius.
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] font-bold">Radius</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">none</TableCell>
                        <TableCell>
                            <MainMenu direction="right" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">sm</TableCell>
                        <TableCell>
                            <MainMenu direction="right" radius="sm" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">md</TableCell>
                        <TableCell>
                            <MainMenu direction="right" radius="md" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">lg</TableCell>
                        <TableCell>
                            <MainMenu direction="right" radius="lg" />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </main>
    );
}
