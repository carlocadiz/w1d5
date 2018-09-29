var argv = process.argv.slice(2);

function popBottles(investment){
  var totalBottles = 2 * investment - 5;
  var output = {'TOTAL BOTTLES' : totalBottles,
                'REMAINING BOTTLES' : totalBottles % 2,
                'REMAINING CAPS' : totalBottles % 4,

                'TOTAL EARNED' : { 'BOTTLES' : parseInt(totalBottles/2,10),
                                   'CAPS' : parseInt (totalBottles/4,10)}
                               };

  return output
}



console.log(popBottles(argv));