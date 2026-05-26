const countries = [
    'Україна', 'Польща', 'Німеччина', 'Франція', 'Іспанія', 
    'Італія', 'Великобританія', 'США', 'Канада', 'Австралія'
];

const countryInput = document.getElementById('country-input');
const suggestionsList = document.getElementById('suggestions');

countryInput.addEventListener('input', function() {
    const value = this.value.toLowerCase().trim();
    suggestionsList.innerHTML = '';

    if (value === '') {
        suggestionsList.style.display = 'none';
        return;
    }

    const filtered = countries.filter(country => 
        country.toLowerCase().startsWith(value)
    );

    if (filtered.length > 0) {
        filtered.forEach(country => {
            const li = document.createElement('li');
            li.textContent = country;
            
            li.addEventListener('click', function() {
                countryInput.value = country;
                suggestionsList.style.display = 'none';
            });

            suggestionsList.append(li);
        });
        suggestionsList.style.display = 'block';
    } else {
        suggestionsList.style.display = 'none';
    }
});

document.addEventListener('click', function(event) {
    if (!countryInput.contains(event.target) && !suggestionsList.contains(event.target)) {
        suggestionsList.style.display = 'none';
    }
});