import axios from "axios"

const baseUrl = "http://127.0.0.1:3001"



export const getAll = async () => {
    const response = await axios(`${baseUrl}/clients`)
    return response.data
}

export const addClient = async (nome, rg, cpf, data, telefone, email,) => {
    const response = await axios.post(`${baseUrl}/clients`, {
        headers: {'Authorization':localStorage.getItem("_token")},
            name: nome,
            rg: rg,
            cpf: cpf,
            dob: data,
            number: telefone,
            email: email,
        },
            {headers: {'Authorization':localStorage.getItem("_token")},}
    )
    return response.data
}

export const editClient = async (id, nome, rg, cpf, data, telefone, email,) => {
    const response = await axios.put(`${baseUrl}/clients/${id}`, 
    {
        name: nome,
        rg: rg,
        cpf: cpf,
        dob: data,
        number: telefone,
        email: email,
    },
        {headers: {'Authorization':localStorage.getItem("_token")},}
    )
    return response.data
}

export const deleteClient = async (id) => {
    const response = await axios.delete(`${baseUrl}/clients/${id}`, {
        headers: {'Authorization':localStorage.getItem("_token")}
    }
    )
    return response.data
}

export const loginUser = async (email, password) => {
    const response = await axios.post(`${baseUrl}/users/login`, {
        email,
        password
    },
    {headers: {'Authorization':localStorage.getItem("_token")},} 
    )
    return response.data
}

export const registerUser = async (email, password, priority) => {
    const response = await axios.post(`${baseUrl}/users/register`,{
            email,
            password,
            priority
    })
    return response.data
}
