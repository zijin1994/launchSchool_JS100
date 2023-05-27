const extractRegion = locale => locale.split("_")[1].split(".")[0];

console.log(extractRegion('en_US.UTF-8'));
console.log(extractRegion('en_GB.UTF-8'));
console.log(extractRegion('ko_KR.UTF-16'));