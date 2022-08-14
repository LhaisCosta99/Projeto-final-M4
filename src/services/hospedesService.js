class ValidacoesHospede{
    static validaNome(nome){
        if(nome.length >= 3){
            return true
        } 
        else {
            throw new Error("Nome inválido, deve ter no mínimo 3 caracteres")
        }
    }
    static validaCPF(cpf){
        const cpfTeste = parseInt(cpf)
        if(cpfTeste != cpf || cpf.length != 11){
            throw new Error("CPF inválido, favor rever a requisição.")
        }
        return true
    }
    static validaEmail(email){
        const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        if(regex.test(email)){
            return true
        } 
        else {
            throw new Error("Email inválido, favor rever a requisição.")
        }
    }
    static validaTelefone(telefone){
        const tel = parseInt(telefone)
        if(tel != telefone || telefone.length < 10 || telefone.length > 12){
            throw new Error("Telefone inválido, favor rever a requisição.")
        }
        return true
    }
    static validaHospede(nome, cpf, email, telefone){
        const valida = this.validaCPF(cpf) &&
        this.validaNome(nome) &&
        this.validaEmail(email) && 
        this.validaTelefone(telefone)

        return valida
    }
}