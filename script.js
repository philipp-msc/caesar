
const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
const alphabetUpperCase = alphabet.toUpperCase();


const shiftInput = document.getElementById('shift');
const encryptInput = document.getElementById('encrypt-input');
const encryptOutput = document.getElementById('encrypt-output');
const decryptInput = document.getElementById('decrypt-input');
const decryptOutput = document.getElementById('decrypt-output');

const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');


function caesarCipher(text, shift, decrypt = false) {
    shift = decrypt ? -shift : shift;
    return text.split('').map(char => {
        if (alphabet.includes(char)) {
            const index = (alphabet.indexOf(char) + shift + alphabet.length) % alphabet.length;
            return alphabet[index];
        } else if (alphabetUpperCase.includes(char)) {
            const index = (alphabetUpperCase.indexOf(char) + shift + alphabetUpperCase.length) % alphabetUpperCase.length;
            return alphabetUpperCase[index];
        }
        return char;
    }).join('');
}


encryptBtn.addEventListener('click', () => {
    const shift = parseInt(shiftInput.value) || 0;
    const text = encryptInput.value;
    encryptOutput.value = caesarCipher(text, shift);
});

decryptBtn.addEventListener('click', () => {
    const shift = parseInt(shiftInput.value) || 0;
    const text = decryptInput.value;
    decryptOutput.value = caesarCipher(text, shift, true);
});
