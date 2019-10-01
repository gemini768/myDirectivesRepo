angular.module('NarrowItDownApp').service('MenuSearchService',MenuSearchServiceFunction);

MenuSearchServiceFunction.$inject=['$http'];

function MenuSearchServiceFunction($http){

	var service=this;

	service.getMatchedMenuItems =function(itemDescription){

		return $http({

			url:'https://davids-restaurant.herokuapp.com/menu_items.json'

		}).then(function (result) {

			var returnedItems=result.data.menu_items;

			if(returnedItems){

				var foundItems=[];


				if(itemDescription){

					for(var i=0;i<returnedItems.length-1;i++){
						if(returnedItems[i].description.indexOf(itemDescription)!=-1){
							foundItems.push(returnedItems[i]);
						}
					}

					return {items:foundItems};
				}
				return {items:returnedItems};
			}
   		 
   			return {items:[]};
		},function(error){
			console.log("Error is:"+error);
		});
	}



	
}