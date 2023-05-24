import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Landing from "../pages/landingPage";
import Registration from "../pages/registerPage";
import Login from "../pages/loginPage";

const screens = {
    Landing: {
        screen: Landing
    },
    Registration: {
        screen: Registration
    },
    Login: {
        screen: Login
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);