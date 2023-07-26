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
            setListaCliente(data);
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
                {/* {listaCliente.map(
                    cliente =>
                        <ul key={cliente.codigo + cliente.loja}>
                            <li>{cliente.codigo}</li>
                            <li>{cliente.loja}</li>
                            <li>{cliente.cnpj}</li>
                            <li>{cliente.razao}</li>
                        </ul>
                )} */}
            </div>
        </div>
    );
}