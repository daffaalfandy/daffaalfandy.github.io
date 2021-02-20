const typingTextContainer = document.getElementById("typing-text");

const sentences = ["I'm a developer.", "I'm an engineer.", "I'm a learner."];

// start typing effect
setTyper(typingTextContainer, sentences);

function setTyper(element, sentences) {
  const TYPING_DELAY = 75;
  const SENTENCE_DELAY = 1000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  let direction = DIRECTION_FORWARDS;
  let sentencesIndex = 0;
  let letterIndex = 0;

  let sentenceTypeInterval;

  startTyping();

  function startTyping() {
    sentenceTypeInterval = setInterval(typeSentence, TYPING_DELAY);
  }

  function typeSentence() {
    const sentence = sentences[sentencesIndex];

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == sentence.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(sentenceTypeInterval);
        setTimeout(startTyping, SENTENCE_DELAY);
      }
    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex == 0) {
        nextWord();
      }
    }

    element.textContent = sentence.substring(0, letterIndex);
  }

  function nextWord() {
    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    sentencesIndex++;

    if (sentencesIndex == sentences.length) {
      sentencesIndex = 0;
    }
  }
}

const footerContainer = document.getElementById("footer");
const year = new Date().getFullYear();
footerContainer.innerHTML = `&copy; ${year}. Daffa Alfandy`;
