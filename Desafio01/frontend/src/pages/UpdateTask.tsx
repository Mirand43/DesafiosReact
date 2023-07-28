import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";


export default function UpdateTask() {

    const [title, setTitle] = useState('')
    const [descrition, setDescrition] = useState('')
    const { id } = useParams();
    const navigate = useNavigate();

    function editar(event) {
        event.preventDefault();
        axios.put('http://localhost:8081/update/' + id, { title, descrition })
            .then(res => {
                console.log(res);
                navigate('/');
            }).catch(err => console.log(err));
    }

    return (
        <>
            <div className="container mt-16 m-8">
                <div className="grid grid-cols-1 gap-1" >

                    <div>
                        <h1 className="text-black text-5xl font-bold">Editar tarefa</h1>
                        <small className="">Edite a sua tarefa</small>
                    </div>

                    <div>
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" onSubmit={editar}>
                                <div>
                                    <label form="email" className="block text-sm font-medium leading-6 text-gray-900">Título</label>
                                    <div className="mt-2">
                                        <input id="email" name="title" type="text" autoComplete="text" className="block w-full rounded-md border-0 py-1.5
                                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                        focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={e => setTitle(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label form="password" className="block text-sm font-medium leading-6 text-gray-900">Descrição</label>
                                    </div>
                                    <div className="mt-2">
                                        <textarea id="Descrição da tarefa" name="descrition" rows="4" className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
                                            ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={e => setDescrition(e.target.value)}
                                        ></textarea>
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6
                                    text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                    focus-visible:outline-indigo-600">Actualizar</button>
                                </div>


                                <div>
                                    <NavLink to='/' className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6
                                    text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                    focus-visible:outline-red-600">
                                      Cancelar
                                    </NavLink>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}