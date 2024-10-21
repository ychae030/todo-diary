import React from "react";

type DiaryActionProps = {
  onClick: () => void;
  text: string;
  children: React.ReactNode;
};
export default function DiaryAction({
  onClick,
  text,
  children,
}: DiaryActionProps) {
  return (
    <div className="flex gap-2 my-2 text-brand justify-end items-center dark:text-dangerDark">
      <p>{text}</p>
      <button onClick={onClick} className="text-xl w-10 h-10 items-center">
        {children}
      </button>
    </div>
  );
}
