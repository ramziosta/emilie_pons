// Create a class for the element
class Book extends HTMLElement {
    constructor() {
        super();
    }

    set book(book){
        this.innerHTML = `
            <div class="card" id="${book.id}">
              <h1 class="card-header ">${book.title}</h1>
              <div class="card-body">
                <h5 class="hh">${book.publisher}</h5>
                    <p class="card-text">
                    <table class="table">
                        <tr>
                            <td class="text-secondary font-weight-bold">Title:</td>
                            <td>${book.title}</td>
                        </tr>
                        <tr>
                            <td class="text-secondary font-weight-bold">Description:</td>
                            <td>${book.description}</td>
                        </tr>
                        <tr>
                        <td class="text-secondary font-weight-bold">Published:</td>
                        <td>${book.published}</td>
                    </tr>
                        <tr>
                            <td class="text-secondary font-weight-bold">Author:</td>
                            <td>${book.author}</td>
                        </tr>
                        <tr>
                            <td class="text-secondary font-weight-bold">Publisher:</td>
                            <td>${book.publisher}</td>
                        </tr>
                        <tr>
                            <td class="text-secondary font-weight-bold"></td>
                            <td><a href="${book.website}">Full story</a></td>
                        </tr>
                      
                    </table>
                    </p>
              </div>
            </div>
    `;    

  }
}

// Define the new element
customElements.define('mit-book', Book);

{/* <tr>
<td class="text-secondary "><span id="isbn" class="isbn">${book.isbn}</span></td>
<td></td>
</tr> */}
