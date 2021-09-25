
import React, { useCallback, useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import {Card, FlatList, Text} from "native-base"
import { countryService } from "../../service/country/CountryService"
import { useState } from "react"

const ListCountry = () =>{

    const [listCountries,setListCountries] = useState([])

    useEffect(() => {
        const load = async () => {
            let result = await countryService.getCountry()
            setListCountries(result)
        }
        load()
    },[])

    const itemKeyExtractor = useCallback((item) => item, [])

    const renderPostItem = useCallback( ({item}) => 
        <Card>{item}</Card>
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