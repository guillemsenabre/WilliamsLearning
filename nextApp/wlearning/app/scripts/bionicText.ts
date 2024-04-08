function BionicText(text:string) {

  // Split the text into paragraphs
  const paragraphs: string[] = text.split(/\r?\n/);

  // Empty array to store processed paragraphs
  const processedParagraphs: string[] = [];

  // Mapping over the words in each paragraph to apply bold 
  //styles if length(word) > 3
  paragraphs.forEach((paragraph) => {

    // Split on whitespace (including spaces, tabs, etc.) word length
    const processedWords = paragraph.split(/\s+/).map((word) => {
      const wlen: number = word.length;

      // NOTE - Could be converted to a math series function to improve O()
      if (wlen > 1 && wlen <= 3) {
        return `<b>${word.slice(0,1)}</b>${word.slice(1)}`;
      } else if (wlen > 3 && wlen <= 5) {
        return `<b>${word.slice(0,2)}</b>${word.slice(2)}`;
      } else if (wlen > 5 && wlen <= 7) {
        return `<b>${word.slice(0,3)}</b>${word.slice(3)}`;
      } else if (wlen > 7) {
        return `<b>${word.slice(0,4)}</b>${word.slice(4)}`;
      } else {
        return word;
      }
    });

    // Join the processed words back into a paragraph
    processedParagraphs.push(processedWords.join(' '));
  });

  // Join paragraphs back with a line break
  return processedParagraphs.join('<br>');  
}


export default BionicText;