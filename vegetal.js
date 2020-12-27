let judgeVegetable = function (vegetables, metric) {
  let name = '';
  let number = 0;
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > number) {
      number = vegetables[i][metric];
      name = vegetables[i].submitter;
    }
  }
  return name
};

console.log(judgeVegetable('Old man Franklin'))