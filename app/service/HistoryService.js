import { serviceApi } from "./config/ServiceApi"

const getHistory = async() =>{
    let date = new Date().toISOString().slice(0,10)
    date.replace(date.substring(8,10),new Date().getDate())
    let response = await serviceApi.get("history",{
    params:{
        country: 'Brazil', 
        day: date
    }})


    return response.data.response[0]
}

export const historyService = {getHistory: getHistory}