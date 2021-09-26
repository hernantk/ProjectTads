
import React, { useCallback, useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import {Card, FlatList, Text} from "native-base"
import { countryService } from "../../service/CountryService"
import { useState } from "react"
import { Pressable } from "react-native"
import { useNavigation } from "@react-navigation/core"
import { ROUTE_STATS_COUNTRY } from "../../navigation/AppRoutes"

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

    const openStatistics = (item) => {
        navigation.navigate(ROUTE_STATS_COUNTRY, item)
    }

    

    const renderPostItem = useCallback( ({item}) => 
        <Pressable onPress={()=>openStatistics(item)}>
        <Card>{item}</Card>
        </Pressable>
    , [])
    const itemKeyExtractor = useCallback((item) => item, [])

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