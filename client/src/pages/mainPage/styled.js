import styled from "styled-components";

export const mainContainer = styled.div`
transform: translate(0, 200px);
height: 100vh;
width: 90%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-47%, -33%);
`

export const title = styled.h2`
font-weight: bold;
text-align: left;
margin-left: 15px;
`

export const clientesHeader = styled.table`
text-decoration: none;
border-collapse: separate;
border-spacing: 17px;
text-align: center ;

svg {
   transition: 1s;
   :hover {
      transform: scale(1.1);
      transform: rotate(360deg);
      transition: 0.7s;
   }
}

 th {
  border:1px solid rgba(0,0,0,0.3);
  background-color: black;
  padding: 7px 17px;
  color: white;
  border-radius: 14px;
 }
 td {
    border:1px solid rgba(0,0,0,0.1);
    background-color: rgba(0,0,0,0.2);
    padding: 10px;
    border-radius: 14px;
 }
`
export const searchArea = styled.div`
display: flex;
flex-direction: row;

 input{
   transform: translate(409px,0px);
  padding: 1px 15px;
  width:500px;
  font-size: 13px;
  border: 1px solid rgb(200,200,200, 0.7);
  border-radius: 1px;
  outline: rgb(200,200,200, 1);
  border-radius: 5px;
}
button {
        transform: translate(419px,-0px);
        padding: 4px 20px;
        margin-left: -22px;
        align-items: center;
        text-align: center;
        border: 1px solid rgb(200,200,200, 0.7);
        cursor: pointer;
        svg{

            width:15px;
            height: 15px;
            color: gray;
        }
        img {
            height: 20px;
            width: 20px;
        }
    }
`



export const editContainer = styled.div`

`