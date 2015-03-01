app.controller('quizCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
    $scope.mode = 'quiz';
    $scope.UserName=$routeParams.userName;
    $scope.goTo = function (index) {
        if (index > 0 && index <= $scope.totalItems) {
            $scope.currentPage = index;
            $scope.mode = 'quiz';
        }
        if (index > $scope.totalItems) {
            $scope.onSubmit();
        }
    }

    $scope.onSelect = function (option) {
        $scope.questions[$scope.currentPage - 1].selected = option;
        $scope.questions[$scope.currentPage - 1].Answered = option.Id;
    }

    $scope.onSubmit = function () {
        var answers = [];
        var correctAnswersCount = 0;
        $scope.questions.forEach(function (q, index) {
            angular.forEach(q.Options,function(eachOption){
                if(eachOption.Id==q.Answered && eachOption.IsAnswer==true)
                {
                    correctAnswersCount+=1;
                }
            });
            
            answers.push({ 'QuizId': $scope.quiz.Id, 'QuestionId': q.Id, 'Answered': q.Answered });
        });

        // Post your data to the server here. answers contains the questionId and the users' answer.
        //$http.post('api/Quiz/Submit', answers).success(function (data, status) {
        //    alert(data);
        //});
        //console.log(answers);
        $scope.score=(correctAnswersCount/$scope.questions.length)*100;
        $scope.mode = 'result';
    }
    $scope.itemsPerPage = 1;

    $scope.pageCount = function () {
        return Math.ceil($scope.questions.length / $scope.itemsPerPage);
    };

    $scope.loadQuiz = function (file) {
        $http.get(file)
         .then(function (res) {
             $scope.quiz = res.data[0].quiz;
             $scope.questions = res.data[0].questions;
             $scope.totalItems = $scope.questions.length;
             $scope.currentPage = 1;

             $scope.$watch('currentPage + itemsPerPage', function () {
                 var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                   end = begin + $scope.itemsPerPage;

                 $scope.filteredQuestions = $scope.questions.slice(begin, end);
             });
         });
    }
    $scope.loadQuiz('data/jsonData.js');

    $scope.isAnswered = function (index) {
        var answered = 'Not Answered';
        $scope.questions[index].Options.forEach(function (element, index, array) {
            if (element.Selected == true) {
                answered = 'Answered';
                return false;
            }
        });
        return answered;
    };

    $scope.isCorrect = function (question) {
        var result = { answer: 'correct' };
        var correctAns = "";
        question.Options.forEach(function (option, index, array) {
            
            if(option.IsAnswer==true){
                correctAns = option.Name;
            }
            if ($scope.toBool(option.Selected) != option.IsAnswer) {
                result.answer = 'wrong';
               
                //return result;
            }
        });
        result.correctAnswer = correctAns;
        return result;
    };

    $scope.toBool = function (val) {
        if (val == 'undefined' || val == null || val == '' || val == 'false' || val == 'False')
            return false;
        else if (val == true || val == 'true' || val == 'True')
            return true;
        else
            return 'Not Identified';
    };
}]);