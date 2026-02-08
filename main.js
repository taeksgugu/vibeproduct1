const generateBtn = document.getElementById('generate-btn');
const lottoNumbersDiv = document.getElementById('lotto-numbers');

generateBtn.addEventListener('click', () => {
    lottoNumbersDiv.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('lotto-number');
        numberDiv.textContent = number;
        lottoNumbersDiv.appendChild(numberDiv);
    });
});
