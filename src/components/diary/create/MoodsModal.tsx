import Modal from "../../common/Layouts/Modal";
import { emoji, Mood, moods } from "../../../images/emoji";

type MoodsModalProps = {
  mood: Mood;
  handleMood: (mood: Mood) => void;
  isMoodOpen: boolean;
  closeMoodModal: () => void;
};

export default function MoodsModal({
  mood,
  handleMood,
  isMoodOpen,
  closeMoodModal,
}: MoodsModalProps) {
  return (
    <Modal isOpen={isMoodOpen}>
      <div className="p-2">
        <p className="text-center mb-4">
          오늘 하루 어땠나요? <br />
          날씨로 오늘 기분을 표현해 봐요
        </p>
        <ul className="grid grid-cols-4 gap-7 mb-3">
          {moods.map((mood, i) => (
            <li key={i}>
              <button onClick={() => handleMood(mood)}>
                <img src={emoji[mood]} alt={mood} />
              </button>
            </li>
          ))}
        </ul>
        <div className="w-16 mx-auto">
          <img src={emoji[mood]} alt={mood} />
        </div>
        <button
          onClick={closeMoodModal}
          className="ml-auto block text-brand dark:text-brandDark"
        >
          다음
        </button>
      </div>
    </Modal>
  );
}
