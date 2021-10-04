import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { ROUTE_BRAZIL, ROUTE_LIST_COUNTRY, ROUTE_TAB, } from "./AppRoutes";
import HistoryBrazil from "../screens/history/HistoryBrazil";
import { Icon, Image } from "native-base";
import ListCountry from "../screens/country-statistics/ListCountry";


const Tab = createBottomTabNavigator()


const TabNavigation = () =>{

    return(
       
            <Tab.Navigator>
                <Tab.Screen name={ROUTE_BRAZIL} component={HistoryBrazil} 
                options={
                        {
                            title: 'Histórico Brasil',
                            tabBarIcon: ( { color, size }) => <Icon color={"white"} size={size} />
                        }
                    } />
                <Tab.Screen name={ROUTE_LIST_COUNTRY} component={ListCountry} 
                options={
                    {
                        title:"Lista de Paises",
                        tabBarIcon: ( { color, size }) => <Icon  color={"white"} size={size} />
                    }
                } />
            </Tab.Navigator>
    )

}


export default TabNavigation