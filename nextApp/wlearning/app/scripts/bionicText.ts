import BionicProcessor from "./bionicProcessor";


function BionicText(text:string) {

  // Split the text into paragraphs
  const paragraphs: string[] = text.split(/\r?\n/);

  // Empty array to store processed paragraphs
  const processedParagraphs: string[] = [];

  // Mapping over the words in each paragraph to apply bold 
  //styles if length(word) > 3
  paragraphs.forEach((paragraph) => {

    // Bionic Processor splits paragraphs into words and
    //process them
    const processedWords: string[] = BionicProcessor(paragraph);

    // Join the processed words back into a paragraph
    processedParagraphs.push(processedWords.join(' '));
  });

  // Join paragraphs back with a line break
  return processedParagraphs.join('<br>');  
}


export default BionicText;