var appX = angular.module('mainApp', []);

appX.controller('app', function($scope){
    $scope.remember = [];
    var taskData = localStorage['taskList'];
    //console.log(taskData);
    if(taskData !== undefined){
        $scope.remember = JSON.parse(taskData);
    }
    
    $scope.searchEnter = function(){
        
        // check for enter key and empty input bar
        
        if(event.which == 13 && $scope.task != ""){
            $scope.addTask();
            console.log(event.which || event.keyCode);
        }
    };
    $scope.addTask = function(){
        //alert ('save');  
        $scope.remember.push({'taskMessage':$scope.task, 'status':false});
        //console.log($scope.remember);
        $scope.task = '';
        localStorage['taskList'] = JSON.stringify($scope.remember);
       //console.log(localStorage);
    };
    $scope.contentEdit = function(msg){
        //console.log($scope.remember);
        
        for(i=0;i<$scope.remember.length;i++){
            if($scope.remember[i].taskMessage == msg){
                $scope.remember[i].taskMessage = event.target.innerText;
            }
        }
        localStorage['taskList'] = JSON.stringify($scope.remember);
        
        //console.log($scope.remember);
        
         event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false"; 
    };
    
    $scope.changeStatus = function(x){
        //console.log(x);
        localStorage['taskList'] = JSON.stringify($scope.remember);
    };
    
    $scope.enterAgain = function(msg){
       if(event.which == 13 && msg != ""){
            $scope.contentEdit(msg);
        } 
    };
    
    $scope.remove = function(rem){
        $scope.remember.splice(rem,1);
        localStorage['taskList'] = JSON.stringify($scope.remember);
    };
});