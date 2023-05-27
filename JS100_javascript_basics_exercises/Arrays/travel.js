let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];
  
  const contains = (name, destinations) => {
    return destinations.filter(city => city === name)
                       .length > 0;
  }
  
  console.log(contains('Barcelona', destinations));
  console.log(contains('Nashville', destinations));
  
  
  