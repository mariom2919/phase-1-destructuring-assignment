const farmAnimals = 'cow sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const sounds = ['moo', 'baa', 'oink', 'cluck', 'neigh'];
const [moo, baa, oink, cluck, neigh] = sounds;

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const [bessie, dolly, babe, little] = farmAnimals.split(' ');

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const blackAndWhite = bessie; // 'cow'
const black = dolly; // 'sheep'
const pink = babe; // 'pig'

// Arrays

// 4. Use destructuring to declare the seven traditional rainbow color variables using the color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Use destructuring to declare six rainbow color variables using initials.
const [r, o, y, g, b, v] = colors.map(color => color.charAt(0));

// 6. Use destructuring to declare Indigo using indg.
const [indg] = colors.slice(-2, -1); // 'indigo'

// Objects

// 7. Use destructuring to assign all appropriate variables using the keys as the variable names.
const { muppetName, color, song, job, partner } = muppet;

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner.
const { song2, song4, nestedJob, nestedPartner } = nestedMuppet.album.theMuppetMovie;

// Example of using the color variables
console.log(blackAndWhite); // 'cow'
console.log(black); // 'sheep'
console.log(pink); // 'pig'

// Example of using the rainbow color variables
console.log(red); // 'red'
console.log(o); // 'orange'
console.log(y); // 'yellow'
console.log(g); // 'green'
console.log(b); // 'blue'
console.log(indg); // 'indigo'
console.log(violet); // 'violet'

// Example of using muppet variables
console.log(muppetName); // 'Miss Piggy'
console.log(color); // 'pink'
console.log(song); // 'Never Before, Never Again'
console.log(job); // 'Cast member of The Muppet Show'
console.log(partner); // 'Kermit'

// Example of using nestedMuppet variables
console.log(song2); // 'Moving Right Along'
console.log(song4); // 'I Hope That Something Better Comes Along'
console.log(nestedJob); // 'Host of The Muppet Show'
console.log(nestedPartner); // 'Miss Piggy'
