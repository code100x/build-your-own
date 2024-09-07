import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui";
import { Avatar } from "@repo/ui";

const ProfileDropdown = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <div className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-blue-400 to-blue-700">
          <Avatar color="white" className="size-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[99999] m-2 min-w-4 bg-neutral-100 dark:bg-neutral-900 cursor-pointer">
        <DropdownMenuItem onClick={() => {}}>
          <span
            className={`flex items-center gap-2 text-base transition-all duration-300 hover:text-red-500`}
          >
            <LogOut className="size-4" />
            Logout
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
