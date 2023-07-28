import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";


export default function AddTask() {

  const [title, setTitle] = useState('')
  const [descrition, setDescrition] = useState('')
  const navigate = useNavigate();

  function cadastrar(event) {
    event.preventDefault();
    axios.post('http://localhost:8081/create', { title, descrition })
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
            <h1 className="text-slate-700 text-5xl font-bold">Registrar tarefa</h1>
            <small className="mt-2 text-slate-400">Adicionar nova tarefa</small>
          </div>

          <div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={cadastrar}>
                <div>
                  <label form="email" className="block text-sm font-medium leading-6 text-gray-900">Título</label>
                  <div className="mt-2">
                    <input id="email" name="title" type="text" autoComplete="text" required className="block w-full rounded-md border-0 py-1.5
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
                  focus-visible:outline-indigo-600">Cadastrar</button>
                </div>

                <div>
                  <NavLink to='/' className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6
                  text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-red-600">Cancelar</NavLink>
                </div>

              </form>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}