import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ROUTE_BRAZIL, ROUTE_STACK, } from "./AppRoutes";
import HistoryBrazil from "../screens/history/HistoryBrazil";
import StackNavigation from "./StackNavigation";


const Tab = createBottomTabNavigator()


const AppNavigation = () =>{

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={ROUTE_BRAZIL} component={HistoryBrazil} options={ {title:"Histórico Brasil"}}/>
                <Tab.Screen name={ROUTE_STACK} component={StackNavigation} options={{headerShown:false}}>
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )

}


export default AppNavigation