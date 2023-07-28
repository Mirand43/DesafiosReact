import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Task() {

  const [task, setTask] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/')
      .then(res => setTask(res.data))
      .catch(err => console.log(err));
  })

  const eliminar = async (id: number) => {
    try{
      await axios.delete('http://localhost:8081/task/'+id)
      window.location.reload()
    }catch(err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="container mt-16 m-8">
        <div className="grid grid-cols-1 gap-1">

          <div>
            <h1 className="text-slate-700 text-5xl font-bold">
              Tarefas
            </h1>
            <small className="ml-1 text-slate-400">Lista de tarefas</small>
          </div>

          {/* button addTask */}
          <div className="mt-4 mb-3">
            <NavLink
              to="/AddTask"
              className="inline-block rounded-md border border-transparent bg-blue-400 px-4 py-2 text-center font-bold text-white hover:bg-blue-500"
            >
              Add Tarefa
            </NavLink>
          </div>

          {/* Table */}
          <div>
            <div className="table w-full">
              <div className="table-header-group">
                <div className="table-row">
                  <div className="table-cell text-left font-bold">Tarefa</div>
                  <div className="table-cell text-left font-bold">Descrição</div>
                  <div className="table-cell text-left font-bold pb-2">Acção</div>
                </div>
              </div>
              <div className="table-row-group">
                {
                  task.map((data, i) => (
                    <div key={i} className="table-row">
                      <div className="table-cell mb-2 mt-4 pb-4">
                        {data.Title}
                      </div>
                      <div className="table-cell mb-2 mt-4">
                        {data.Descrition}
                      </div>
                      <div className="table-cell mb-2 mt-4">
                        <NavLink to={`update/${data.ID}`}
                          className="mr-1 inline-block rounded-md border border-transparent bg-blue-400 px-2 py-1 text-center font-bold text-white hover:bg-blue-500"
                        >
                          edit
                        </NavLink>
                        <button
                          className="ml-1 inline-block rounded-md border border-transparent bg-red-400 px-2 py-1 text-center font-bold text-white hover:bg-red-500"
                          onClick={e => eliminar(data.ID)}
                        >
                          Delet
                        </button>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}