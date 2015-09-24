outdoorExperts.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.questions =[{ title: 'How do I hike?', category: 'hiking', id: 1, answers: [{fullAnswer: 'You just start walking!'}]}, {title: 'How do I get into backpacking?', category: 'backpacking', id: 2, answers: [{fullAnswer: 'Get a big backpack, fill it, and go until it hurts.'}]}];
  factory.addQuestion = function() {
    factory.questions.push({ title: factory.questionTitle, category: factory.questionCategory, id: factory.questions.length +1, answers: [] });
    factory.questionTitle = null;
  };

  return factory;
});
