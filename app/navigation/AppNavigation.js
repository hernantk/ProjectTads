import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "react-native-vector-icons/MaterialIcons";
import React from "react";
import { ROUTE_BRAZIL, ROUTE_COUNTRY, ROUTE_COUNTRY_STATISTICS, ROUTE_STACK, } from "./AppRoutes";
import HistoryBrazil from "../screens/history/HistoryBrazil";
import ListCountry from "../screens/country/ListCountry";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Statistics from "../screens/statistics/Statistics";
import StackScreen from "./StackScreen";


const Tab = createBottomTabNavigator()




const AppNavigation = () =>{

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={ROUTE_BRAZIL} component={HistoryBrazil} options={ {title:"Histórico Brasil"}}/>
                <Tab.Screen name={ROUTE_STACK} component={StackScreen} options={{title:"Paises"}}>
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )

}

export default AppNavigation