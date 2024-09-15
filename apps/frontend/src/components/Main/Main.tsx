import { Button, buttonVariants } from "@repo/ui/components/ui/button";
import { useBookStore } from "@/store/booksStore";
import { cn } from "@repo/ui/lib/utils";

const Main = () => {
  const amount = useBookStore((state) => state.amount);
  const updateAmount = useBookStore((state) => state.updateAmount);
  return (
    <>
      <div className="text-4xl text-green-500">Buid your own X</div>
      <Button className="mt-5 bg-blue-500 p-4">Click me</Button>
      <div className="mt-10">
        <h1> Books: {amount} </h1>
        <Button
          className={cn(buttonVariants())}
          onClick={() => updateAmount(10)}
        >
          {" "}
          Update Amount{" "}
        </Button>
      </div>
    </>
  );
};

export default Main;
