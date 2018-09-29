var argv = process.argv.slice(2);

function popBottles(investment){
  var totalBottles = 2 * investment - 5;
  var output = {'Total Bottles' : totalBottles,

                'Total Earned' : { 'Bottles' : parseInt(totalBottles/2,10),
                                 'Caps' : parseInt (totalBottles/4,10)}
                               };

  return output
}


console.log("$50 investement will get me",popBottles(argv),"bottles");