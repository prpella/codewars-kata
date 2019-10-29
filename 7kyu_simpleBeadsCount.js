// Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0. 

function countRedBeads(n) {
  if (n < 2) return 0
  if (n == 2) return 2
  return (n - 1) * 2
}