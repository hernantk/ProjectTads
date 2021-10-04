import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ListCountry from "../screens/country-statistics/ListCountry"
import { ROUTE_LIST_COUNTRY, ROUTE_TAB, ROUTE_STATS_COUNTRY } from "./AppRoutes"
import StatsCountry from "../screens/country-statistics/StatsCountry";
import TabNavigation from "./TabNavigation";
import { NavigationContainer } from "@react-navigation/native";






const Stack = createNativeStackNavigator()

const AppNavigation = () =>{

    return(<NavigationContainer>
                <Stack.Navigator> 
                    <Stack.Screen name={ROUTE_TAB} component={TabNavigation} options={{headerShown:false}}/>
                    <Stack.Screen name={ROUTE_STATS_COUNTRY} component={StatsCountry} options={{title:"Estatisticas"}} />
                </Stack.Navigator>
            </NavigationContainer>

    )

}

export default AppNavigation