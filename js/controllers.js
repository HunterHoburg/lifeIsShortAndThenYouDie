angular.module("app")
  .controller('MainController', ['$http', MainController]);

  function MainController ($http){
    var vm = this;
    vm.currentTitle;
    vm.currentUrl;
    vm.currentSentiment;
    //LISA, Thank You Dear
    vm.title = "Life is Short, and Then You Die :)";
    vm.getArticles = function(topic) {
      $http.get('http://content.guardianapis.com/search?q='+topic+'&page-size=50&from-date=2015-01-01&section=world&api-key=5297a5ae-063b-42f1-a315-22e0168546e0').success(function(res) {
        console.log(res);
        vm.currentTitle = res.response.results[1].webTitle;
        vm.currentUrl = res.response.results[1].webUrl;
        $http({
          method: 'POST',
          url: 'https://buzzlogix-text-analysis.p.mashape.com/sentiment',
          headers: {
          'X-Mashape-Key': 'tKN2shyLLimshtwjog91r18SHQdVp1NAYE2jsn83if2xCZHEia',
          'content-type': 'text/plain'
          },
          data: {text: res.response.results[1].webTitle}
        }).then(function(data) {
          console.log(data.data.Predicted_Class)
          console.log(data.data.Probability);
          vm.currentSentiment = data.data.Predicted_Class;
        }, function(data) {
          console.log('error: ' + data);
        })
      })
    };
  };
