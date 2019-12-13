/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/





/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

axios.get("https://api.github.com/users/DarneaPinkett/followers")
.then(res =>{
  res.data.forEach(element => {
    const friends = create(element);
    cards.appendChild(friends);
  })
  .catch(err => {
    alert("Out of Order");
  })
})


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
axios.get('https://api.github.com/users/DarneaPinkett').then(res =>{
  const data = res.data;
  const cardInfo = create(data);
  cards.appendChild(cardInfo)
  console.log(res);
})
.catch(err => {
  console.log("You hit an error", err);
})

const cards = document.querySelector('.cards');

function create(obj) {
  const card1 = document.createElement('div');
  const mainImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const h3 = document.createElement('h3');
  const paragraph1 = document.createElement('p');
  const paragraph2 = document.createElement('p');
  const paragraph3 = document.createElement('p');
  const address = document.createElement('a');
  const paragraph4 = document.createElement('p');
  const paragraph5 = document.createElement('p');
  const paragraph6 = document.createElement('p');
  

  card1.appendChild(mainImg);
  card1.appendChild(cardInfo);
  cardInfo.appendChild(h3);
  cardInfo.appendChild(paragraph1);
  cardInfo.appendChild(paragraph2);
  cardInfo.appendChild(paragraph3);
  paragraph3.appendChild(address);
  cardInfo.appendChild(paragraph4);
  cardInfo.appendChild(paragraph5);
  cardInfo.appendChild(paragraph6);

  card1.classList.add('card');
  cardInfo.classList.add('card-info');
  h3.classList.add('name');
  paragraph1.classList.add('username');

  mainImg.src = obj.avatar_url;
  h3.textContent = obj.login;
  paragraph1.textContent = obj.login;
  paragraph2.textContent = obj.Location;
  paragraph3.textContent = "Profile:";
  address.href = obj.url;
  paragraph4.textContent = obj.followers;
  paragraph5.textContent = obj.following;
  paragraph6.textContent = obj.bio;


  return card1;
}
console.log(create())