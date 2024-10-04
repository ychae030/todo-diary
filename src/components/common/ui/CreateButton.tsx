import { BsFillPatchPlusFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
type CreateButtonType = {
  feat: "todo" | "diary";
  openModal?: () => void;
};
export default function CreateButton({
  feat = "todo",
  openModal,
}: CreateButtonType) {
  const navigate = useNavigate();

  const handleButton = () => {
    if (feat === "todo") {
      openModal && openModal();
    } else {
      navigate("/diary/create");
    }
  };
  return (
    <span className="fixed w-full flex left-0 bottom-10 justify-center">
      <button onClick={handleButton} className="text-brand text-4xl">
        <BsFillPatchPlusFill />
      </button>
    </span>
  );
}
