document.body.innerHTML = `
    <div class="top_block">
        <div class="info">
            <p class="writeYourQuestion">Напишіть своє питання та натисніть на магічну кулю</p>
            <input type="text" id="setQuestion">
        </div>
    </div>
        <div class = "ballContainer">
            <div class="ball">
                <span id="text" class="text" onclick="valueOfAnswer()"></span>
                <img src="img/ball.png" alt="ball">
            </div>
        </div>     
`;

const setQuestion = document.getElementById('setQuestion'),
      text = document.getElementById('text');

setQuestion.setAttribute('placeholder', 'Введіть своє запитання')

const answers = [
    'Зараз не можу відповісти', 'Все-таки так', 'Можливо', 'Безсумнівно',
    'Невідомо', 'Так, але пізніше', 'Однозначно',
    'Cкоріш за все', 'Поки не ясно', 'Ніяких сумнівів'
];

function valueOfAnswer() {
    if (setQuestion.value.length > 0) {
        let valueOfAnswer = answers[Math.floor(Math.random() * answers.length)];
        text.innerHTML = valueOfAnswer;
    } else  {
        alert('Введіть своє питання');
    }
}
