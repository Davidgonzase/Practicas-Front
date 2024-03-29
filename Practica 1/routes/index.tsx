import { useSignal } from "@preact/signals";

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
        <h1 class="text-4xl font-bold">Práctica 1 de Front</h1>
        <p class="my-4">
          Estos son los endpoints de la práctica: 
        </p>
      </div>
      <div class="center">
        <br><a href="/startships">/startships</a></br>
        <br><a href="/search">/search</a></br>
        <br><a href="/people">/people</a></br>
      </div>
    </div>
  );
}
