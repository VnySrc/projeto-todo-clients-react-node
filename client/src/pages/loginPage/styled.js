import styled from "styled-components"

export const mainContainer = styled.div`
 margin:auto;
    width:500px;
    height: 350px;
    text-align: center;
    align-items: center;
    padding: 15px;
    margin-top: 150px;
    border-radius: 11px;
`
export const containerLogin = styled.div`
  display: block;
  h1 {
    margin: 15px;
    margin-bottom: 50px;
    color: black;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    }
    input {
    outline: none;
    padding:7px;
    border-style: none;
    width: 85%;
    margin: auto;
    border-bottom: 1px solid black;
    }
    button {
    transform: translate(0, 20px);
    width:25%;
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
    margin: auto;
    padding: 7px;
    background-color: rgb(27, 27, 27);
    color: white;
    }
    button:hover {
    background-color:rgb(151, 147, 147);
    color: rgb(27, 27, 27);
    transition: 0.5s;
    }
`
export const description = styled.div`
margin-top: 35px;

span {
    cursor: pointer;
}
`
export const containerRegister = styled.div`
    transform: translateY(-90px);
  display: block;
  h1 {
    margin: 15px;
    margin-bottom: 50px;
    color: black;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    }
    input {
    outline: none;
    padding:7px;
    border-style: none;
    width: 85%;
    margin: auto;
    border-bottom: 1px solid black;
    }
    button {
    transform: translate(0, 20px);
    width:25%;
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
    margin: auto;
    padding: 7px;
    background-color: rgb(27, 27, 27);
    color: white;
    }
    button:hover {
    background-color:rgb(151, 147, 147);
    color: rgb(27, 27, 27);
    transition: 0.5s;
    }
    img {
        margin-left: 200px;
        border-radius: 17%;
    }
`