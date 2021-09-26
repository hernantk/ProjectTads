
import React, { useCallback, useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import {Card, FlatList, Text} from "native-base"
import { countryService } from "../../service/country/CountryService"
import { useState } from "react"
import { Pressable } from "react-native"
import { useNavigation } from "@react-navigation/core"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ROUTE_COUNTRY_STATISTICS } from "../../navigation/AppRoutes"
import Statistics from "../statistics/Statistics"

const ListCountry = () =>{
    const navigation = useNavigation()
    

    const [listCountries,setListCountries] = useState([])

    useEffect(() => {
        const load = async () => {
            let result = await countryService.getCountry()
            setListCountries(result)
        }
        load()
    },[])

    const openStatistics = useCallback((item) => {
        navigation.navigate(ROUTE_COUNTRY_STATISTICS, item)
    }, [])

    const itemKeyExtractor = useCallback((item) => item, [])

    const renderPostItem = useCallback( ({item}) => 
        <Pressable onPress={openStatistics}>
        <Card>{item}</Card>
        </Pressable>
    , [])

    return(
        <SafeAreaView>
                
                <FlatList 
                data={listCountries}
                renderItem={renderPostItem}
                keyExtractor={itemKeyExtractor}/>
            
        </SafeAreaView>
    )
}


export default ListCountry