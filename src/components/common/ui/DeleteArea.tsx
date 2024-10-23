import { FaRegTrashAlt } from "react-icons/fa";
import { TodoItemType } from "../../todo/TodoItem";

type DeleteAreaProps = {
  onDrop: () => Promise<void>;
  draggingItem: TodoItemType | null;
};

export default function DeleteArea({ onDrop, draggingItem }: DeleteAreaProps) {
  return (
    <div className="fixed w-full flex left-0 bottom-10 justify-center">
      <div
        className={`${
          draggingItem
            ? "bg-red-500 text-white"
            : " border-dotted border-red-500 text-red-500"
        } h-10 rounded-md w-11/12 max-w-3xl text-center border flex justify-center items-center duration-75`}
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
      >
        {draggingItem ? <FaRegTrashAlt /> : <span>Drag Here!</span>}
      </div>
    </div>
  );
}
