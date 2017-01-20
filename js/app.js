/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/

var nameTay=document.getElementById("name1"); //Dom method to grab the div with ID of name1

nameTay.innerHTML = "TayTay";


/*2. Replace the n/a with the following: 

Project Manager*/
 var title = document.getElementById("position2");

 title.innerHTML="Project Manager"; 



/*3. Replace the n/a with the following:

Concatenation*/
var alias = document.getElementById("alias3");

alias.innerHTML="Concatenation";


/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/

var snoop = document.getElementsByClassName("profile")[0].innerHTML = "Lorizzle brizzle dolor fizzle amizzle, stuff adipiscing elit. Nullizzle izzle velizzle, stuff volutpizzle, brizzle boom shackalack, gravida vizzle, brizzle. Pellentesque away go to hizzle. Ma nizzle erizzle. Stuff shizzle my nizzle crocodizzle da bomb bling bling tempizzle my shizz. Maurizzle pellentesque fo stuff ma nizzle. Vestibulum izzle its fo rizzle. Pellentesque bow wow wow rhoncizzle ghetto. In mah nizzle habitasse platea dictumst. Fo shizzle dapibizzle. Curabitur tellus daahng dawg, pretizzle shit, mattizzle ac, sure doggy, pimpin'. Check it out suscipit. Fizzle semper velit sizzle da bomb.";


/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/

document.getElementsByClassName("profile")[2].innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ratione, a, mollitia, cumque voluptatibus pariatur non illo labore officia commodi cum necessitatibus ex. Ducimus reiciendis, nam dolore a, reprehenderit veritatis.";


/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".

Append this div element to the nameBox div*/

var chucky= document.createElement("div");
chucky.id = "name7";
chucky.innerHTML="Chuck Norris";
nameBox.appendChild(chucky);

/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/

var grim=document.createElement("div");
grim.id= "alias8";
grim.innerHTML="The Purple Monster";
aliasBox.appendChild(grim);



//Final Boss
/*8. Create your own profile.*/

var profile = document.getElementsByClassName("block3 col-sm-4")[2];

var profileName = document.createElement("div");
profileName.className=  "name";
profileName.innerHTML = "Jonathon";

profile.appendChild(profileName);

var profilePos= document.createElement("div");
profilePos.className="position";
profilePos.innerHTML="Boss";

profile.appendChild(profilePos);

var profileAl=document.createElement("div");
profileAl.className="alias";
profileAl.innerHTML="Den Madda";

profile.appendChild(profileAl);

var profileBio= document.createElement("div");
profileBio.className="profile";
profileBio.innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae at in iste quisquam dolor quas voluptate labore odio. Dicta quidem eligendi accusamus soluta reprehenderit provident, dolorem numquam doloremque maiores fuga.";

profile.appendChild(profileBio);
