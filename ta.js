const smartGarbage = (trash, bins) => {
  const keys = Object.keys(bins);
  if (trash === "waste") {
    bins.waste += 1;
  } else if (trash === "recycling") {
    bins.recycling += 1;
  } else if (trash === "compost") {
    bins.compost += 1;
  } else {
    return undefined;
  }

  return bins;

}
console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));