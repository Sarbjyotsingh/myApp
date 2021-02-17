export const ADD_TODO = 'ADD_TODO';

export type navigationType = {
    openProfileScreen: (userId: string) => void;
    openHomeScreen: () => void;
    openLoginScreen: () => void;
    openSignScreen: () => void;
    openDashboardScreen: () => void;
}

export function addTodo(navigation: navigationType) {
    return {
        type: ADD_TODO,
        navigation
    }
};