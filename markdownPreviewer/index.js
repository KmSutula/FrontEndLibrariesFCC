const markedText = document.getElementById("editor");
const translatedText = document.getElementById("preview");
console.log(markedText);
newText = marked.parse(markedText.value.trim());

translatedText.innerHTML = newText;

markedText.addEventListener("input", (e) => {
  const { value } = e.target;

  translatedText.innerHTML = marked.parse(value);
});
