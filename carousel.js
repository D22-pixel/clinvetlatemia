var itemList = document.getElementsByClassName("item-carousel");
var index = 0;

function showSlide(n){
	for(var i =0; i < itemList.length; i++){
		itemList[i].style.display = "none";
	}
	itemList[n].style.display = "block";
}
function next(){
	index++;
	if(index >= itemList.length){
		index = 0
	}
	showSlide(index);
}
setInterval(next, 5000);