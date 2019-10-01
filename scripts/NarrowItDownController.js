angular.module('NarrowItDownApp').controller('NarrowItDownController',ControllerFunction);

ControllerFunction.$inject=['MenuSearchService'];

function ControllerFunction(MenuSearchService){

	var NarrowItDownController=this;
	NarrowItDownController.found=[];

	NarrowItDownController.getMatchedMenuItems =function(itemDescription){
		var searchItems=MenuSearchService.getMatchedMenuItems (itemDescription);
		searchItems.then(function(data){
			NarrowItDownController.found=data;
		},function(error){
			console.log("Error is:"+error);
			NarrowItDownController.found=[];
		});

	}


	NarrowItDownController.onRemove=function(index){
		NarrowItDownController.found.items.splice(index,1);
	}

	
}