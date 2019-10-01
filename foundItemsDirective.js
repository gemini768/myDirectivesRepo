angular.module('NarrowItDownApp').directive('foundItems', FoundItemsFunction);

function FoundItemsFunction(){

  return {
    restrict: 'E',
    scope:{
    	items:'<',
    	onRemove: '&'
    },
    templateUrl: 'foundItemsDirectiveTemplate.html',
    controller: controllerFunction
  };

  function controllerFunction(){
  	var foundItems=this;

  }

}