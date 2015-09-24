outdoorExperts.factory('UtilitiesFactory', function() {
  return {
    findById: function(collection, id) {
      for (var i = 0; i < collection.length; i++) {
        if (collection[i].id == id) {
          return collection[i];
        }
      }
      return null;
    }
  };
  new KudosPlease({
  el : '.kudos',
  duration : 1500,
  persistent : true,
  status : {
    alpha: 'fontelico-emo-shoot',
    beta: 'fontelico-emo-shoot',
    gamma: 'fontelico-emo-beer'
  }
});
});
