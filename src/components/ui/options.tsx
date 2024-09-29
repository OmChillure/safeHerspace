import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";
import { Button } from "./button";
import Link from "next/link";

export default function Options() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button >
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" className="bg-gray-800 rounded-md ">
        <DropdownItem key="new" className="w-40 hover:bg-black rounded-md">
        <Link href={"/dashboard/locality/new"}>
          Add Locality
        </Link>
        </DropdownItem>
        <DropdownItem key="copy" className="hover:bg-black rounded-md">
          <Link href={"/dashboard/profile"}>
          Profile
          </Link>
        </DropdownItem>
        <DropdownItem key="edit" className="hover:bg-black rounded-md">Edit file</DropdownItem>
        <DropdownItem key="delete" className="hover:bg-red-700 rounded-md" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}