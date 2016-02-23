angular.module("app")
  .controller('MainController', ['$http', MainController]);

  function MainController ($http){
    var vm = this;

    vm.title = "Life is Short, and Then You Die :)";
    vm.getSentiment = function() {
      $http({
        method: 'POST',
        url: 'https://buzzlogix-text-analysis.p.mashape.com/sentiment',
        headers: {
        'X-Mashape-Key': 'tKN2shyLLimshtwjog91r18SHQdVp1NAYE2jsn83if2xCZHEia',
        'content-type': 'text/plain'
        },
        data: {text: 'Mistletoe is a wonderful plant, and not just for Christmas. It is actually a vampire, a parasite which sucks water and minerals out of the trees it grows on, drawing the sap out with such power it can leave the trees short of water. For Christmas, though, this has been a great year for mistletoe. The season began well in February and March when the flowers came out in dry, sunny, weather and were pollinated well by early flying insects. “You could walk into an orchard and hear the buzzing from early emerging insects looking for nectar,” says Jonathan Briggs, an ecologist and mistletoe specialist. Sunshine and showers over the summer and autumn made the berries swell, leading to plenty of big succulent fruits now. That’s good for Christmas decorations and also for the mistletoe itself, because fat berries are an invitation to birds eat and spread the seeds. Most birds do avoid these berries but mistle thrushes feed on them – although only when food runs short late winter. They drop the seeds out in their droppings. Blackcaps too are superb at spreading mistletoe because they wipe the sticky seeds off their beaks straight on to tree branches where the seeds can germinate. And because more blackcaps are overwintering in Britain – possibly because of climate change – the mistletoe is thriving. That said, there’s still a lot we don’t understand about the plant. Mistletoe’s stronghold is Herefordshire, Gloucester shire, Somerset and Monmouthshire, for reasons no one understands, though elsewhere there are big local populations, such as in Cambridge and Bushey Park outside London. But the plants seem reluctant to spread further afield.'}
      }).then(function(data) {
        console.log(data.data.Predicted_Class)
        console.log(data.data.Probability);
      }, function(data) {
        console.log('error: ' + data);
      })
    }
  };
