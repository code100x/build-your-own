import { Button } from "@repo/ui";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex flex-center h-screen justify-center items-center">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col text-center">
          <h2 className="font-semibold text-3xl md:text-4xl tracking-tighter">
            Welcome to{" "}
            <span className="font-bold bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent tracking-tighter">
              Buid your own X
            </span>
          </h2>
        </div>
        <div className="flex flex-col gap-4">
            <Button className=" flex w-full justify-center items-center gap-4 p-4 font-medium md:text-lg bg-gray-600 hover:bg-gray-900 text-white rounded-xl" onClick={() => {}}>
              <FaGoogle size={25}/>
              Sigin with Google
            </Button>
            <Button className=" flex w-full justify-center items-center gap-4 p-4 font-medium md:text-lg bg-gray-600 hover:bg-gray-900 text-white rounded-xl" onClick={() => {}}>
              <FaGithub size={25}/>
              Signin with Github
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
