import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../../services/api";
import { signInSuccess, signFailure } from "./actions";
import history from "../../../services/history";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(
      api.get,
      `users?email=${email}&password=${password}`
    );

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error("Usuario não é prestador");
      return;
    }

    yield put(signInSuccess(token, user));

    history.push("/deshboard");
  } catch (error) {
    toast.error("Falha na autenticação verificar os dados.");
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    let { name, email, password } = payload;

    const response = yield call(api.get, `users?email=${email}`);

    const existsUser = response.data.find(e => e.email === email);

    if (existsUser !== undefined) {
      toast.warn("E-mail já cadastrado.");
      return;
    }

    yield call(api.post, "users", {
      name,
      email,
      password,
      provider: true,
      token: Math.floor(Math.random() * 6) + 1
    });

    toast.success("Cadastro realizado com sucesso seja bem vindo.");

    setTimeout(() => {
      history.push("/");
      console.log("time entrou");
    }, 5000);
  } catch (error) {
    toast.error("Falha no cadastro, verifique seus dados.");

    yield put(signFailure());
  }
}

export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp)
]);
