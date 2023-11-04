import { AlertCircle, Redo2Icon } from "lucide-react";

export default function ErrorStripe() {
  return (
    <div className="flex flex-col py-10 pl-10 justify-center text-rose-500 items-center w-screen">
      <h2 className="justify-center w-full flex flex-col  text-2xl items-center font-bold">
        <AlertCircle width={35} height={35} className="flex flex-col" />{" "}
        Something went wrong....
      </h2>
    </div>
  );
}
