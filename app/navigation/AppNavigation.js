import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ROUTE_BRAZIL, ROUTE_STACK, } from "./AppRoutes";
import HistoryBrazil from "../screens/history/HistoryBrazil";
import StackNavigation from "./StackNavigation";
import { Icon, Image } from "native-base";
import { Ionicons } from "@expo/vector-icons";


const Tab = createBottomTabNavigator()


const AppNavigation = () =>{

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={ROUTE_BRAZIL} component={HistoryBrazil} 
                options={
                        {
                            title: 'Histórico Brasil',
                            tabBarIcon: ( { color, size }) => <Icon color={color} size={size} />
                        }
                    } />
                <Tab.Screen name={ROUTE_STACK} component={StackNavigation} 
                options={
                    {
                        headerShown:false,
                        tabBarShowLabel:false,
                        tabBarIcon: ( { color, size }) => <Icon name="bars" color={color} size={size} />
                    }
                } />
            </Tab.Navigator>
        </NavigationContainer>
    )

}


export default AppNavigation