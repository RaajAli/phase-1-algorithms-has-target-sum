function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const pair = target - array [i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === pair) return true;
    }
  }
  return false;
}

if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

//= Line 1: The function checks if any two numbers in the given array add up to the target value.

//= Line 2: The function checks if any two numbers in the given array add up to the target value.
//= At each step, it calculates the value (pair) that needs to be paired with the current element to reach the target.

//= Line 3: The variable pair represents the number that, when added to array[i], equals the target.

//= Line 4: The inner loop starts from the index after i (i.e., j = i + 1) and iterates through the rest of the array.
//= This ensures that no number is paired with itself and avoids redundant checks for previously evaluated pairs.

//= Line 5: If array[j] matches the pair calculated earlier, the function immediately returns true, 
//= indicating that a matching pair of numbers has been found.

//= Line 8: If the loops finish without finding any two numbers that sum to the target, the function returns false.

//= Time Complexity: O(n²)
//= The outer loop runs n times (where n is the length of the array).
//= The inner loop runs up to n - 1 times for each iteration of the outer loop.

//= Space Complexity: O(1)
//= No additional data structures are used.