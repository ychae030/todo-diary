import React from "react";
import { IoMdMore } from "react-icons/io";
import Modal from "../../Layouts/Modal";
import useModal from "../../../../hooks/useModal";
import { useDiaryFetchContext } from "../../../../context/DiaryFetchContext";
import { deleteDiary } from "../../../../api/diaryApi";
import { useNavigate } from "react-router-dom";

export default function ModifyButton() {
  const { isOpen, openModal, closeModal } = useModal();
  const { diaryData } = useDiaryFetchContext();
  const { id, date } = diaryData?.[0] || {};
  const navigate = useNavigate();

  const handleEdit = () => {
    date && navigate(`/diary/edit/${date}`, { state: diaryData?.[0] });
  };
  const handleDelete = () => {
    id && deleteDiary(id);
    navigate(-1);
  };
  return (
    <div className="ml-auto">
      <button onClick={() => openModal()} className="text-xl">
        <IoMdMore />
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="grid">
          <button
            onClick={handleEdit}
            className="pb-4 border-b border-slate-200"
          >
            수정
          </button>
          <button onClick={handleDelete} className="pt-4">
            삭제
          </button>
        </div>
      </Modal>
    </div>
  );
}
