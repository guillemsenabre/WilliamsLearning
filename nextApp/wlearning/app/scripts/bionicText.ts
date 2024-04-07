function BionicText(text:string) {
  // Split the text into words
  const words = text.split(/\s+/); // Split on whitespace (including spaces, tabs, etc.)

  // Mapping over the words to add bold if length(word) > 3
  return words.map((word) => {
    if (word.length > 3) {
      return `<b>${word.slice(0,2)}</b>${word.slice(2)}`;
    } else {
      return word;
    }
  }).join(' '); // join words back into a sentence with spaces
}

export default BionicText;