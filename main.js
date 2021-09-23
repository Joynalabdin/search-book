// Search Button
const searchBook = () => {
  const inputField = document.getElementById("search-field").value;
  document.getElementById("search-field").value = "";
  console.log(inputField);
  loadData(inputField);
};

// load data function

const loadData = async(searchText) => {
  const url = ` https://openlibrary.org/search.json?q=${searchText}`;
  const res = await fetch(url)
  const data = await res.json();
  displayData(data.docs);
};
// loadData("react")

// display data
const displayData = (books) => {
  console.log(books);
  console.log(books.length);
  const search = document.getElementById("search")
  search.innerText = "there are available search results" +  books.length;
  const searchResult = document.getElementById("search-result");
  searchResult.innerHTML = "";
  if (books.length === 0 || "") {
    document.getElementById("error-message").style.display = "block";
  }
  books.forEach((book) => {
    const div = document.createElement("div");
    div.classList.add("col");
  const img='https://covers.openlibrary.org/b/id/'+book.cover_i+'-M.jpg';

    div.innerHTML = `
    

            <div class="card-body">
            <img class="img-fluid" src='${img}'/>
              <h4>${book.title.slice(0, 9)}</h4>
              <p class="bg-primary">${book.author_name}</p>
              <p>${book.publisher}</p>

              <h5>${book.first_publish_year}</h5>
            </div>
    `;
    searchResult.appendChild(div);
  });

};

  

