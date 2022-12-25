function getsub(files: Array<any>){
  let length:number= files.length;
  for(let i = 0;i<length;i++){
    console.log(files[i] + " - custom");
    files[i] += " - custom";
    }
    console.log(files);
  }

export default getsub
