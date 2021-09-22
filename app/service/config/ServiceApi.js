import axios from "axios"


const createApi = () =>{
    let instance = axios.create({
        baseURL:"https://covid-193.p.rapidapi.com/",
        headers: {
            'x-rapidapi-host': 'covid-193.p.rapidapi.com',
            'x-rapidapi-key': 'd8875b3203msh1db0bc948890077p198909jsn222b6b7912c8'
    }})

    return instance

}
export const serviceApi = createApi()