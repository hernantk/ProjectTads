import React, { useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react"
import HistoryItem from "../history/HistoryItem"

const Statistics = ({country}) =>{
    const [history,setHistory] = useState([])

    return(
        <SafeAreaView>
           {history.cases!=null && <HistoryItem item={country}/>}
        </SafeAreaView>
    )
}


export default Statistics