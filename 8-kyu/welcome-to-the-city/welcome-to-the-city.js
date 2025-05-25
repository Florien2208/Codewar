function sayHello( name, city, state ) {
  const fullName=name.join(' ')
  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`
}
console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))