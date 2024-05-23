document.getElementById('loginLink').addEventListener('click', function() {
    window.open('login.html', '_blank', 'width=400,height=400');
});

const suggestions = ["Thuật toán sắp xếp ", "Bubble Sort", "Insertion Sort", "Selection Sort", "Merge Sort ", "Quick Sort", "Shell Sort"];

function showSuggestions(value) {
    const suggestionsBox = document.getElementById('suggestions-box');
    suggestionsBox.innerHTML = '';
    if (value.length === 0) {
        return;
    }
    const filteredSuggestions = suggestions.filter(suggestion => 
        suggestion.toLowerCase().includes(value.toLowerCase())
    );
    filteredSuggestions.forEach(suggestion => {
        const suggestionItem = document.createElement('div');
        suggestionItem.classList.add('suggestion-item');
        suggestionItem.textContent = suggestion;
        suggestionItem.onclick = () => {
            document.getElementById('search-box').value = suggestion;
            suggestionsBox.innerHTML = '';
        };
        suggestionsBox.appendChild(suggestionItem);
    });
}
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );
