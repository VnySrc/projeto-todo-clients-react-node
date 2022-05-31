import * as C from "./styled"

export const Footer = ({fnAdd}) => {
    return (
        <C.mainContainer>
            <button onClick={fnAdd}>Adicionar Cliente</button>
        </C.mainContainer>
    )
}