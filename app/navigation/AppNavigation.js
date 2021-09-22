import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "react-native-vector-icons/MaterialIcons";
import React from "react";
import { ROUTE_BRAZIL, ROUTE_COUNTRY, } from "./AppRoutes";
import SearchCountry from "../screens/tracks/SearchCountry";
import HistoryBrazil from "../screens/artists/HistoryBrazil";


const Tab = createBottomTabNavigator()


const AppNavigation = () =>{

    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={ROUTE_BRAZIL} component={HistoryBrazil} options={ {title:"Histórico Brasil"}}/>
                <Tab.Screen name={ROUTE_COUNTRY} component={SearchCountry} options={{title:"Paises"}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )

}

export default AppNavigation