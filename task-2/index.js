document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const userDataDiv = document.getElementById("userData");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

   
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const contactNumber = document.getElementById("contactNumber").value;
        const genderElements = document.querySelectorAll('input[name="gender"]:checked');
        const selectedGenders = Array.from(genderElements).map((el) => el.value);
        const genderValues = selectedGenders.join(", "); 
        const hobby = document.getElementById("hobby").value;

       
        const table = document.createElement("table");
        table.classList.add("table");

        const tbody = document.createElement("tbody");

        const rowData = [
            { label: "Name", value: name },
            { label: "Email", value: email },
            { label: "Address", value: address },
            { label: "Contact Number", value: contactNumber },
            { label: "Gender", value: genderValues },
            { label: "Hobby", value: hobby },
        ];

        rowData.forEach((data) => {
            const row = document.createElement("tr");
            const labelCell = document.createElement("td");
            const valueCell = document.createElement("td");

            labelCell.textContent = data.label;
            valueCell.textContent = data.value;

            row.appendChild(labelCell);
            row.appendChild(valueCell);

            tbody.appendChild(row);
        });

        table.appendChild(tbody);

        
        userDataDiv.innerHTML = "";
        userDataDiv.appendChild(table);
    });
});
