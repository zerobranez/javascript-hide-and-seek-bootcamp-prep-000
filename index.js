function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}
function increaseRankBy(n){
  var list = document.querySelectorAll('.ranked-list')
  for (var i = 0, l = list.length; i < l; i++){
        var value = parseInt(list[i].innerHTML)
        value += n
        list[i].innerHTML = value
      }
  }
function deepestChild(){
  var parent = document.querySelector('div#grand-node')
  var child = parent[0]
  while (child !== undefined){
    parent = child
    child = parent.querySelector('div')
  }
  return parent
  }
