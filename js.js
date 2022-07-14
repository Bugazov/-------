function generateSingleStanza(number){
  if(number >=5  && number <= 19){
    return `${number} бутылок пива на стене, ${number} бутылок пива!, возьми одну, пусти по кругу, ${number -1} пива на стене`
  }else if( number % 10 === 2 || number % 10 === 3 || number % 10 === 4){
    return `${number} бутылки пива на стене, ${number} бутылки пива!, возьми одну, пусти по кругу, ${number -1} пива на стене`
  }else if( number % 10 ===1){
    return `${number} бутылка пива на стене, ${number} бутылка пива!, возьми одну, пусти по кругу, ${number -1} пива на стене`
  } else{ return`${number} бутылок пива на стене, ${number} бутылок пива!, возьми одну, пусти по кругу, ${number -1} пива на стене`}
} 

console.log(generateSingleStanza(101))