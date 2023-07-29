import { useEffect, useState } from 'react';
import { Cliente } from '../../types/Cliente';
export const TelaConsultaCliente = () => {

    const [listaCliente, setListaCliente] = useState<Cliente[]>([])

    async function getClientes() {

        try {
            const res = await fetch('http://172.17.0.2:8935/rest/WSCLIENTES/CNPJ/16383848000772',
                {
                    'headers': {
                        'Authorization': 'Basic aW50ZWdyYWRvcjphc2QxNDdA',
                        'content-type': 'application/json'
                    }
                }
            )
            const data = await res.json();
            // console.log(data);
            setListaCliente([data]);
            console.log(listaCliente);
            console.log("finalizou a consulta")
        } catch (erro) {
            console.log("Erro");
        }
    }

    useEffect(() => {
        getClientes();
        // console.log(listaCliente);
    }, []);

    return (
        <div>
            <div>
                <h1>Lista de Clientes</h1>
            </div>
            <div>
                <ul >
                    {listaCliente.map(
                        cliente =>
                            <div key={cliente.codigo + cliente.loja}>
                                <li>empresa: {cliente.empresa}</li>
                                <li>filial: {cliente.filial}</li>
                                <li>codigo: {cliente.codigo}</li>
                                <li>loja: {cliente.loja}</li>
                                <li>razao: {cliente.razao}</li>
                                <li>nome: {cliente.nome}</li>
                                <li>tipo: {cliente.tipo}</li>
                                <li>cnpj: {cliente.cnpj}</li>
                                <li>ie: {cliente.ie}</li>
                                <li>pessoa: {cliente.pessoa}</li>
                                <li>email: {cliente.email}</li>
                                <li>cep: {cliente.cep}</li>
                                <li>endereco: {cliente.endereco}</li>
                                <li>bairro: {cliente.bairro}</li>
                                <li>uf: {cliente.uf}</li>
                                <li>municipio: {cliente.municipio}</li>
                                <li>ddd: {cliente.ddd}</li>
                                <li>telefone: {cliente.telefone}</li>
                                <li>tabela: {cliente.tabela}</li>
                            </div>
                    )}
                </ul>
            </div>
        </div>
    );
}