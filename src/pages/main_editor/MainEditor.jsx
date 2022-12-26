import SideBar from "@/components/SideBar";
import Editor from "./Editor";

export default function MainEditor(){
  return (
    <div className="flex bg-dark-background">
      <SideBar/>
      <div className="w-full h-screen ease-in duration-300 flex">
        <Editor />
      </div>
    </div>
  );
}

