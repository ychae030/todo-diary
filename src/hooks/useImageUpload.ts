import { useState } from "react";

export default function useImageUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // 이미지 선택, 미리보기
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", (e) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files[0]) {
        const file = target.files[0];
        setSelectedFile(file);

        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  // cloudinary 업로드
  const uploadToServer = () => {
    const url = process.env.REACT_APP_CLOUDINARY_URL || "";
    const data = new FormData();
    selectedFile && data.append("file", selectedFile);
    data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET || "");
    return fetch(url, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => data.url);
  };
  return { imageHandler, imagePreview, setImagePreview, uploadToServer };
}
