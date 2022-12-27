import React from "react";
import getsub from "./data_converter";
const fs = require('fs').promises;

async function read_dir(directory){
  let files = [];

  const items = await fs.readdir(directory,{ withFileTypes: true })

  for(const item of items){
    if(item.isDirectory()){
      files = files.concat(
        await read_dir(`${directory}/${item.name}`)
      );
    }else{
      files.push(`${directory}/${item.name}`)
    }
  }
  return getsub([items, files]);
}
export default read_dir
