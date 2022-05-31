import { useState } from "react"
import * as C from "./styled"

export const EditWindow = ({fnEdit, fnConfirmEdit}) => {
    const [nome, setNome] = useState("")
    const [Rg, setRg] = useState("")
    const [cpf, setCpf] = useState("")
    const [data, setData] = useState("")
    const [telefone, setTelefone] = useState("")
    const [email, setEmail] = useState("")

    const handleEdit = () => {
        fnConfirmEdit(nome, Rg, cpf, data, telefone, email)
    }

    return (
        <C.mainContainer>
            <C.title>
            <h3>Editando</h3><span onClick={fnEdit}>X</span>
            </C.title>
            <input value={nome} onChange={(e) => {setNome(e.target.value)}} type="text" placeholder="Nome"></input>
            <input value={Rg} onChange={(e) => {setRg(e.target.value)}} type="text" placeholder="Rg"></input>
            <input value={cpf} onChange={(e) => {setCpf(e.target.value)}} type="text" placeholder="Cpf"></input>
            <input value={data} onChange={(e) => {setData(e.target.value)}} type="date"></input>
            <input value={telefone} onChange={(e) => {setTelefone(e.target.value)}} type="text" placeholder="Telefone"></input>
            <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder="E-mail"></input>
           <button onClick={handleEdit}> Confirmar </button>
        </C.mainContainer>
    )
}