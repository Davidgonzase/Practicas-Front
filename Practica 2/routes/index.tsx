import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Práctica 2</h1>
        <p>Endpoints de la práctica 2</p>
        <p class="my-4">
          <p><a href="/user">/user</a></p>
          <p><a href="/city">/city</a></p>
          <p><a href="/dog">/dog</a></p>
        </p>
      </div>
    </div>
  );
}
