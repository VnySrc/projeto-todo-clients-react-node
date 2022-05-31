import * as C from "./styled"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
//components
import { Header } from "../../components/Header"
import { EditWindow } from "../../components/EditWindow"
import { AddWindow } from "../../components/AddWindow"
import { DeleteWindow } from "../../components/DeleteWindow"
import { Footer } from "../../components/Footer"
import { SideBar } from "../../components/SideBar"
//font wasome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"

//api
import { getAll, editClient, addClient, deleteClient } from "../../api/clientsApi"


export const MainPage = () => {
    const [selectedId, setSelectedId] = useState("")
    const [clientsList, setClientList] = useState([""])
    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [showAdd, setShowAdd] = useState(false)
    const [searchInput, setSearchInput] = useState("")
    const [count, setCount] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {
        (async () => {
             const response = await getAll();
             setClientList(response.clients)
             let token = localStorage.getItem("_token")
             token? token : navigate("/")
        })();
    }, [count]);
    const addAction = () => {
        setShowAdd(!showAdd)
    }
    const editAction = (id) => {
        setShowEdit(!showEdit)
        setSelectedId(id)
    }
    const deleteAction = (id) => {
        setShowDelete(!showDelete)
        setSelectedId(id)
    }
    const handleAdd = async (nome, rg, cpf, data, telefone, email) => {
        try {
            await addClient(nome, rg, cpf, data, telefone, email)
            alert("Cliente Adicionado com Sucesso!")
            addAction()
            window.location.reload();
            
        }
        catch {
            alert("Acesso Negado")
        }
        
    }
    const handleEdit = async (nome, rg, cpf, data, telefone,email,) => {
        try {
            await editClient(selectedId, nome, rg, cpf, data, telefone, email,)
            alert("Cliente Editado Com Sucesso!")
            editAction()
            window.location.reload();
        }
        catch {
            alert("Acesso Negado")
        }
        
    }
    const handleDelete = async () => {
        try {
            await deleteClient(selectedId)
            alert("Cliente Deletado Com Sucesso!")
            deleteAction()
            window.location.reload();
        }
       catch {
            alert("Acesso Negado")
       }
    }

    return (
        <>
        <Header></Header>
        <SideBar />
        <C.mainContainer>
            <C.searchArea>
            <C.title>Lista de Clientes</C.title>
            <input onChange={(e) => {setSearchInput(e.target.value)}} value={searchInput} type="text" placeholder="Pesquisar nome..."/>
            <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </C.searchArea>
            
            <C.clientesHeader>
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Rg</th>
                        <th>Cpf</th>
                        <th>Data de Nascimento</th>
                        <th>Telefone</th>
                        <th>E-mail</th>
                        <th>Editar</th>
                        <th>Deletar</th>
                    </tr>
                    </thead>
                    <tbody>   
                        
                    {clientsList.map( client => {
                          if (searchInput == "") {
                            return (
                                <tr key={client.id}>
                                    <td>{client.name}</td>
                                    <td>{client.rg}</td>
                                    <td>{client.cpf}</td>
                                    <td>{client.dob}</td>
                                    <td>{client.number}</td>
                                    <td>{client.email}</td>
                                    <td onClick={() => {editAction(client.id)}}><FontAwesomeIcon icon={faPenToSquare}/></td>
                                    <td onClick={() => {deleteAction(client.id)}}><FontAwesomeIcon icon={faTrashCan}/></td>
                                </tr>
                            )
                          }
                          else {
                              if (client.name.includes(searchInput)) {
                                return (
                                    <tr key={client.id}>
                                        <td>{client.name}</td>
                                        <td>{client.rg}</td>
                                        <td>{client.cpf}</td>
                                        <td>{client.dob}</td>
                                        <td>{client.number}</td>
                                        <td>{client.email}</td>
                                        <td onClick={() => {editAction(client.id)}}><FontAwesomeIcon icon={faPenToSquare}/></td>
                                        <td onClick={() => {deleteAction(client.id)}}><FontAwesomeIcon icon={faTrashCan}/></td>
                                    </tr>
                                )
                              }
                          }
                           
                        })}
                    </tbody>      
        </C.clientesHeader>
            {showAdd &&
                <AddWindow fnAdd={addAction} fnConfirmAdd={handleAdd} />
            }          
            {showEdit && 
                <EditWindow fnEdit={editAction} fnConfirmEdit={handleEdit}/>
            } 
            {showDelete &&
                <DeleteWindow fnDelete={deleteAction} fnConfirmDelete={handleDelete}/>
            }         
          
        </C.mainContainer>
        <Footer fnAdd={addAction}/>
        </>
       
    )
}