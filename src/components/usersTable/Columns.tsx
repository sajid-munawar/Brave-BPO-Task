import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

type Name = {
  title: string;
  first: string;
  last: string;
};

type Street = {
  number: number;
  name: string;
};

type Coordinates = {
  latitude: string;
  longitude: string;
};

type Timezone = {
  offset: string;
  description: string;
};

type Location = {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: Coordinates;
  timezone: Timezone;
};

type Login = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};

type Dob = {
  date: string;
  age: number;
};

type Registered = {
  date: string;
  age: number;
};

type Id = {
  name: string;
  value: string;
};

type Picture = {
  large: string;
  medium: string;
  thumbnail: string;
};

export type Result = {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
};

export const columns: ColumnDef<Result>[] = [
  {
    accessorFn: (row) => `${row.name.first} ${row.name.last}`,
    id: "fullName",
    header: "Full Name",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "gender",
    // header: "Gender",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Gender
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    filterFn: "equals",
  },
  {
    accessorKey: "location.city",
    header: "City",
  },
  {
    accessorKey: "cell",
    header: "Cell",
  },
  {
    accessorFn: (row) => `${row.registered.age}`,
    header: "Age",
  },
];
