const quoteContainer = document.getElementById("quote-container");

const quoteBtn = document.getElementById("get-quote-button");
console.log(quoteBtn, quoteContainer);

// ASYNC AWAIT
// GIVES ACCESS TO AWAIT
//  fetch(url) - send a request - a get request by default

// const getRandomQuote = async () => {
//   //   RESPONSE - HOW THE REQUEST WENT
//   const response = await fetch("https://api.quotable.io/random");
//   // DATA - GET THE INFO OUT OF THE RESPONSE TO USE IT
//   // THIS TAKES TIME
//   const data = await response.json();

//   console.log(data);
//   console.log(data.author);
//   console.log(data.content);

//   quoteContainer.innerHTML += `<div class="quote">
//     <h2>${data.author}</h2>
//     <p>${data.content}</p>
//     </div>
//   `;
// };

// quoteBtn.addEventListener("click", getRandomQuote);

const getRandomDog = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  console.log(data);

  quoteContainer.innerHTML += `
    <div>
    <img src=${data.message} />
    </div>
    `;
};

quoteBtn.addEventListener("click", getRandomDog);
