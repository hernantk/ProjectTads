import { serviceApi } from "../config/ServiceApi"

const getCountry = async() =>{
    let response = await serviceApi.get("countries",{
    params:{
        country:"br"
    }})

    
    let result = response

    return result
}

export const countryService = {getCountry: getCountry}