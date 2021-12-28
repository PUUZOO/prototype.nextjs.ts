import { all, fork } from "redux-saga/effects";

import todoSaga from "./sagas/todo";

export function* rootSaga() {
  yield all([fork(todoSaga)]);
}
