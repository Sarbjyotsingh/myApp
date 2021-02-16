import { fork, all } from "redux-saga/effects";
import todo from "./../todo/saga";
export default function* root() {
  yield all([
    fork(todo().setTodo),
  ])
}
