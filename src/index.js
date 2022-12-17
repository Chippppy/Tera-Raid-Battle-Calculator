const populateIconGrid = (searchText) => {

}

const  getSprite = (text) => {
//Take the list of pokemon names and populate a grid using img tag
}

const getPaldeaDexList = async () => {
  //Link to serebii.net paldea pokedex. https://www.serebii.net/scarletviolet/paldeapokedex.shtml
  const data = await fetch("https://www.serebii.net/scarletviolet/paldeapokedex.shtml", {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    referrer: 'www.serebii.net'
  });
  data = data.json();
  console.log(data);
}

getPaldeaDexList()