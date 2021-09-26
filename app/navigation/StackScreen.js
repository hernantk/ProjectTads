import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ListCountry from "../screens/country/ListCountry"
import Statistics from "../screens/statistics/Statistics"
import { ROUTE_COUNTRY, ROUTE_COUNTRY_STATISTICS } from "./AppRoutes"






const Stack = createNativeStackNavigator()

const StackScreen = () =>{

    return(
            <Stack.Navigator> 
                <Stack.Screen name={ROUTE_COUNTRY} component={ListCountry} />
                <Stack.Screen name={ROUTE_COUNTRY_STATISTICS} component={Statistics} />
            </Stack.Navigator>

    )

}

export default StackScreen