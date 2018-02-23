function takeANumber(line,nm){
  line.push(nm);
  return line.length+1
}
function nowServing(line){
  if(line===[]){
    return "There is nobody waiting to be served!"
  }
  return line.shift();
}