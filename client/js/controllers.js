angular.module("app")
  .controller('MainController', ['$http', MainController]);

  //CONTROLLER FOR QUERYING EL GUARDIAN API
  function MainController ($http){
    var vm = this;
    //CURRENTTITLE, CURRENTURL, AND CURRENTSENTIMENT ARE TEMPORARY AND FOR TESTING ONLY
    vm.currentTitle;
    vm.currentURL;
    vm.currentSentiment;

    vm.title = "Life is Short, and Then You Die :)";
    //QUERYING THE GUARDIAN FOR 50 STORIES
    vm.getArticles = function(topic) {
      $http.get('http://content.guardianapis.com/search?q='+topic+'&page-size=50&from-date=2015-01-01&section=world&api-key=5297a5ae-063b-42f1-a315-22e0168546e0&show-blocks=all').success(function(res) {
        console.log(res);
        vm.currentTitle = res.response.results[0].webTitle;
        vm.currentURL = res.response.results[0].webUrl;
        for (var i = 0; i < res.response.results.length; i++) {

          // Function for getting sentiment
          // $http({
          //   method: 'POST',
          //   url: 'https://buzzlogix-text-analysis.p.mashape.com/sentiment',
          //   headers: {
          //   'X-Mashape-Key': 'tKN2shyLLimshtwjog91r18SHQdVp1NAYE2jsn83if2xCZHEia',
          //   'content-type': 'text/plain'
          //   },
          //   data: {text: res.response.results[i].blocks.body[0].bodyTextSummary}
          // }).then(function(data) {
          //   // console.log(data.data.Predicted_Class)
          //   // console.log(data.data.Probability);
          //   vm.currentSentiment = data.data.Predicted_Class;
          // }, function(data) {
          //   console.log('error: ' + data);
          // })

          //Here will go the knex function to push stories into the table
          var title = res.response.results[i].webTitle;
          var url = res.response.results[i].webUrl;
          $http({
            method: 'POST',
            url: 'http://localhost:3000/insert',
            data: {
              title: title,
              url: url
            }
          }).then(function(data) {
            console.log('success ' + data);
          })
        }
      })
    };
  };



  //FUNCTION TO GET SENTIMENT, WILL IMPLEMENT ON STORIES PULLED FROM STORIES TABLE
  // $http({
  //   method: 'POST',
  //   url: 'https://buzzlogix-text-analysis.p.mashape.com/sentiment',
  //   headers: {
  //   'X-Mashape-Key': 'tKN2shyLLimshtwjog91r18SHQdVp1NAYE2jsn83if2xCZHEia',
  //   'content-type': 'text/plain'
  //   },
  //   data: {text: res.response.results[1].blocks.body[0].bodyTextSummary}
  // }).then(function(data) {
  //   console.log(data.data.Predicted_Class)
  //   console.log(data.data.Probability);
  //   vm.currentSentiment = data.data.Predicted_Class;
  // }, function(data) {
  //   console.log('error: ' + data);
  // })
