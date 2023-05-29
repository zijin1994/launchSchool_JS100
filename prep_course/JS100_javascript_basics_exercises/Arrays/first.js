const first = (array) => array[0];



console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'
//return undefined if array is empty, since access index that doesnt exist or outside the bounds behave the same.