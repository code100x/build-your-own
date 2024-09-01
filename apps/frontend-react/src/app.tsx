import React from "react";
import { Button } from "@ui/button";

function App(): JSX.Element {
  return (
    <div className="bg-glow-conic min-h-screen flex items-center justify-center">
      <h1 className="text-4xl ui-font-bold ui-text-white">Hello, Tailwind!</h1>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
}

export default App;
