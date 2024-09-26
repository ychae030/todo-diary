import { BsFillPatchPlusFill } from "react-icons/bs";
export default function CreateButton() {
  return (
    <span className="fixed w-full flex left-0 bottom-10 justify-center">
      <button className="text-brand text-4xl">
        <BsFillPatchPlusFill />
      </button>
    </span>
  );
}
