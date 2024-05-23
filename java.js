document.getElementById('loginLink').addEventListener('click', function() {
    window.open('login.html', '_blank', 'width=400,height=400');
});

const suggestions = ["Thuật toán sắp xếp ", "Bubble Sort", "Insertion Sort", "Selection Sort", "Merge Sort ", "Quick Sort", "Shell Sort"];



function showSuggestions(value) {
    const suggestionsBox = document.getElementById('suggestions-box');
    suggestionsBox.innerHTML = '';
    if (value) {
        const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(value.toLowerCase()));
        filteredSuggestions.forEach(suggestion => {
            const suggestionDiv = document.createElement('div');
            suggestionDiv.classList.add('suggestion');
            suggestionDiv.innerText = suggestion;
            suggestionDiv.onclick = () => {
                document.getElementById('search-box').value = suggestion;
                suggestionsBox.innerHTML = '';
                suggestionsBox.style.display = 'none';
            };
            suggestionsBox.appendChild(suggestionDiv);
        });
        suggestionsBox.style.display = 'block';
    } else {
        suggestionsBox.style.display = 'none';
    }
}
<<<<<<< HEAD
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );
=======

document.addEventListener('click', (event) => {
    const suggestionsBox = document.getElementById('suggestions-box');
    if (!event.target.matches('#search-box')) {
        suggestionsBox.style.display = 'none';
    }
});
>>>>>>> 0ed090559729da83faf267be8e5a008eb87d5edd
