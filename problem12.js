// A delivery person has to deliver packages to multiple locations in a city.
// Starting from the delivery hub, they want to minimize the distance they travel
// to all delivery points and return to the hub. We’ll need to:
//
// Calculate the shortest path that visits each delivery point exactly once and returns to the hub.
// Output the ordered list of stops with the minimum distance.
// Assumptions and Setup
// We’ll represent each delivery point with coordinates on a 2D plane.
// We’ll use a simple brute-force approach for demonstration, which works well for a small number of points.
// (In real-world scenarios with many points, more advanced algorithms like genetic algorithms or dynamic
//     programming would be more efficient).

// Function to calculate distance between two points
function calculateDistance(point1, point2) {
  const xDiff = point1.x - point2.x;
  const yDiff = point1.y - point2.y;
  return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

// Recursive function to find the shortest route
function findShortestRoute(currentPath, remainingPoints, currentDistance) {
  if (remainingPoints.length === 0) {
    // Return to the starting point (hub)
    const returnToHubDistance = calculateDistance(
      currentPath[0],
      currentPath[currentPath.length - 1]
    );
    return {
      path: currentPath,
      distance: currentDistance + returnToHubDistance,
    };
  }

  let shortestRoute = { path: [], distance: Infinity };

  for (let i = 0; i < remainingPoints.length; i++) {
    const nextPoint = remainingPoints[i];
    const distanceToNext = calculateDistance(
      currentPath[currentPath.length - 1],
      nextPoint
    );
    const newRemaining = remainingPoints
      .slice(0, i)
      .concat(remainingPoints.slice(i + 1));

    const result = findShortestRoute(
      [...currentPath, nextPoint],
      newRemaining,
      currentDistance + distanceToNext
    );

    if (result.distance < shortestRoute.distance) {
      shortestRoute = result;
    }
  }
  return shortestRoute;
}

// Main function to solve the TSP problem
function findOptimalRoute(deliveryPoints) {
  if (deliveryPoints.length < 2) return { path: deliveryPoints, distance: 0 };

  const result = findShortestRoute(
    [deliveryPoints[0]],
    deliveryPoints.slice(1),
    0
  );
  return result;
}

// Test the solution
const deliveryPoints = [
  { x: 0, y: 0 }, // Hub location
  { x: 2, y: 3 },
  { x: 5, y: 4 },
  { x: 1, y: 7 },
  { x: 6, y: 1 },
];

const optimalRoute = findOptimalRoute(deliveryPoints);

console.log("Shortest path:", optimalRoute.path);
console.log("Total distance:", optimalRoute.distance.toFixed(2));
