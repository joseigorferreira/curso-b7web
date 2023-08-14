'use client'


import { TelaConsultaCliente } from "@/components/consultas-api/TelaConsultaCliente";
import { TesteGian } from "@/components/consultas-api/TesteGian";
import { Cliente } from "@/types/Cliente";
import { User } from "@/types/User";
import { useEffect, useState } from "react";

const Page = () => {
  // const [loading, setLoading] = useState(true);
  // const [users, setUsers] = useState<Cliente[]>([]);

  // async function getUsers() {
  //   // const res = await fetch('https://jsonplaceholder.typicode.com/users');

  //   try {
  //     const res = await fetch('http://172.17.0.2:8935/rest/WSCLIENTES/CNPJ/16383848000772',
  //       {
  //         headers: {
  //           'Authorization': 'Basic aW50ZWdyYWRvcjphc2QxNDdA',
  //           'content-type': 'application/json'
  //         }
  //       }
  //     )
  //     const data = await res.json();
  //     console.log(data);
  //     setUsers([data]);
  //   } catch (error) { console.log("erro") };

  //   console.log(users)
  // }

  // useEffect(() => {

  //   getUsers();

  // }, []);

  return (
    <div>
      {/* <TelaConsultaCliente></TelaConsultaCliente> */}
      <TesteGian></TesteGian>
      {/* <ul>
        {users.map(item =>
          <div>
            <li>empresa: {item.empresa}</li>
            <li>filial: {item.filial}</li>
            <li>codigo: {item.codigo}</li>
            <li>loja: {item.loja}</li>
            <li>razao: {item.razao}</li>
            <li>nome: {item.nome}</li>
            <li>tipo: {item.tipo}</li>
            <li>cnpj: {item.cnpj}</li>
            <li>ie: {item.ie}</li>
            <li>pessoa: {item.pessoa}</li>
            <li>email: {item.email}</li>
            <li>cep: {item.cep}</li>
            <li>endereco: {item.endereco}</li>
            <li>bairro: {item.bairro}</li>
            <li>uf: {item.uf}</li>
            <li>municipio: {item.municipio}</li>
            <li>ddd: {item.ddd}</li>
            <li>telefone: {item.telefone}</li>
            <li>tabela: {item.tabela}</li>
          </div>
        )}
      </ul> */}
    </div >
  );
}


export default Page;