import { take, call } from "redux-saga/effects";
import {ADD_TODO, navigationType} from "./action";

export default () => {
    function* setNavigationToHomeDashboard(navigation: navigationType) {
        //Example to pass navigation and use it
        navigation.openHomeScreen();
    }

    function* setTodo() {
        const {navigation} = yield take(ADD_TODO);
        yield call(setNavigationToHomeDashboard, navigation);
    }

    return {
        setTodo,
    };
};