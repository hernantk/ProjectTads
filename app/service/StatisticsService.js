import { serviceApi } from "./config/ServiceApi"

const getStatistics = async(pCountry) =>{
    let response = await serviceApi.get("statistics",{
    params:{
        country:pCountry, 
    }})

    return response.data.response[0]
}

export const statisticsService = {getStatistics: getStatistics}