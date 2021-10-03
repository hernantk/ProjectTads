import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ListCountry from "../screens/country-statistics/ListCountry"
import { ROUTE_LIST_COUNTRY, ROUTE_STATS_COUNTRY } from "./AppRoutes"
import StatsCountry from "../screens/country-statistics/StatsCountry";






const Stack = createNativeStackNavigator()

const StackNavigation = () =>{

    return(
            <Stack.Navigator> 
                <Stack.Screen name={ROUTE_LIST_COUNTRY} component={ListCountry} options={{title:"Lista de Paises"}}/>
                <Stack.Screen name={ROUTE_STATS_COUNTRY} component={StatsCountry} options={{title:"Estatisticas"}} />
            </Stack.Navigator>

    )

}

export default StackNavigation