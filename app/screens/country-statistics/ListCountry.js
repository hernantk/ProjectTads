
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
        <Card marginBottom={2} style={styles.cardCnt} rounded={40}>{item}</Card>
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
const styles = {
    cardCnt: {
         borderWidth: 2, 
         
         shadowColor: 'rgba(0,0,0, 0.0)', 
         shadowOffset: { height: 0, width: 0 },
         shadowOpacity: 0,
         shadowRadius: 0,
         
         
         elevation: 0 
   }
 }


export default ListCountry