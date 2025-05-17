import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

type AccordionItem = {
  id: string | number;
  title: string;
  content: React.ReactNode;
};

interface AccordionItemComponentProps {
  item: AccordionItem;
  isOpen: boolean;
  onClick: () => void;
}

export const AccordionItem = ({
  item,
  isOpen,
  onClick,
}: AccordionItemComponentProps) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className={`flex justify-between items-center w-full px-4 py-4 text-left transition-colors ${
          isOpen ? "bg-blue-50" : "hover:bg-gray-50"
        }`}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="py-2 text-center font-sans font-bold text-dark text-3xl">{item.title}</h3>
        <div className="text-gray-600">
          {isOpen ? <BiUpArrowAlt size={20} /> : <BiDownArrowAlt size={20} />}
        </div>
      </button>
      <div
        className={`overflow-scroll scrollbar-hide transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 bg-white text-gray-700">{item.content}</div>
      </div>
    </div>
  );
};
