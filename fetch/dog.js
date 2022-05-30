const dogContainer = document.getElementById("dog-container");

const getDog = document.getElementById("get-dog-button");

const getFiveDogs = document.getElementById("get-five-dog-button");

const getRandomDog = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  console.log(data);

  dogContainer.innerHTML = `
      <div>
      <img src=${data.message} />
      </div>
      `;
};

const getFiveRandomDogs = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random/5");
  const data = await response.json();
  console.log(data);

  data.message.map(
    (dog) =>
      (dogContainer.innerHTML += `
  <div> 
  <img src=${dog} />
  </div>
  `)
  );
};

getDog.addEventListener("click", getRandomDog);
getFiveDogs.addEventListener("click", getFiveRandomDogs);
