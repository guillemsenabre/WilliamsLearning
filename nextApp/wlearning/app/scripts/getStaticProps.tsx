// This function will run on the server-side before
//rendering the page. 
// Benefits:
// -> Server-side rendering (faster initial load times, specially for big datasets)
// -> Automatic parsing (although it's quite easy to do it manually)
// -> Caching: nextjs can cache this data (improves performance when displaying it on other views)

export async function getStaticProps() {
  const response = await fetch('../data/cardData.json') // Retrieve the data from the json file
  const cardData = await response.json() // parse the json file

  return {
    props: {
      cardData,
    },
  };
}