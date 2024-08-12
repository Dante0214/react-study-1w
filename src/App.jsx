import Box from "./components/Box";
import "./App.css";
import { useState } from "react";

// 박스 2개{타이틀,사진,결과}
// 가위 바위 보 버튼
// 버튼을 클릭하면 클릭한 값이 내 박스에 보임
// 컴퓨터는 랜덤하게 선택
// 결과를 가지고 누가 이겼는지 승패을 따짐
// 결과에 따라 테두리 색이 바뀜
function App() {
  return (
    <div>
      <Box name="You" />
      <Box name="Coumputer" />
    </div>
  );
}

export default App;
