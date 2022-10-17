const judgeVegetable = function (vegetables, metric) {
  let maxMetric = 0;
  let maxSubmitter = '';
  for (let item of vegetables){
     if(maxMetric < item[metric]){
      maxMetric = item[metric];
      maxSubmitter = item.submitter;
     }
  }
  return maxSubmitter;
}
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]


console.log(judgeVegetable(vegetables, 'redness'));
// console.log(judgeVegetable(vegetables, 'plumpness'));

