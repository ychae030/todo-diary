import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)}>
      <IoIosArrowBack />
    </button>
  );
}
