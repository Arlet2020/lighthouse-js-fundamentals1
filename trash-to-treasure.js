const smartGarbage = function (trash, bins) {

  let smartGarbage = function (trash, bins) {
    let key = Object.keys(bins);
    if (trash === 'recycling') {
      bins.recycling += 1;
    } else if (trash === 'waste') {
      bins.waste += 1;
    } else if (trash = 'compost') {
      bins.compost += 1;
    } else {
      return undefined;
    }

    return bins;
  }
//smart cans >> bins (waste recycling compost)
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));