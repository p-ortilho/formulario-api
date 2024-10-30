async function consultaCep(cep) 
{
    try
    {
        let consulta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let consultaTratada = await consulta.json();

        if (consultaTratada.erro)
        {
            throw Error(erro);
        }

        let estado = document.getElementById("estado");
        let cidade = document.getElementById("cidade");
        let bairro = document.getElementById("bairro");
        let endereco = document.getElementById("rua");

        estado.value = consultaTratada.uf;
        cidade.value = consultaTratada.localidade;
        bairro.value = consultaTratada.bairro;
        endereco.value = consultaTratada.logradouro;

        return consultaTratada;
    }
    catch(erro)
    {
        console.log(erro);
    }
}

let cep = document.getElementById("cep");

cep.addEventListener("focusout", () => consultaCep(cep.value))