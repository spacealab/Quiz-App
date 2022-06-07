import { createAppContainer, createStackNavigator } from "react-navigation";

import Quiz from "./screen/Quiz";
import QuizIndex from "./screen/QuizIndex";

const MainStack = createStackNavigator({
    QuizIndex: {
        screen: QuizIndex,
        navigationOptions: {
            headerTitle: "Quizzes",
        }
    },
    Quiz:{
        screen: Quiz,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.getParam("title"),
            headerTintColor: "#fff",
            headerStyle: {
                backgroundColor: navigation.getParam("color"),
                borderBottomColor: navigation.getParam("color"),
            },
        }),
    },
});

export default createAppContainer(MainStack);
