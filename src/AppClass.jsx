import React, { Component } from "react";
import "./App.css";
import rockImg from "./assets/images/rock.png";
import scissorsImg from "./assets/images/scissors.png";
import paperImg from "./assets/images/paper.png";
import BoxClass from "./components/BoxClass";
import initImg from "./assets/images/init.png";
import { Button, Container, Grid, Typography } from "@mui/material";

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
  init: {
    name: "init",
    img: initImg,
  },
};
export default class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      userSelect: choice.init,
      computerSelect: choice.init,
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
    const itemArray = Object.keys(choice).filter((key) => key !== "init");
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
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          padding={"20px 0px"}
        >
          가위 바위 보 게임
        </Typography>
        <Grid container spacing={2} mb={4} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <BoxClass
              name="You"
              item={this.state.userSelect}
              result={this.state.result}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BoxClass
              name="Computer"
              item={this.state.computerSelect}
              result={this.state.result}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button
              sx={{ fontSize: "30px", color: "#000" }}
              size="medium"
              onClick={() => this.play("scissors")}
            >
              가위
            </Button>
          </Grid>
          <Grid item>
            <Button
              sx={{ fontSize: "30px", color: "#000" }}
              size="medium"
              onClick={() => this.play("rock")}
            >
              바위
            </Button>
          </Grid>
          <Grid item>
            <Button
              sx={{ fontSize: "30px", color: "#000" }}
              size="medium"
              onClick={() => this.play("paper")}
            >
              보
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
