import { serviceApi } from "../config/ServiceApi"

const getHistory = async() =>{
    let response = await serviceApi.get("history",{
    params:{
        country: 'usa', 
        day: '2020-06-02'
    }})

    let list = response.data
    let result = list.map(res =>{  
        return{
            cases : res.cases,
            deaths: res.deaths,
            time: res.time,
        }
    })

    return result
}

export const historyService = {getHistory: getHistory}