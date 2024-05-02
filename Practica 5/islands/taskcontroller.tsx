import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { Error, STATES, task } from "../types.ts";
import { useSignal } from "@preact/signals";
import Options from "../components/options.tsx";

const Taskcontroller: FunctionComponent = () => {
  //Modals
  const [modal1, setModal1] = useState<boolean>(false);
  const [taskmodal, setModal2] = useState<boolean>(false);
  //Arrays
  const [tasks, settasks] = useState<task[]>([]);
  //Errors
  const [error, setError] = useState<Error>({ error: false, message: "" });
  //New task
  const [name, setname] = useState<string>("");
  const state = useSignal<STATES>(STATES.NULL);
  //Act task
  const [atask, setatask] = useState<task>({ name: "", type: STATES.NULL });
  function reset() {
    setModal1(false);
    setModal2(false);
    setname("");
    state.value = STATES.NULL;
    setError({ error: false, message: "" });
    setatask({ name: "", type: STATES.NULL });
  }

  function newtask(name: string, state: STATES) {
    if (name == "" || state == STATES.NULL) {
      setError({ error: true, message: "Algun campo falta" });
    } else {
      const ctask = tasks.find((e) => e.name === name);
      if (ctask) {
        setError({ error: true, message: "Tarea ya existe" });
      } else {
        settasks([...tasks, { name: name, type: state }]);
        reset();
      }
    }
  }

  function acttask(
    name: string,
    state: STATES,
    task: task,
  ) {
    if (name == "" || state == STATES.NULL) {
      setError({ error: true, message: "Datos incorrectos" });
    } else {
      if (task.name == name) {
        settasks(tasks.map((e: task) => {
          if (e == task) {
            e.type = state;
          }
          return e;
        }));
        reset();
      } else if (task.name != name) {
        const ctask = tasks.find((e) => e.name === name);
        if (ctask) {
          setError({ error: true, message: "Tarea ya existe" });
        } else {
          settasks(tasks.map((e: task) => {
            if (e == task) {
              e.name = name;
              e.type = state;
            }
            return e;
          }));
          reset();
        }
      }
    }
  }

  return (
    <div class="mainpage">
      {(modal1 || taskmodal) && <div class="tupac" onClick={(e) => reset()} />}
      {(modal1 && !taskmodal) &&
        (
          <div class="tupacmodal">
            <div>
              <p>Nombre de la tarea</p>
              <input
                value={name}
                onInput={(e) => setname(e.currentTarget.value)}
              />
            </div>
            <div>
              <p>Estado de la tarea</p>
              <Options state={state} />
            </div>
            <div>
              {error.error && <p class="red">{error.message}</p>}
              <button onClick={(e) => newtask(name, state.value)}>Crear</button>
            </div>
          </div>
        )}
      {(modal1 && taskmodal) && (
        <div class="tupacmodal2">
          <div>
            <div>
              <p>Nombre de la tarea</p>
              <input
                value={name}
                onInput={(e) => setname(e.currentTarget.value)}
              />
            </div>
            <div>
              <p>Estado de la tarea</p>
              <Options state={state} />
            </div>
          </div>
          <div>
            {error.error && <p class="red">{error.message}</p>}
            <button onClick={(e) => acttask(name, state.value, atask)}>
              Actualizar
            </button>
          </div>
        </div>
      )}
      <div class="newbutton">
        <button onClick={(e) => setModal1(true)}>Crear</button>
      </div>
      <div class="columns">
        <div class="column">
          <h2>TODO</h2>
          <div class="list">
            {tasks.map((item) => {
              if (item.type == STATES.TODO) {
                return (
                  <div
                    class="inside"
                    onClick={(e) => {
                      setModal1(true);
                      setModal2(true);
                      setatask(item);
                      setname(item.name);
                      state.value = item.type;
                    }}
                  >
                    {item.name}
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div class="column">
          <h2>In progress</h2>
          <div class="list">
            {tasks.map((item) => {
              if (item.type == STATES.PRG) {
                return (
                  <div
                    class="inside"
                    onClick={(e) => {
                      setModal1(true);
                      setModal2(true);
                      setatask(item);
                      setname(item.name);
                      state.value = item.type;
                    }}
                  >
                    {item.name}
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div class="column">
          <h2>In review</h2>
          <div class="list">
            {tasks.map((item) => {
              if (item.type == STATES.RVW) {
                return (
                  <div
                    class="inside"
                    onClick={(e) => {
                      setModal1(true);
                      setModal2(true);
                      setatask(item);
                      setname(item.name);
                      state.value = item.type;
                    }}
                  >
                    {item.name}
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div class="column">
          <h2>DONE</h2>
          <div class="list">
            {tasks.map((item) => {
              if (item.type == STATES.DONE) {
                return (
                  <div
                    class="inside"
                    onClick={(e) => {
                      setModal1(true);
                      setModal2(true);
                      setatask(item);
                      setname(item.name);
                      state.value = item.type;
                    }}
                  >
                    {item.name}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taskcontroller;
