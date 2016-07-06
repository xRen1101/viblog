angular.module('viblogApp.main').filter('notEmptyTypes', function() {
  return function(types, posts) {
    var filteredTypes = [];
    angular.forEach(types, function(type) {
      angular.forEach(posts, function(post) {
        if (post.type.id == type.id && filteredTypes.indexOf(type) == -1) {
          filteredTypes.push(type);
        }
      });
    });
    return filteredTypes;
  }
});