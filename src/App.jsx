import Box from "./components/Box";
import "./App.css";
import { useState } from "react";
import rockImg from "./assets/images/rock.png";
import scissorsImg from "./assets/images/scissors.png";
import paperImg from "./assets/images/paper.png";

// 박스 2개{타이틀,사진,결과}
// 가위 바위 보 버튼
// 버튼을 클릭하면 클릭한 값이 내 박스에 보임
// 컴퓨터는 랜덤하게 선택
// 결과를 가지고 누가 이겼는지 승패을 따짐
// 결과에 따라 테두리 색이 바뀜
const choice = {
  rock: {
    name: "Rock",
    img: rockImg,
  },
  scissors: {
    name: "Scissors",
    img: scissorsImg,
  },
  paper: {
    name: "Paper",
    img: paperImg,
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = (userChoice) => {
    const computerChoice = randomChoice();

    setUserSelect(choice[userChoice]);
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };
  const randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  };

  //무승부 상황을 제외 후,
  //가위 -> 보, 바위 -> 가위, 보-> 가위 이외에 모든 상황은 패배임

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "Tie";
    } else if (
      (user.name === "Rock" && computer.name === "Scissors") ||
      (user.name === "Scissors" && computer.name === "Paper") ||
      (user.name === "Paper" && computer.name === "Rock")
    ) {
      return "Win";
    } else {
      return "Lose";
    }
  };
  return (
    <div>
      <div className="main">
        <Box name="You" item={userSelect} result={result} />
        <Box name="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
