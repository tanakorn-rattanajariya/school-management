import { AUTH_REQUEST, api } from "../actions/type";
import { takeEvery, put } from "redux-saga/effects";
export function* auth() {
  yield takeEvery(AUTH_REQUEST, request);
}

function* request(actions) {
  yield put({ type: api.auth.self.post.success });
}
