import * as React from "react";

function App() {
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        border: "solid 1px black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p>remote-app-webpack</p>
      <p>{`origin: ${window.location.origin}`}</p>
    </div>
  );
}
export default App;
