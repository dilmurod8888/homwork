function countVowelWords(elementId) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with id "${elementId}" not found.`);
    return;
  }

  const text = element.textContent.trim();
  const words = text.split(/\s+/); // Split text into words by whitespace

  let vowelWordCount = 0;

  words.forEach((word) => {
    if (word.match(/[aeiouAEIOU]/)) {
      // Check if word contains any vowel
      vowelWordCount++;
    }
  });

  console.log(`${vowelWordCount}: Tp'g'ri |`);
  return `${vowelWordCount} 'to'g'ri'`;
}

// Example usage:
countVowelWords("lorem");

// const wolves = [banana, apple, potato, tomato];

// function countVowels(word) {
//     const vowels = 'aeiouAEIOU';
//     let vowelCount = 0;

//     for (let i = 0; i < word.length; i++) {
//         if (vowels.includes(word[i])) {
//             vowelCount++;
//         }
//     }

//     console.log(`${vowelCount}: Tp'g'ri | `);
//     return vowelCount;
// }

// // Example usage:
// function randomWord() {
//     const words = ['apple', 'banana', 'orange', 'grape', 'pear'];
//     const randomIndex = Math.floor(Math.random() * words.length);
//     return words[randomIndex];
// }

// const word = randomWord();
// countVowels(word);
