function takeANumber(line,nm){
  line.push(nm);
  return line.length+1
}
function nowServing(line){
  if(line.length===0){
    return "There is nobody waiting to be served!"
  }
  return "Currently serving "+line.shift()+".";
}