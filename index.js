// Write your code in this file!

function scuberGreetingForFeet(feet){

  let charge;

  if (feet <= 400){
    charge = 'This one is on me!';
  }else if (feet <= 2500){
    charge = 'I will gladly take your thirty bucks.';
  }else{
    charge = 'No can do.';
  }

  return charge;
}

function ternaryCheckCity(city){
  let go;
  city === 'NYC' ? go = 'Ok, sounds good.' : go = 'No go.';
  return go;
}

function switchOnCharmFromTip(tip){
  let response;
  switch (tip){
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    case 'thanks for everything':
      response = 'Bye.';
      break;
  }
  return response;
}
