const facts = [
    "Crocodiles are reptiles that belong to the family Crocodylidae.",
    "They are found in tropical regions of Africa, Asia, the Americas, and Australia.",
    "Crocodiles can live for over 70 years in the wild.",
    "They are carnivorous and primarily feed on fish, birds, and mammals.",
    "Crocodiles have powerful jaws that can exert tremendous pressure.",
    "They are excellent swimmers and can hold their breath underwater for over an hour.",
    "Crocodiles are cold-blooded, meaning their body temperature is regulated by their environment.",
    "They have a unique ability to see in the dark, thanks to a special layer of tissue in their eyes.",
    "Crocodiles communicate through a variety of vocalizations, including growls and hisses.",
    "Some species of crocodiles can reach lengths of over 20 feet (6 meters)."
];

const factDisplay = document.getElementById('fact-display');
const generateFactButton = document.getElementById('generate-fact');

generateFactButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.innerText = facts[randomIndex];
});

