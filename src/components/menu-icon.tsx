import IconClickableArea from "./icon-clickable-area";
import { Bars3Icon } from "@heroicons/react/24/outline";

// You can customize the icon by replacing the <Bars3Icon /> component with your own SVG-JSX icon.
function CustomIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24">
            <path fill="black" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"></path>
        </svg>
    );
}

export default function MenuIcon() {
    return (
        <IconClickableArea>
            <Bars3Icon className="w-6 h-6 text-black" />
            {/* <CustomIcon /> */}
        </IconClickableArea>
    );
}
