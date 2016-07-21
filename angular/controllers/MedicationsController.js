app.controller('MedicationsController', ['PatientService','$scope', '$log', function(PatientService, $scope, $log){
    $scope.medInfo = null;
    $scope.medInfoHeader = null;
    $scope.showInfo = function(medication, tradename){
        $.ajax({
            type: "GET",
            url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" + medication + "&callback=?",
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
            
                var markup = data.parse.text["*"];
                var i = $('<div></div>').html(markup);
                
                // remove links as they will not work
                i.find('a').each(function(){
                    $(this).replaceWith($(this).html()); 
                });
                
                // remove bolds
                i.find('b').each(function(){
                    $(this).replaceWith($(this).html());
                });

                // remove any references
                i.find('sup').remove();
                
                // remove cite error
                i.find('.mw-ext-cite-error').remove();
                
                var msg = $(i).find('p').html();

                $scope.medInfo = msg;
                // $scope.medInfoHeader = data.parse.title;
                $scope.medInfoHeader = tradename + ' (' + medication + ')';
            },
            error: function (error) {
                $log.log(error);
            }
        });    
    };
}]);

