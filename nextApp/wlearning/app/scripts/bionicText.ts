function BionicText(text:string) {

  // Split the text into words
  const words = text.split(/\s+/); // Split on whitespace (including spaces, tabs, etc.)

  // Mapping over the words to add bold if length(word) > 3
  return words.map((word) => {

    // word length
    const wlen: number = word.length;

    if (wlen > 3 && wlen <= 5) {
      return `<b>${word.slice(0,2)}</b>${word.slice(2)}`;
    } else if (wlen > 5 && wlen <= 7) {
      return `<b>${word.slice(0,3)}</b>${word.slice(3)}`;
    } else if (wlen > 7) {
      return `<b>${word.slice(0,4)}</b>${word.slice(4)}`;
    } else {
      return word;
    }
  }).join(' '); // join words back into a sentence with spaces
}

export default BionicText;