import React, { useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react"
import StatsItem from "./StatsItem"
import { statisticsService } from "../../service/StatisticsService"
import { useRoute } from "@react-navigation/core"

const StatsCountry = () =>{
    const [stats,setStats] = useState([])
    const route = useRoute()
    const country = route.params


    useEffect(() => {
        const load = async () => {
            let result = await statisticsService.getStatistics(country)
            setStats(result)
        }
        load()
    },[])
    

    return(
        <SafeAreaView>
           {stats!=null && <StatsItem item={stats}/>}
        </SafeAreaView>
    )
}


export default StatsCountry