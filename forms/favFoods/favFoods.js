
let goodFood = ["pizza","apples","cookies","sushi","pasta","steak"]

favFoods.onshow=function(){
  lstFood.clear()
  for (i=0; i <= goodFood.length -1; i++) {
    lstFood.addItem(goodFood[i])
}
}


lstFood.onclick=function(choice){
  if (typeof(choice) == "object")
  return
  let foodChoice = goodFood[choice]
  lblAnswer.value =`You picked ${foodChoice}`
}

btnDessert.onclick=function(){
  ChangeForm(dessertVoting)
}

