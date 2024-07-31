import { IResults } from "../interfaces/users.type"
import axios from "../utils/axios"

// export const fetchAllUser = () => {
//     return axios.get(`/?page=1&results=10`)
// }

export const fetchAllUser = (page: number): Promise<IResults> => {
    return axios.get(`/?page=${page}&results=10`)
}

