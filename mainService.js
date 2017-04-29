angular.module('myApp').service('mainService', function($http){
var page = 0;
var editQId = 0;


this.getData = function(){
    return $http({
      method: 'GET',
      url: 'https://practiceapi.devmountain.com/api/trivia/questions/?page=' + page,
    })
}

this.next = function(){
  if(page < 2){
  page+=1;
   }
}

this.previous = function(){
  page -=1;
}


this.editQ = function(obj){
  editQId = obj.id;
  return $http.put('https://practiceapi.devmountain.com/api/trivia/questions/:' + editQId, obj)
}

this.addQToServer = function(){

return $http.post('https://practiceapi.devmountain.com/api/trivia/questions', obj)
}



})