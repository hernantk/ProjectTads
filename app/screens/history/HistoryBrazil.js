import React, { useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react"
import HistoryItem from "./HistoryItem"
import { historyService } from "../../service/HistoryService"
import { Text } from "native-base"

const HistoryBrazil = () =>{
    const [history,setHistory] = useState([])


    useEffect(() => {
        const load = async () => {
            let result = await historyService.getHistory()
            setHistory(result)
        }
        
        load()
        
    },[])



    return(
        <SafeAreaView>
           {history.cases!=null && <HistoryItem item={history}/>}
        </SafeAreaView>
    )
}


export default HistoryBrazil