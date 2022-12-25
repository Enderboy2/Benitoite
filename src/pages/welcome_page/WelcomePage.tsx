import { Link } from "react-router-dom";
import read_dir from "@/utils/dir_reader";


async function assign(path:any) {
  var files = read_dir(path);
  console.log(files)
}

const WelcomePage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center w-screen h-screen bg-background">
      <div className="flex justify-center top-10 mb-28">
        <p className="h-48 tracking-normal no-underline normal-case w-96 text-7xl text-center text-white font-poppins"> Welcome to <span className="text-mix">Benitoite</span></p>
      </div>
      <div className="flex justify-center flex-col">
        <button onClick={async ()=>assign("src/data")} className="rounded-3xl h-24 bg-benitoite w-9/12 text-light-white text-4xl m-auto mb-16 font-poppins">Create a New Workspace</button>
        <Link to={"/MainEditor"} className="rounded-3xl h-24 bg-benitoite w-9/12 text-light-white text-4xl m-auto font-poppins">
          <button onClick={async ()=>assign("src/data")} className="w-full rounded-3xl h-24 bg-benitoite  text-light-white text-4xl m-auto font-poppins">Open an Existing Workspace</button>
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage
