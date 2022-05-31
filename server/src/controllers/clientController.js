import { Clients } from "../models/Clients.js"

export const clientFindAll = async (req, res) => {
    const result = await Clients.findAll()
    res.json({clients: result})
}
export const clientAdd = async (req, res) => {
    const {name, rg, cpf, dob, number, email} = req.body;
    if (name && rg && cpf && dob && number && email) {
        try {
            const product = Clients.build({
                name,
                rg,
                cpf,
                dob,
                number,
                email
            })
           await product.save()
            res.json({status: "Cliente Adicionado"})
        }
        catch (err) {
            res.status(400)
            res.json({status: err})
        }
    }   
    else {
        res.status(400)
        res.json({status: "Parametros passados incorretamente!"})
    }
}
export const clientEdit = async (req, res) => {
    const id = req.params.id;
    const {name, rg, cpf, dob, number, email} = req.body;
    if (name || rg || cpf || dob || number || email) {
       try {
            Clients.update(
            {
                name,
                rg,
                cpf,
                dob,
                number,
                email
            },
            {
                where: {id: id}
            })       
            res.json({status:"Cliente editado com successo"})
        }
        catch{
            res.json({status: "Cliente não existe"})
        }
    }
    else{
        res.status(400)
        res.json({status: "Parametros passados incorretamente!"})
    }
}
export const clientDelete = async (req, res) => {
   const id = req.params.id
   if (id) {
       const response = await Clients.findByPk(id)
       if (response) {
        await response.destroy()
        res.json({status: "Cliente Deletado"})
       }
    else {
        res.json({error: "sss passados incorretamente"})
    }
       
   }
   else {
       res.json({status: "ssss passados incorretamente"})
   }
} 