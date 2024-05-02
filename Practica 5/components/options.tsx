import { FunctionComponent } from "preact";
import { Signal } from "@preact/signals";
import { STATES } from "../types.ts";

const Options: FunctionComponent<{ state: Signal }> = ({ state }) => {
  const handleChange = (e:any) => {
    state.value = e.target.value;
  };

  return (
    <select value={state.value} onChange={handleChange}>
      <option value={STATES.TODO}>{STATES.TODO}</option>
      <option value={STATES.PRG}>{STATES.PRG}</option>
      <option value={STATES.RVW}>{STATES.RVW}</option>
      <option value={STATES.DONE}>{STATES.DONE}</option>
    </select>
  );
};

export default Options;
