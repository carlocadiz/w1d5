var list = [];

function storeList(number){
 list.push(number);
}

function sortedList(){
  sortTheList()
  return list;
}

function sortTheList(){
 list.sort(function(a,b){
  return a - b
})
}


module.exports = {
  sortedList : sortedList,
  storeList : storeList
}


