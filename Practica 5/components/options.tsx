import { FunctionComponent } from "preact";
import { Signal } from "@preact/signals";
import { STATES } from "../types.ts";

const Options: FunctionComponent<{ state: Signal }> = ({ state }) => {
  return (
    <select value={state.value}>
      <option
        value={STATES.TODO}
        onClick={(e) => {
          state.value = STATES.TODO;
        }}
      >
        {STATES.TODO}
      </option>
      <option
        value={STATES.PRG}
        onClick={(e) => {
          state.value = STATES.PRG;
        }}
      >
        {STATES.PRG}
      </option>
      <option
        value={STATES.RVW}
        onClick={(e) => {
          state.value = STATES.RVW;
        }}
      >
        {STATES.RVW}
      </option>
      <option
        value={STATES.DONE}
        onClick={(e) => {
          state.value = STATES.DONE;
        }}
      >
        {STATES.DONE}
      </option>
    </select>
  );
};

export default Options;
