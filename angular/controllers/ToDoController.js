app.controller('ToDoController', ['$scope', function($scope){
    $scope.addItem = function(item){
        $scope.$parent.patient.todos.push(item);
        $scope.new_item = '';
    }

    $scope.removeItem = function(item){
        var patient = $scope.$parent.patient,
            indexOfSelectedItem = patient.todos.indexOf(item);
        patient.todos.splice(indexOfSelectedItem, 1);
    };
}])