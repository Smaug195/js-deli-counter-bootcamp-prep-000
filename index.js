function takeANumber(line,nm){
  line.push(nm);
  return 'Welcome, '+nm+". You are number " + line.length + " in line."
}
function nowServing(line){
  if(line.length===0){
    return "There is nobody waiting to be served!"
  }
  return "Currently serving "+line.shift()+".";
}
function currentLine(line){
  var tmpStr="";
  if(line.length===0){
    return "The line is currently empty."
  }
    tmpStr=tmpStr+"The line is currently: "
    for(let i=0;i<line.length;i++){
      tmpStr+=(i+1)+". "+line[i]+", "
    }
  return tmpStr
}