import App from "./app";
import React from "react";
import { Button } from "antd";
export default function Home(props) {
  return (
    <App>
      <ViewModel />
    </App>
  );
}

function ViewModel(props) {
  const clickButton = () => {
    props.action.auth("SELF", "POST");
  };
  return (
    <div>
      <Button onClick={clickButton}>{props.reducer.auth.user}</Button>
    </div>
  );
}
