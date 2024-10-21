import { v4 as uuidv4 } from "uuid";
import React, { useCallback, useEffect, useState } from "react";
import { PiTextAlignCenterBold, PiTextAlignLeftBold } from "react-icons/pi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdAccessTime } from "react-icons/md";
import useInput from "../../../hooks/useInput";
import { getCurrentTime } from "../../../utils/helpers";
import useImageUpload from "../../../hooks/useImageUpload";
import { IoPaperPlane } from "react-icons/io5";
import { Mood } from "../../../images/emoji";
import { addDiary, updateDiary } from "../../../api/diaryApi";
import useDiary from "../../../hooks/useDiary";
import { useNavigate } from "react-router-dom";

type TextAreaProps = {
  mood: Mood;
  mode?: "create" | "edit";
  image?: string;
  text?: string;
  id?: string;
};
export type DiaryItemType = {
  id: string;
  date: string;
  mood: Mood;
  text: string;
  isCenter: boolean;
  image?: string;
};

export default function TextArea({
  mood,
  mode = "create",
  text = "",
  image = "",
  id,
}: TextAreaProps) {
  const [isCenter, setIsCenter] = useState(false);
  const { bind, insertRef, insertAtCursor } =
    useInput<HTMLTextAreaElement>(text);
  const { imagePreview, setImagePreview, imageHandler, uploadToServer } =
    useImageUpload();
  const { date } = useDiary();
  const navigate = useNavigate();

  useEffect(() => {
    image && setImagePreview(image);
  }, [image, setImagePreview]);

  // 정렬 토글 핸들러
  const handleToggleAlign = useCallback(() => {
    setIsCenter((prev) => !prev);
  }, []);

  // 현재 시간 삽입 핸들러
  const handleInsertTime = useCallback(() => {
    insertAtCursor(getCurrentTime());
  }, [insertAtCursor]);

  // submit
  const hanleSubmit = async () => {
    if (mode === "edit") {
      const updatedImg =
        image === imagePreview
          ? image
          : !imagePreview
          ? ""
          : await uploadToServer();
      const updatedData = {
        mood,
        text: bind.value,
        isCenter,
        image: updatedImg,
      };
      await updateDiary(id as string, updatedData);
    } else {
      const image = imagePreview ? await uploadToServer() : "";
      const data = {
        id: uuidv4(),
        date,
        mood,
        text: bind.value,
        isCenter,
        image,
      };
      await addDiary(data);
    }

    navigate("/diary");
  };

  return (
    <div className="w-full">
      {/* 미리보기 이미지 영역 */}
      {imagePreview && (
        <div className="w-1/3  my-3">
          <button onClick={() => setImagePreview(null)}>삭제</button>
          <img
            className="rounded-md"
            src={imagePreview}
            alt="미리보기 이미지"
          />
        </div>
      )}

      {/* 텍스트 영역 */}
      <textarea
        {...bind}
        ref={insertRef}
        className={`w-full p-2 min-h-60 resize-none border border-slate-300 dark:bg-slate-600 dark:border-slate-800 ${
          isCenter ? "text-center" : "text-left"
        }`}
      />

      {/* 버튼 영역 */}
      <div className="text-2xl text-brand flex dark:text-brandDark">
        {/* 텍스트 정렬 토글 버튼 */}
        <button
          aria-label={`${isCenter ? "왼쪽 정렬하기" : "가운데 정렬하기"}`}
          onClick={handleToggleAlign}
        >
          {isCenter ? <PiTextAlignLeftBold /> : <PiTextAlignCenterBold />}
        </button>

        {/* 이미지 삽입 버튼 */}
        <button onClick={imageHandler} aria-label="사진을 삽입합니다.">
          <HiOutlinePhotograph />
        </button>

        {/* 현재 시간 삽입 버튼 */}
        <button aria-label="현재 시간을 가져옵니다." onClick={handleInsertTime}>
          <MdAccessTime />
        </button>

        {/* 작성  */}
        <button className="ml-auto" onClick={hanleSubmit}>
          <IoPaperPlane />
        </button>
      </div>
    </div>
  );
}
