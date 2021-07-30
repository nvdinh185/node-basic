const renderHobbyList = (hobbyList) => {
    if (!Array.isArray(hobbyList) || hobbyList.length === 0) return;

    const ulElement = document.querySelector("#hobbyListId");
    if (!ulElement) return;

    // reset previous content of ul
    ulElement.innerHTML = '';

    for (const hobby of hobbyList) {
        const liElement = document.createElement('li');
        liElement.textContent = hobby;

        ulElement.appendChild(liElement);
    }
}

// RENDER INITIAL HOBBY LIST
// localStorage.removeItem('hobby_list');
const hobbyList = JSON.parse(localStorage.getItem('hobby_list')) || [];
// console.log(hobbyList);
renderHobbyList(hobbyList);

// HANDLE FORM SUBMIT
const hobbyFormElement = document.querySelector("#hobbyFormId");
if (hobbyFormElement) {
    const handleFormSubmit = (e) => {
        // prevent browser from reloading
        e.preventDefault();

        const hobbyTextElement = hobbyFormElement.querySelector("#hobbyTextId");
        if (!hobbyTextElement.value) return;

        // console.log("Submit", hobbyTextElement.value);
        hobbyList.push(hobbyTextElement.value);
        renderHobbyList(hobbyList);
        localStorage.setItem('hobby_list', JSON.stringify(hobbyList));

        // reset form
        hobbyFormElement.reset();
    };

    hobbyFormElement.addEventListener("submit", handleFormSubmit);
}