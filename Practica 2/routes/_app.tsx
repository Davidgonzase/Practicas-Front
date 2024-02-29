import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Practica 2</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body style="background-color:black;color:white;font-family: Comic Sans MS,Comic Sans, cursive;font-size=100px;">
        <Component />
      </body>
    </html>
  );
}
