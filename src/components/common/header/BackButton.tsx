import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import ModifyButton from "./ModifyButton";
import { DiaryFetchProvider } from "../../../context/DiaryFetchContext";

type BackButtonProps = {
  isModify?: boolean;
};
export default function BackButton({ isModify = false }: BackButtonProps) {
  const navigate = useNavigate();
  const { date } = useParams();

  return (
    <>
      <button className="text-xl" onClick={() => navigate(-1)}>
        <IoIosArrowBack />
      </button>
      {isModify && (
        <DiaryFetchProvider date={date!}>
          <ModifyButton />
        </DiaryFetchProvider>
      )}
    </>
  );
}
