import { sequelize } from "./mysql"
import {jest} from '@jest/globals';

jest.useFakeTimers();

describe ("Testes no banco de dados MySQL", () => {
    it ("testar conexao com o mysql", () => {
        let result = false
        try {
        sequelize.authenticate()
            result = true
        }
       catch(err) {
            console.log(err)
        result = false
        }
    
    expect(result).toBe(true)
    })
    beforeEach(() => {
        return;
    })
})
    