// Create arrays with 3 possible phrases that will get combined.
const partOne = ['Your friends are important.', 'Waiting is not easy.', 'We only have one planet.', 'Some people never change.', 'It is hard to learn.'];
const partTwo = ['The sun removes the shadow.', 'The clock is ticking.', 'The planet is round.', 'Some people change.', 'Time heals.'];
const partThree = ['Don\'t ignore it!', 'Remember this!', 'Share the knowledge!', 'Don\'t push it!', 'Enjoy it while you can!'];

// Generate random number from 0 to 4
const makeRand = arr => Math.floor(Math.random() * arr.length);

// Generate the phrase
const makePhrase = () => {
    console.log(`${partOne[makeRand(partOne)]}`);
    console.log(`${partTwo[makeRand(partTwo)]}`);
    console.log(`${partThree[makeRand(partThree)]}`);
}

makePhrase();
