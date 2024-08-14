import Box from "./components/Box";
import { useState } from "react";
import rockImg from "./assets/images/rock.png";
import scissorsImg from "./assets/images/scissors.png";
import paperImg from "./assets/images/paper.png";
import initImg from "./assets/images/init.png";
import { Button, Container, Grid, Typography } from "@mui/material";

// 박스 2개{타이틀,사진,결과}
// 가위 바위 보 버튼
// 버튼을 클릭하면 클릭한 값이 내 박스에 보임
// 컴퓨터는 랜덤하게 선택
// 결과를 가지고 누가 이겼는지 승패을 따짐
// 결과에 따라 테두리 색이 바뀜
const choice = {
  init: {
    name: "init",
    img: initImg,
  },
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
  const [userSelect, setUserSelect] = useState(choice.init);
  const [computerSelect, setComputerSelect] = useState(choice.init);
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
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom padding={"20px 0px"}>
        가위 바위 보 게임
      </Typography>
      <Grid container spacing={2} mb={4} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Box name="You" item={userSelect} result={result} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box name="Computer" item={computerSelect} result={result} />
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button
            sx={{ fontSize: "30px", color: "#000" }}
            size="medium"
            onClick={() => play("scissors")}
          >
            가위
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={{ fontSize: "30px", color: "#000" }}
            size="medium"
            onClick={() => play("rock")}
          >
            바위
          </Button>
        </Grid>
        <Grid item>
          <Button
            sx={{ fontSize: "30px", color: "#000" }}
            size="medium"
            onClick={() => play("paper")}
          >
            보
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
