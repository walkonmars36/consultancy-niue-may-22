const dogContainer = document.getElementById("dog-container");

const getDog = document.getElementById("get-dog-button");

const getFiveDogs = document.getElementById("get-five-dog-button");

// ///

const getRandomDog = async () => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    if (!response.ok) {
      throw new Error(response.status + " error with request");
    }

    const data = await response.json();
    console.log(data);
    dogContainer.innerHTML = `
      <div>
      <img src=${data.message} />
      </div>
      `;
  } catch (error) {
    alert(error.message);
  }
};

// ///

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

// ///

getDog.addEventListener("click", getRandomDog);
getFiveDogs.addEventListener("click", getFiveRandomDogs);
