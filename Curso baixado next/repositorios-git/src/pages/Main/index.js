import React, { useCallback, useEffect, useState } from "react";
import * as C from './styles';
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa';
import api from '../../services/api';

function Main() {

    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState(JSON.parse(localStorage.getItem('repos')) || []);
    const [loading, setLoading] = useState(false);
    const [alerta, setAlerta] = useState(null);

    useEffect(() => {
        localStorage.setItem("repos",JSON.stringify(repositorios));
    }, [repositorios]);

    const handleInputChange = (e) => {
        setNewRepo(e.target.value);
        setAlerta(null);
    }

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        async function submit() {
            setLoading(true);
            setAlerta(null);
            try {
                if(newRepo.trim() === ''){
                    throw new Error("Você precisa indicar um repositório!");
                }
                const response = await api.get(`repos/${newRepo}`);

                const hasRepo = repositorios.find(repo => repo.name === newRepo);

                if (hasRepo){
                    throw new Error("Repositório já existe!");
                }

                const data = {
                    name: response.data.full_name,
                };
                setRepositorios([...repositorios, data]);
                setNewRepo('');
            } catch (error) {
                setAlerta(true);
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        submit();
    }, [newRepo, repositorios]);


    const handleDelete = useCallback((repo) => {
        const find = repositorios.filter(repositorio => repositorio.name !== repo);
        setRepositorios(find)
    }, [repositorios]);

    return (
        <C.Container>
            <h1>
                <FaGithub size={25} />
                Meus Repositórios
            </h1>

            <C.Form onSubmit={handleSubmit} error={alerta}>
                <input
                    type="text"
                    placeholder="Adicionar Repositórios"
                    value={newRepo}
                    onChange={handleInputChange}
                />

                <C.SubmitButton loading={loading ? 1 : 0}>
                    {loading ? (
                        <FaSpinner color="#FFF" size={14} />
                    )
                        : (
                            <FaPlus color="#FFF" size={14}></FaPlus>
                        )
                    }

                </C.SubmitButton>
            </C.Form >

            <C.List>
                {
                    repositorios.map(repo => (
                        <li key={repo.name}>
                            <span>
                                <C.DeleteButton onClick={() => handleDelete(repo.name)}>
                                    <FaTrash size={14}/>
                                </C.DeleteButton>
                                {repo.name}
                            </span>
                            <a href="">
                                <FaBars size={14}/>
                            </a>
                        </li>
                    ))
                }
            </C.List>
        </C.Container>
    );
}

export default Main;