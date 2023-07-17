function createBookTable(books) {
    const table = document.createElement("table");
    table.classList.add("book-table");

    // Add border to the table
    table.style.border = "1px solid #000";

    // Create table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = [
        "Title",
        "Author",
        "Description",
        "ISBN",
        "Publication Year",
    ];

    headers.forEach((headerText) => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement("tbody");

    books.forEach((book) => {
        const row = document.createElement("tr");

        // Create table cells for each book property
        const titleCell = document.createElement("td");
        titleCell.textContent = book.title;
        row.appendChild(titleCell);

        const authorCell = document.createElement("td");
        authorCell.textContent = book.author;
        row.appendChild(authorCell);

        const description = document.createElement("td");
        description.textContent = book.description;
        row.appendChild(description);

        const isbn = document.createElement("td");
        isbn.textContent = book.description;
        row.appendChild(isbn);

        const publicationYear = document.createElement("td");
        publicationYear.textContent = book.description;
        row.appendChild(publicationYear);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    // Append the table to the HTML body
    document.body.appendChild(table);
}

(function () {
    const apiUrl = "http://localhost:3200/api/books";

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            // Process the received data
            createBookTable(data.books);
        })
        .catch((error) => {
            // Handle any errors
            console.error("Error:", error);
        });
})();
