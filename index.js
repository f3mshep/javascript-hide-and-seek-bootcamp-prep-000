function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  const list = document.querySelector("#nested")
  return list.querySelector(".target")
}

function increaseRankBy(n){
  const list = document.querySelectorAll("#app ul.ranked-list")

  for (let i = 0, l = list.length; i < l; i++){
    var sublist = list[i].querySelectorAll("li")
    for (let idx2 = 0, l2 = sublist.length; idx2 < l2; idx2++){
      sublist[idx2].innerHTML = parseInt(sublist[idx2].innerHTML) + n
    }
  }
}

function deepestChild(){
  var deepestChild = undefined;
  const list = document.querySelectorAll("#grand-node")
  var sublist = list[0].querySelectorAll("div")

  while (deepestChild === undefined){
    if (sublist.length === 1){
      deepestChild = sublist[0]
      return deepestChild
    }
      sublist = sublist[0].querySelectorAll("div")
    }
  }
