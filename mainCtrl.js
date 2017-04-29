angular.module('myApp').controller('mainCtrl', function($scope, mainService){

  $scope.difficulty = 0;
  $scope.showModal = false;
  $scope.addingQuestion = false;

    $scope.data = function(){
        mainService.getData().then(function(response){
            $scope.questions = response.data;
        })
        
    }

    $scope.data();

    $scope.next = function(){
        mainService.next();
        $scope.data();
    }

    $scope.previous = function(){
        mainService.previous();
        $scope.data();
    }

    $scope.animalSearch = false;
    $scope.showAnimalSearch = function(){
        $scope.animalSearch = true
    };

    $scope.difficult = function(num){
       $scope.difficulty = num;
    };

    $scope.showQuestion = function(diff){
        if($scope.difficulty === 0 || $scope.difficulty === diff){
           return true; 
        } else{
     return false;
        }
   }

$scope.changeShowModal = function(){
    $scope.showModal = !$scope.showModal;
}

$scope.editQuestion = function(i){
    $scope.showModal = true;
    
    $scope.questionInfo = $scope.questions[i].question;
    $scope.optionsInfo = $scope.questions[i].options;
    $scope.difficultyInfo = $scope.questions[i].difficulty;
    $scope.animalInfo = $scope.questions[i].animal;
    $scope.idInfo = $scope.question[i].id;
}
  
  $scope.addQuestion = function(){
     $scope.showModal = true;
     $scope.addingQuestion = true;

  }

  $scope.editQ = function(){

     var obj = {
        question: $scope.questionInfo,
        options: $scope.optionsInfo,
        difficulty: $scope.difficultyInfo,
        animal: $scope.animalInfo,
        id: $scope.idInfo,
     }


      mainService.editQ(obj).then(function(){;
      $scope.getData();
    


      })
  }

   $scope.addQToServer = function(){
          var obj = {
        question: $scope.questionInfo,
        options: $scope.optionsInfo,
        difficulty: $scope.difficultyInfo,
        animal: $scope.animalInfo,
        id: $scope.idInfo,
     }

mainService.addQToServer(obj).then(function(){
    $scope.getData();
})

      }
  
})