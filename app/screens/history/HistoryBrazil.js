
import React, { useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { historyService } from "../../service/history/HistoryService"
import { useState } from "react"
import HistoryBrazilItem from "./HistoryBrazilItem"

const HistoryBrazil = () =>{
    const [history,setHistory] = useState([])


    useEffect(async () => {
        const load = async () => {
            let result = await historyService.getHistory()
            setHistory(result)
        }
        
        load()
        
    },[])


    return(
        <SafeAreaView>
           {history.cases!=null && <HistoryBrazilItem item={history}/>}
        </SafeAreaView>
    )
}


export default HistoryBrazil