import { Link, Outlet, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { Autocomplete, AutocompleteItem, Avatar, Button } from "@heroui/react";

export const animals = [
  {
    label: "Cat",
    key: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Dog",
    key: "dog",
    description: "The most popular pet in the world",
  },
  {
    label: "Elephant",
    key: "elephant",
    description: "The largest land animal",
  },
  { label: "Lion", key: "lion", description: "The king of the jungle" },
  { label: "Tiger", key: "tiger", description: "The largest cat species" },
  { label: "Giraffe", key: "giraffe", description: "The tallest land animal" },
  {
    label: "Dolphin",
    key: "dolphin",
    description: "A widely distributed and diverse group of aquatic mammals",
  },
  {
    label: "Penguin",
    key: "penguin",
    description: "A group of aquatic flightless birds",
  },
  {
    label: "Zebra",
    key: "zebra",
    description: "A several species of African equids",
  },
  {
    label: "Shark",
    key: "shark",
    description:
      "A group of elasmobranch fish characterized by a cartilaginous skeleton",
  },
  {
    label: "Whale",
    key: "whale",
    description: "Diverse group of fully aquatic placental marine mammals",
  },
  {
    label: "Otter",
    key: "otter",
    description: "A carnivorous mammal in the subfamily Lutrinae",
  },
  {
    label: "Crocodile",
    key: "crocodile",
    description: "A large semiaquatic reptile",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const handleSelect = (item: Beach) => {
    navigate(`/search/${item.id}`);
  };

  return (
    <>
      <div className="w-full">
        {/* Navbar Principal */}
        <div className="flex items-center justify-between bg-white border-b border-gray-200 px-4 h-14">
          <div className="flex items-center space-x-8">
            <Link
              to={"/"}
              className="text-teal-700 font-medium hover:text-teal-800"
            >
              Inicio
            </Link>
            <Link
              to={"/"}
              className="text-teal-700 font-medium hover:text-teal-800"
            >
              Ranking
            </Link>
            <Link
              to={"/"}
              className="text-teal-700 font-medium hover:text-teal-800"
            >
              Evaluadores
            </Link>
            <Link
              to={"/"}
              className="text-teal-700 font-medium hover:text-teal-800"
            >
              Top
            </Link>
            <Link
              to={"/"}
              className="text-teal-700 font-medium hover:text-teal-800"
            >
              Playas
            </Link>
          </div>
          <div className="relative">
            <Autocomplete
              aria-label="Select a beach"
              classNames={{
                base: "max-w-xs",
                listboxWrapper: "max-h-[320px]",
                selectorButton: "text-default-500",
              }}
              defaultItems={animals}
              inputProps={{
                classNames: {
                  input: "ml-1",
                  inputWrapper: "h-[48px]",
                },
              }}
              listboxProps={{
                hideSelectedIcon: true,
                itemClasses: {
                  base: [
                    "rounded-medium",
                    "text-default-500",
                    "transition-opacity",
                    "data-[hover=true]:text-foreground",
                    "dark:data-[hover=true]:bg-default-50",
                    "data-[pressed=true]:opacity-70",
                    "data-[hover=true]:bg-default-200",
                    "data-[selectable=true]:focus:bg-default-100",
                    "data-[focus-visible=true]:ring-default-500",
                  ],
                },
              }}
              placeholder="Search your favorite beach"
              onSelectionChange={handleSelect}
              popoverProps={{
                offset: 10,
                classNames: {
                  base: "rounded-large",
                  content: "p-1 border-small border-default-100 bg-background",
                },
              }}
              radius="full"
              startContent={
                <BiSearch
                  className="text-default-400"
                  size={20}
                  strokeWidth={2.5}
                />
              }
              variant="bordered"
            >
              {(item) => (
                <AutocompleteItem key={item.key} textValue={item.label}>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <Avatar
                        alt={item.label}
                        className="flex-shrink-0"
                        size="sm"
                        src={item.label}
                      />
                      <div className="flex flex-col">
                        <span className="text-small">{item.label}</span>
                        <span className="text-tiny text-default-400">
                          {item.description}
                        </span>
                      </div>
                    </div>
                    <Button
                      className="border-small mr-0.5 font-medium shadow-small"
                      radius="full"
                      size="sm"
                      variant="bordered"
                    >
                      Go to
                    </Button>
                  </div>
                </AutocompleteItem>
              )}
            </Autocomplete>
          </div>
        </div>

        {/* Banner con imagen de fondo y texto */}
        <div
          className="relative h-64 bg-cover bg-center"
          style={{ backgroundImage: "url('/api/placeholder/800/300')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute top-1/4 left-12 text-white">
            <h1 className="text-3xl font-bold tracking-wide">DESCUBRE LAS</h1>
            <h1 className="text-3xl font-bold tracking-wide">MEJORES PLAYAS</h1>
            <h1 className="text-3xl font-bold tracking-wide">
              SEGÚN LA CIENCIA
            </h1>
          </div>
          <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
            <div className="rounded-full h-32 w-32 bg-white bg-opacity-80 flex items-center justify-center p-2">
              <div className="rounded-full h-28 w-28 border-4 border-yellow-200 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute h-full w-1/2 left-0 bg-blue-300"></div>
                  <div className="absolute h-full w-1/2 right-0 bg-yellow-200"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center overflow-hidden">
                        <div className="w-12 h-6 bg-blue-400 rounded-t-full absolute top-6"></div>
                        <div className="w-8 h-2 bg-yellow-400 absolute top-8 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-xs font-bold text-gray-600 text-center rotate-12 absolute top-0 right-0 transform -translate-x-2 translate-y-2">
                    MEJORES
                  </div>
                  <div className="text-xs font-bold text-gray-600 text-center -rotate-12 absolute bottom-0 left-0 transform translate-x-2 -translate-y-2">
                    PLAYAS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navbar;
