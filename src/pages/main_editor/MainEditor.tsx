import SideBar from "@/components/SideBar";
import { markdown } from "@codemirror/lang-markdown";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import ixora, { codeblock, headings, lists } from '@retronav/ixora';
import { basicSetup } from "codemirror";

const MainEditor:React.FC = () =>{
  new EditorView({
    doc: 'console.log("hello")',
    extensions: [
      basicSetup,
      headings(),
      codeblock(),

    ],
    parent: document.querySelector("#editor") as Element
  });
  return (
    <div className="flex bg-dark-background">
      <SideBar/>
      <div className="w-full h-screen ease-in duration-300 flex">
        <div id="editor" className="h-screen w-full text-text-color">

        </div>
      </div>
    </div>
  );
}
export default MainEditor
