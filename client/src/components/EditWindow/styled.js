import styled from "styled-components"

export const mainContainer = styled.div`
width: 400px;
height: 75%;
background-color: black;
box-shadow: 7px 7px 16px black;
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);
  color: white;
align-items: center;
text-align: center;
gap: 10px;
border-radius: 10px;
z-index:1;

input {
    border: none;
    width: 80%;
    background-color: none;
    color: black;
    margin-top: 20px;
    padding: 10px;
    border-radius: 16px;
    outline: none;
}

button {
    margin-top: 30px;
    padding: 7px;
    border-radius: 17px;
    background-color: white;
    transition: 0.5s;
    border: none;
    cursor: pointer;
    :hover {
        transition: 0.5s;
        transform: scale(1.1);
    }
}
`
export const title = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 0px 20px;
h3 {
    margin-left: 150px;
}
span {
 cursor  :pointer ;
 transition: 0.3s;
 :hover {
    transform: scale(1.1);
    transition: 0.3s;
 }
}
`