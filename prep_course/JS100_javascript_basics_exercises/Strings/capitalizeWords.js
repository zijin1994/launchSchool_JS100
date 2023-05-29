const capitalizeWords = string => {
  return string.split(' ')
               .map((word) => word[0].toUpperCase() + word.slice(1))
               .join(' ')
               
}


console.log(capitalizeWords('launch school tech & talk'));