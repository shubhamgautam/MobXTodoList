import React from "react";
import ReactDOM from "react-dom";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
import Todo from "./Todo/Todo";
import { TodoStore } from "./Store/TodoStore";

// class Timer {
//   secondsPassed = 0;

//   constructor() {
//     makeAutoObservable(this);
//   }

//   increaseTimer() {
//     this.secondsPassed += 1;
//   }

//   reset() {
//     this.secondsPassed = 0;
//   }
// }

// const myTimer = new Timer();

// setInterval(() => {
//   myTimer.increaseTimer();
// }, 1000);

// // A function component wrapped with `observer` will reacts to any
// // future change in an observable it used before
// const TimerView = observer(({ timer }: { timer: Timer }) => (
//   <span onClick={() => timer.reset()}>
//     Seconds passed: {timer.secondsPassed}
//   </span>
// ));

ReactDOM.render(<Todo store={new TodoStore()} />, document.body);
