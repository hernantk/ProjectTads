import { serviceApi } from "./config/ServiceApi"

const getHistory = async() =>{
    let response = await serviceApi.get("history",{
    params:{
        country: 'Brazil', 
        day: '2021-09-23'
    }})


    return response.data.response[0]
}

export const historyService = {getHistory: getHistory}