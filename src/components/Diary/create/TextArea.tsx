import React, { useCallback, useState } from "react";
import { PiTextAlignCenterBold, PiTextAlignLeftBold } from "react-icons/pi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdAccessTime } from "react-icons/md";
import useInput from "../../../hooks/useInput";
import { getCurrentTime } from "../../../utils/helpers";
import useImageUpload from "../../../hooks/useImageUpload";

export default function TextArea() {
  const [isCenter, setIsCenter] = useState(false);
  const { bind, insertRef, insertAtCursor } = useInput<HTMLTextAreaElement>("");
  const { imagePreview, imageHandler } = useImageUpload();

  // 정렬 토글 핸들러
  const handleToggleAlign = useCallback(() => {
    setIsCenter((prev) => !prev);
  }, []);

  // 현재 시간 삽입 핸들러
  const handleInsertTime = useCallback(() => {
    insertAtCursor(getCurrentTime());
  }, [insertAtCursor]);

  return (
    <div className="w-full">
      {/* 미리보기 이미지 영역 */}
      {imagePreview && (
        <div className="min-w-full">
          <img src={imagePreview} alt="" />
        </div>
      )}

      {/* 텍스트 영역 */}
      <textarea
        {...bind}
        ref={insertRef}
        className={`w-full p-2 min-h-60 resize-none border border-slate-300 ${
          isCenter ? "text-center" : "text-left"
        }`}
      />

      {/* 버튼 영역 */}
      <div className="text-xl">
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
      </div>
    </div>
  );
}
