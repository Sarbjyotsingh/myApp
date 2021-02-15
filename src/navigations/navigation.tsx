import {useCallback} from "react";
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './mainNavigation';

/*
Use this function for the navigation in whole project.
We should have function for every screen
*/
export function setNavigation() {
    const navigation = useNavigation();
    const navigationHandler = useCallback(
        <T extends keyof RootStackParamList>(
            targetScreen: T,
            targetScreenParams?: RootStackParamList[T]
        ) => {
            return navigation.navigate(
                targetScreen as keyof RootStackParamList,
                targetScreenParams
            );
        },
        [navigation]
    );
    const openProfileScreen = (userId: string) => {
        navigationHandler('Profile', { userId: userId })
    };
    const openHomeScreen = () => {
        navigationHandler('home')
    };
    const openLoginScreen = () => {
        navigationHandler('login')
    };

    const openSignScreen= () => {
        navigationHandler('signUp')
    };

    const openDashboardScreen= () => {
        navigationHandler('dashboard')
    };
    return {
        openProfileScreen,
        openHomeScreen,
        openLoginScreen,
        openSignScreen,
        openDashboardScreen
    }
}