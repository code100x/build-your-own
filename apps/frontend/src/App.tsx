import { Button, buttonVariants } from "@repo/ui/button";
import { cn } from "@repo/ui/lib";
const App = () => {
  return (
    <div className="flex items-center flex-col h-screen justify-center">
      <h1 className="text-lg font-bold">Hi, From Vite</h1>
      <Button className={cn(buttonVariants({ variant: "secondary" }))}>
        Shadcn is working
      </Button>
      <Button className={cn(buttonVariants({ variant: "default" }))}>
        Shadcn is working
      </Button>
    </div>
  );
};

export default App;
