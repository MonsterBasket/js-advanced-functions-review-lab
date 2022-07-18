function saturdayFun(activity = "roller-skate")
{
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(highlight = "*"){
    return function(adjective){
        return `You are ${highlight}${adjective}${highlight}!`;
    }
}
let Calculator = {
  "add": (a,b) => a+b,
  "subtract": (a,b) => a-b,
  "multiply": (a,b) => a*b,
  "divide": (a,b) =>a/b    
};
function actionApplyer(start, actions){
  for (const element of actions){
    start = element(start);
  }
  return start;
}