import { Button } from "@repo/ui";
import { useBookStore } from "@/store/booksStore";
import ProfileDropdown from "../ProfileDropDown";

const Main = () => {
  const amount = useBookStore((state) => state.amount);
  const updateAmount = useBookStore((state) => state.updateAmount);
  return (
    <>
      <div className="m-8 flex justify-between">
        <p className="text-4xl text-black font-extrabold">Build your own X</p>
        <ProfileDropdown />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="mt-10 text-center">
          <h1 className="text-2xl font-medium">Books: {amount}</h1>
          <Button
            className="mt-5 bg-slate-500 p-4"
            onClick={() => updateAmount(10)}
          >
            Update Amount
          </Button>
        </div>
      </div>
    </>
  );
};

export default Main;
