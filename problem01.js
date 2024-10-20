// find the top 3 fastest horses from 25 horses,
// but you can only race 5 horses at a time and
// have no way to directly measure the speed.
// Simulating the ranking of horses using an arrow function
const rankHorses = (horses) => horses.sort((a, b) => a.speed - b.speed);

// Group horses into sets of 5 using an arrow function
const groupHorses = (horses) => {
  let groups = [];
  for (let i = 0; i < horses.length; i += 5) {
    groups.push(rankHorses(horses.slice(i, i + 5)));
  }
  return groups;
};

// Simulate racing the top horses from each group using an arrow function
const raceTopHorses = (groups) => {
  let topHorses = groups.map((group) => group[0]); // Get the fastest horse from each group
  return rankHorses(topHorses); // Race them
};

// Find the 2nd and 3rd fastest horses from the remaining candidates using an arrow function
const findTopThree = (groups, topRaceResult) => {
  let A1 = topRaceResult[0]; // Fastest horse overall
  let A2 = topRaceResult[1]; // 2nd fastest horse from top race
  let A3 = topRaceResult[2]; // 3rd fastest horse from top race

  // Gather potential candidates for 2nd and 3rd place
  let candidates = [
    groups[A1.group][1], // 2nd fastest horse from A1's group
    A2,
    A3,
    groups[A2.group][0], // Fastest horse from A2's group
    groups[A3.group][0], // Fastest horse from A3's group
  ];

  // Race them to find the 2nd and 3rd fastest horses
  return rankHorses(candidates);
};

// Main function using arrow function
const findTopThreeHorses = (horses) => {
  // Step 1: Group horses and race each group
  let groups = groupHorses(horses);

  // Step 2: Race the fastest horse from each group
  let topRaceResult = raceTopHorses(groups);

  // Step 3: Race the remaining candidates to find 2nd and 3rd fastest
  let topThree = findTopThree(groups, topRaceResult);

  // Return the top 3 horses
  return [topRaceResult[0], topThree[0], topThree[1]];
};

// Example usage
let horses = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  speed: Math.random() * 100, // Random speed between 0 and 100
  group: Math.floor(i / 5), // Group based on initial 5-horse races
}));

let topHorses = findTopThreeHorses(horses);
console.log("Top 3 horses:", topHorses);
