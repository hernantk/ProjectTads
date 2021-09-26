import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ListCountry from "../screens/country-statistics/ListCountry"
import { ROUTE_LIST_COUNTRY, ROUTE_STATS_COUNTRY } from "./AppRoutes"
import StatsCountry from "../screens/country-statistics/StatsCountry";






const Stack = createNativeStackNavigator()

const StackScreen = () =>{

    return(
            <Stack.Navigator> 
                <Stack.Screen name={ROUTE_LIST_COUNTRY} component={ListCountry} />
                <Stack.Screen name={ROUTE_STATS_COUNTRY} component={StatsCountry} />
            </Stack.Navigator>

    )

}

export default StackScreen