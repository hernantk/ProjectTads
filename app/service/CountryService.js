import { serviceApi } from "./config/ServiceApi"

const getCountry = async() =>{
    let response = await serviceApi.get("countries")

    
    return response.data.response
}

export const countryService = {getCountry: getCountry}