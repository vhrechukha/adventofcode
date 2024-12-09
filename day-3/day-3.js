const fs = require("fs").promises;

(async function () {
  const data = await fs.readFile("./data-3.txt", "utf8");

  const regex = /mul\((\d+),(\d+)\)/g;
  let sum = 0,
    match;

  while ((match = regex.exec(data)) !== null) {
    sum += parseInt(match[1]) * parseInt(match[2]);
  }

  // Correct answer: 191183308
  console.log("Sum:", sum);
})();
