import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var workspace_name = "youssef's Workspace"

const SideBar = ()=>{
  const [open ,setopen] = useState(false);
  return (
    <div className={`h-screen flex ${open ? "w-fit":"w-16"}`}>
      <div className="h-screen w-16 bg-dark-background">
        <div onClick={() => setopen(!open)} id="open-collapse" className="text-text-color w-10 h-10 bg-dark-background-2 m-3 mb-5 rounded-lg flex justify-center items-center hover:bg-text-color hover:text-dark-background-2 ease-out duration-300">
          <FontAwesomeIcon icon="bars"/>
        </div>
        <div id="settings" className="text-text-color w-10 h-10 bg-dark-background-2 m-3 rounded-lg flex justify-center items-center hover:bg-text-color hover:text-dark-background-2 hover:rotate-90 ease-out duration-300">
          <FontAwesomeIcon icon="gear" />
        </div>
      </div>
      <div className={`h-screen  bg-dark-background-2 ease-out duration-300 ${open ? "w-48" : "w-0"}`}>
        <div className={`flex justify-center items-center w-44 h-8  bg-dark-background rounded-lg my-2.5 mx-2 text-text-color text-sm hover:bg-text-color hover:text-dark-background-2 ${open ? "scale-100":"scale-0"}`}><p className="hover:bg-text-color hover:text-dark-background-2">{workspace_name}</p></div>
        <div id="icons" className={`flex justify-around ${open ? "scale-100" : "scale-0"} ease-out duration-300`}>
          <div id="new_file" className="text-text-color w-10 h-10 bg-dark-background m-3 rounded-lg flex justify-center items-center hover:bg-text-color hover:text-dark-background-2 ease-out duration-300">
            <FontAwesomeIcon icon="file-circle-plus" />
          </div>
          <div id="new_folder" className="text-text-color w-10 h-10 bg-dark-background m-3 rounded-lg flex justify-center items-center hover:bg-text-color hover:text-dark-background-2 ease-out duration-300">
            <FontAwesomeIcon icon="folder-plus" />
          </div>
          <div id="search" className="text-text-color w-10 h-10 bg-dark-background m-3 rounded-lg flex justify-center items-center hover:bg-text-color hover:text-dark-background-2 ease-out duration-300">
            <FontAwesomeIcon icon="search" />
          </div>
        </div>
      </div>
    </div>

  );
}
export default SideBar
