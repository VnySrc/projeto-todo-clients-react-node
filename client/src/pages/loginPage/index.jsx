import * as C from "./styled"
import {Header} from "../../components/Header"
import {Footer} from "../../components/Footer"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {loginUser, registerUser} from "../../api/clientsApi"


export const LoginPage = () => {
    const [showRegister , setShowRegister] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [priority, setPriority] = useState("")
    const navigate = useNavigate()
    const [token, setToken] = useState("")

    useEffect(() => {
        if (token) {
            navigate("/clients")
        }   
    }, [token])

    const switchView = () => {
        setShowRegister(!showRegister)
    }
    const handleEmailInput = (e) => {
        setEmail(e.target.value) 
    }
    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }
    const handlePriorityInput = (e) => {
        setPriority(e.target.value)
    }

    const loginAction = async (e) => {
        e.preventDefault()
        let response = await loginUser(email, password)
        localStorage.setItem("_token", response.token)
        setToken(response.token)
    }
    const registerAction = async (e) => {
        e.preventDefault()
        const response = await registerUser(email, password, priority)
        localStorage.setItem("_token", response.token)
        setToken(response.token)
    }
    return (
    <>

        <C.mainContainer>
                {!showRegister &&
                     <C.containerLogin>
                        <h1>Login</h1>   
                        <form>
                            <input value={email} type="text" name="email" placeholder="Email" onChange={handleEmailInput}/>
                            <input value={password} type="password" name="password" placeholder="Senha" onChange={handlePasswordInput}/>
                            <button value={priority} onClick={loginAction}>Logar</button>
                        </form>
                        <C.description>
                            Não tem uma conta? <br/>
                            <span onClick={switchView}><strong>Registrar</strong></span>  
                        </C.description>
                    </C.containerLogin>
                }
                {showRegister && 
                 <C.containerRegister>
                 <h1 id="title">Registrar</h1>
             
                 <form>
                     <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" width="75px" height="70px"/>
                     <input onChange={handleEmailInput} value={email} name="email" type="email" placeholder="Email"/>
                     <input onChange={handlePasswordInput} value={password} name="password" placeholder="Senha"/>
                     <input onChange={handlePriorityInput} value={priority}  name="priority" placeholder="Nivel de prioridade"></input>
                     <button onClick={registerAction} type="submit">Registrar</button>
                 </form>
                     <C.description>
                         Já tem uma conta <br/>
                         <span onClick={switchView}><strong>Login</strong></span>  
                     </C.description>
                </C.containerRegister>
                }
        </C.mainContainer>
    </>
       
    )
}