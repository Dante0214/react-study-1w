import React, { Component } from "react";
import "./App.css";
import rockImg from "./assets/images/rock.png";
import scissorsImg from "./assets/images/scissors.png";
import paperImg from "./assets/images/paper.png";
import BoxClass from "./components/BoxClass";

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
export default class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
    };
  }
  play = (userChoice) => {
    const computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };
  randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  };

  //무승부 상황을 제외 후,
  //가위 -> 보, 바위 -> 가위, 보-> 가위 이외에 모든 상황은 패배임

  judgement = (user, computer) => {
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
  render() {
    return (
      <div>
        <div className="main">
          <BoxClass
            name="You"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            name="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="main">
          <button className="button" onClick={() => this.play("scissors")}>
            가위
          </button>
          <button className="button" onClick={() => this.play("rock")}>
            바위
          </button>
          <button className="button" onClick={() => this.play("paper")}>
            보
          </button>
        </div>
      </div>
    );
  }
}

// 박스 2개{타이틀,사진,결과}
// 가위 바위 보 버튼
// 버튼을 클릭하면 클릭한 값이 내 박스에 보임
// 컴퓨터는 랜덤하게 선택
// 결과를 가지고 누가 이겼는지 승패을 따짐
// 결과에 따라 테두리 색이 바뀜
