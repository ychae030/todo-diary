import React from "react";
import { IoMdMore } from "react-icons/io";
import Modal from "../../Layouts/Modal";
import useModal from "../../../../hooks/useModal";
import { useDiaryFetchContext } from "../../../../context/DiaryFetchContext";
import { deleteDiary } from "../../../../api/diaryApi";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";

export default function ModifyButton() {
  const { isOpen, openModal, closeModal } = useModal();
  const { diaryData } = useDiaryFetchContext();
  const { id, date } = diaryData?.[0] || {};
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const handleEdit = () => {
    date && navigate(`/diary/edit/${date}`, { state: diaryData?.[0] });
  };

  const refreshData = () => {
    queryClient.invalidateQueries("diaries");
  };
  const handleDelete = async () => {
    if (id) {
      await deleteDiary(id); // 삭제 작업 완료 대기
    }
    refreshData();
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
