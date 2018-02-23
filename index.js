function takeANumber(line,nm){
  line.push(nm);
  return 'Welcome, '+nm+" You are number " + line.length+1 + "in line."
}
function nowServing(line){
  if(line.length===0){
    return "There is nobody waiting to be served!"
  }
  return "Currently serving "+line.shift()+".";
}