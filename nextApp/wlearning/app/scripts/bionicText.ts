function BionicText(text:string) {

  // Split the text into words
  const words = text.split(/\s+/); // Split on whitespace (including spaces, tabs, etc.)

  // Mapping over the words to add bold if length(word) > 3
  return words.map((word) => {

    // word length
    const wlen: number = word.length;

    // Bold limiters
    const threshold_3: number = 3;
    const threshold_5: number = 5;
    const threshold_7: number = 7;

    if (wlen > threshold_3 && wlen <= threshold_5) {
      return `<b>${word.slice(0,2)}</b>${word.slice(2)}`;
    } else if (wlen > threshold_5 && wlen <= threshold_7) {
      return `<b>${word.slice(0,3)}</b>${word.slice(3)}`;
    } else if (wlen > threshold_7) {
      return `<b>${word.slice(0,4)}</b>${word.slice(4)}`;
    } else {
      return word;
    }
  }).join(' '); // join words back into a sentence with spaces
}

export default BionicText;