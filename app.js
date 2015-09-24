var outdoorExperts = angular.module('outdoorExperts', ['ui.router']);

outdoorExperts.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: 'QuestionsCtrl'
  });

  $stateProvider.state('questions', {
    url: "/:questionId",
    templateUrl: "partials/questions.answers.html",
    controller: 'AnswersCtrl'
  });

  $stateProvider.state('questions.answers', {
    url: "/:questionId",
    templateUrl: "partials/answers.html",
    controller: 'AnswersCtrl'
  });
});
