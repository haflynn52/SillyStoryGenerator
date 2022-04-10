var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']

let insertY = ['the soup kitchen', 'Disneyland', 'the White House']

let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']

randomize.addEventListener('click', result);

function result() {
  let randStory = storyText;

  let xRand = randomValueFromArray(insertX);
  let yRand = randomValueFromArray(insertY);
  let zRand = randomValueFromArray(insertZ);

  randStory = randStory.replace(':insertx:',xRand);
  randStory = randStory.replace(':insertx:',xRand);
  randStory = randStory.replace(':inserty:',yRand);
  randStory =
  randStory.replace(':insertz:',zRand);

  if(customName.value !== '') {
    let name = customName.value;
    randStory = randStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
      const weight = Math.round(300*0.0714286) + ' stone';
      const temperature =  Math.round((94-32) * 0.5556) + ' centigrade';
      randStory = randStory.replace('94 fahrenheit',temperature);
      randStory = randStory.replace('300 pounds',weight);
  }

  story.textContent = randStory;
  story.style.visibility = 'visible';
}
