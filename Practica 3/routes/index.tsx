import { useSignal } from "@preact/signals";
import Counter from "../islands/Jobs.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div>Hola</div>
  );
}
