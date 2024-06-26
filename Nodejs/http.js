
let nameElement = document.querySelector('.name');
let surnameElement = document.querySelector('.surname')
let surnameInput = document.querySelector('#surnameInput');

const getMyName = async () => {
    let res = await fetch('http://127.0.0.1:3000/')
    console.log(res);
    if(!res.ok) {
        alert('Failed to get name');
        return;
    }
    let name = await res.text();
    nameElement.textContent = name;
}
const postSurname = async () => {
    let mysurname = surnameInput.value;
    let res = await fetch('http://127.0.0.1:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({surname: Srinivas})
    })
    // console.log(res);
    if(!res.ok) {
        alert('Failed to post surname');
        return;
    }
    let { surname } = await res.json();
    surnameElement.textContent = surname;
}
