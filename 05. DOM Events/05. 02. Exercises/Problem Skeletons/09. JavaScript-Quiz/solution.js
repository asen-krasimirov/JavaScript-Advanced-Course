function solve() {
  let correctAnswers = 0;
  let curQuestionN = 0;
  
  const questionLog = {
    0: 'onclick',
    1: 'JSON.stringify()',
    2: 'A programming API for HTML and XML documents'
  };

  const questions = Array.from(document.getElementsByTagName('section'));
  questions.forEach(section => section.addEventListener('click', onClick));

  function onClick(event) {
    const target = event.target;
    if (target.tagName !== 'P') { return; }

    if (target.textContent == questionLog[curQuestionN]) { correctAnswers++; }

    questions[curQuestionN].style.display = 'none';
    
    curQuestionN++;
    
    const nextQuestion = questions[curQuestionN];
    if (!nextQuestion) { displayResults() }
    else {nextQuestion.style.display = 'block';}

  }

  function displayResults() {
    let resultText = (correctAnswers == 3) ? "You are recognized as top JavaScript fan!" : `You have ${correctAnswers} right answers`

    const resultField = document.getElementById('results');
    resultField.style.display = 'block';
    
    resultField.getElementsByTagName('li')[0].querySelector('h1').textContent = resultText;
  }
}
