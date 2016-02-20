angular.module('viblogApp.main').filter('reverse', function() {
  return function(items) {
  	var result = null;

  	if (items) {
  		result = items.slice().reverse();
  	}

    return result;
  };
});