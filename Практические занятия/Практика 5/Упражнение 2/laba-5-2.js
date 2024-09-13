(function () {
    "use strict"
    document.addEventListener("DOMContentLoaded", function() {
        const nameInput = document.getElementById("name");
        const phoneInput = document.getElementById("phone");
        const addButton = document.getElementById("addButton");
        const contactList = document.getElementById("contactList");

        // Функция для обновления списка контактов
        function updateContactList() {
            contactList.innerHTML = '';
            const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

            contacts.forEach((contact, index) => {
                const row = document.createElement("tr");
                const nameCell = document.createElement("td");
                const phoneCell = document.createElement("td");
                const actionCell = document.createElement("td");

                nameCell.textContent = contact.name;
                phoneCell.textContent = contact.phone;

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Удалить";
                deleteButton.onclick = () => {
                    removeContact(index);
                };

                actionCell.appendChild(deleteButton);
                row.appendChild(nameCell);
                row.appendChild(phoneCell);
                row.appendChild(actionCell);
                contactList.appendChild(row);
            });
        }

        // Функция для добавления нового контакта
        function addContact() {
            const name = nameInput.value.trim();
            const phone = phoneInput.value.trim();

            if (name && phone) {
                const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
                contacts.push({ name, phone });
                localStorage.setItem("contacts", JSON.stringify(contacts));
                nameInput.value = "";
                phoneInput.value = "";
                updateContactList();
            } else {
                alert("Пожалуйста, заполните оба поля.");
            }
        }

        // Функция для удаления контакта
        function removeContact(index) {
            const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
            contacts.splice(index, 1);
            localStorage.setItem("contacts", JSON.stringify(contacts));
            updateContactList();
        }

        // Обработчик события при нажатии на кнопку "Добавить"
        addButton.onclick = addContact;

        // Обновляем список контактов при загрузке страницы
        updateContactList();
    });
}());