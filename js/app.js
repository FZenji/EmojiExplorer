document.addEventListener('DOMContentLoaded', function() {
    // Emoji categories and data
    const emojiData = [
        {
            category: "Smileys & Emotion",
            emojis: [
                { emoji: "😀", name: "grinning face" },
                { emoji: "😃", name: "grinning face with big eyes" },
                { emoji: "😄", name: "grinning face with smiling eyes" },
                { emoji: "😁", name: "beaming face with smiling eyes" },
                { emoji: "😆", name: "grinning squinting face" },
                { emoji: "😅", name: "grinning face with sweat" },
                { emoji: "🤣", name: "rolling on the floor laughing" },
                { emoji: "😂", name: "face with tears of joy" },
                { emoji: "🙂", name: "slightly smiling face" },
                { emoji: "🙃", name: "upside-down face" },
                { emoji: "😉", name: "winking face" },
                { emoji: "😊", name: "smiling face with smiling eyes" },
                { emoji: "😇", name: "smiling face with halo" },
                { emoji: "🥰", name: "smiling face with hearts" },
                { emoji: "😍", name: "smiling face with heart-eyes" },
                { emoji: "🤩", name: "star-struck" },
                { emoji: "😘", name: "face blowing a kiss" },
                { emoji: "😗", name: "kissing face" },
                { emoji: "😚", name: "kissing face with closed eyes" },
                { emoji: "😙", name: "kissing face with smiling eyes" },
                { emoji: "🥲", name: "smiling face with tear" },
                { emoji: "😋", name: "face savoring food" },
                { emoji: "😛", name: "face with tongue" },
                { emoji: "😜", name: "winking face with tongue" },
                { emoji: "🤪", name: "zany face" },
                { emoji: "😝", name: "squinting face with tongue" },
                { emoji: "🤑", name: "money-mouth face" },
                { emoji: "🤗", name: "hugging face" },
                { emoji: "🤭", name: "face with hand over mouth" },
                { emoji: "🤫", name: "shushing face" }
            ]
        },
        {
            category: "People & Body",
            emojis: [
                { emoji: "👋", name: "waving hand" },
                { emoji: "🤚", name: "raised back of hand" },
                { emoji: "🖐️", name: "hand with fingers splayed" },
                { emoji: "✋", name: "raised hand" },
                { emoji: "🖖", name: "vulcan salute" },
                { emoji: "👌", name: "OK hand" },
                { emoji: "🤌", name: "pinched fingers" },
                { emoji: "🤏", name: "pinching hand" },
                { emoji: "✌️", name: "victory hand" },
                { emoji: "🤞", name: "crossed fingers" },
                { emoji: "🫰", name: "hand with index finger and thumb crossed" },
                { emoji: "🤟", name: "love-you gesture" },
                { emoji: "🤘", name: "sign of the horns" },
                { emoji: "🤙", name: "call me hand" },
                { emoji: "👈", name: "backhand index pointing left" },
                { emoji: "👉", name: "backhand index pointing right" },
                { emoji: "👆", name: "backhand index pointing up" },
                { emoji: "🖕", name: "middle finger" },
                { emoji: "👇", name: "backhand index pointing down" },
                { emoji: "👍", name: "thumbs up" },
                { emoji: "👎", name: "thumbs down" },
                { emoji: "✊", name: "raised fist" },
                { emoji: "👊", name: "oncoming fist" },
                { emoji: "🤛", name: "left-facing fist" },
                { emoji: "🤜", name: "right-facing fist" }
            ]
        },
        {
            category: "Animals & Nature",
            emojis: [
                { emoji: "🐶", name: "dog face" },
                { emoji: "🐱", name: "cat face" },
                { emoji: "🐭", name: "mouse face" },
                { emoji: "🐹", name: "hamster face" },
                { emoji: "🐰", name: "rabbit face" },
                { emoji: "🦊", name: "fox face" },
                { emoji: "🐻", name: "bear face" },
                { emoji: "🐼", name: "panda face" },
                { emoji: "🦁", name: "lion face" },
                { emoji: "🐮", name: "cow face" },
                { emoji: "🐷", name: "pig face" },
                { emoji: "🐸", name: "frog face" },
                { emoji: "🐵", name: "monkey face" },
                { emoji: "🐔", name: "chicken" },
                { emoji: "🐧", name: "penguin" },
                { emoji: "🐦", name: "bird" },
                { emoji: "🐤", name: "baby chick" },
                { emoji: "🦆", name: "duck" },
                { emoji: "🦅", name: "eagle" },
                { emoji: "🦉", name: "owl" },
                { emoji: "🦇", name: "bat" },
                { emoji: "🐺", name: "wolf" },
                { emoji: "🐗", name: "boar" },
                { emoji: "🐴", name: "horse face" },
                { emoji: "🦄", name: "unicorn" }
            ]
        },
        {
            category: "Food & Drink",
            emojis: [
                { emoji: "🍎", name: "red apple" },
                { emoji: "🍐", name: "pear" },
                { emoji: "🍊", name: "tangerine" },
                { emoji: "🍋", name: "lemon" },
                { emoji: "🍌", name: "banana" },
                { emoji: "🍉", name: "watermelon" },
                { emoji: "🍇", name: "grapes" },
                { emoji: "🍓", name: "strawberry" },
                { emoji: "🫐", name: "blueberries" },
                { emoji: "🍈", name: "melon" },
                { emoji: "🍒", name: "cherries" },
                { emoji: "🍑", name: "peach" },
                { emoji: "🥭", name: "mango" },
                { emoji: "🍍", name: "pineapple" },
                { emoji: "🥥", name: "coconut" },
                { emoji: "🥝", name: "kiwi fruit" },
                { emoji: "🍅", name: "tomato" },
                { emoji: "🥑", name: "avocado" },
                { emoji: "🍆", name: "eggplant" },
                { emoji: "🥔", name: "potato" },
                { emoji: "🥕", name: "carrot" },
                { emoji: "🌽", name: "ear of corn" }
            ]
        },
        {
            category: "Travel & Places",
            emojis: [
                { emoji: "🚗", name: "car" },
                { emoji: "🚕", name: "taxi" },
                { emoji: "🚙", name: "sport utility vehicle" },
                { emoji: "🚌", name: "bus" },
                { emoji: "🚎", name: "trolleybus" },
                { emoji: "🏎️", name: "racing car" },
                { emoji: "🚓", name: "police car" },
                { emoji: "🚑", name: "ambulance" },
                { emoji: "🚒", name: "fire engine" },
                { emoji: "🚐", name: "minibus" },
                { emoji: "🛻", name: "pickup truck" },
                { emoji: "🚚", name: "delivery truck" },
                { emoji: "🚛", name: "articulated lorry" },
                { emoji: "🚜", name: "tractor" },
                { emoji: "🏍️", name: "motorcycle" },
                { emoji: "🛵", name: "motor scooter" },
                { emoji: "🚲", name: "bicycle" },
                { emoji: "🛴", name: "kick scooter" },
                { emoji: "🚋", name: "tram car" },
                { emoji: "🚂", name: "locomotive" }
            ]
        },
        {
            category: "Activities",
            emojis: [
                { emoji: "⚽", name: "soccer ball" },
                { emoji: "🏀", name: "basketball" },
                { emoji: "🏈", name: "american football" },
                { emoji: "⚾", name: "baseball" },
                { emoji: "🥎", name: "softball" },
                { emoji: "🎾", name: "tennis" },
                { emoji: "🏐", name: "volleyball" },
                { emoji: "🏉", name: "rugby football" },
                { emoji: "🥏", name: "flying disc" },
                { emoji: "🎱", name: "pool 8 ball" },
                { emoji: "🪀", name: "yo-yo" },
                { emoji: "🏓", name: "ping pong" },
                { emoji: "🏸", name: "badminton" },
                { emoji: "🏒", name: "ice hockey" },
                { emoji: "🏑", name: "field hockey" },
                { emoji: "🥍", name: "lacrosse" },
                { emoji: "🏏", name: "cricket game" },
                { emoji: "🪃", name: "boomerang" }
            ]
        },
        {
            category: "Objects",
            emojis: [
                { emoji: "⌚", name: "watch" },
                { emoji: "📱", name: "mobile phone" },
                { emoji: "💻", name: "laptop" },
                { emoji: "⌨️", name: "keyboard" },
                { emoji: "🖥️", name: "desktop computer" },
                { emoji: "🖨️", name: "printer" },
                { emoji: "🖱️", name: "computer mouse" },
                { emoji: "🖲️", name: "trackball" },
                { emoji: "📷", name: "camera" },
                { emoji: "📸", name: "camera with flash" },
                { emoji: "📹", name: "video camera" },
                { emoji: "🎥", name: "movie camera" },
                { emoji: "📞", name: "telephone receiver" },
                { emoji: "☎️", name: "telephone" },
                { emoji: "📟", name: "pager" },
                { emoji: "📠", name: "fax machine" },
                { emoji: "📺", name: "television" },
                { emoji: "📻", name: "radio" },
                { emoji: "🎙️", name: "studio microphone" },
                { emoji: "🎚️", name: "level slider" }
            ]
        },
        {
            category: "Symbols",
            emojis: [
                { emoji: "❤️", name: "red heart" },
                { emoji: "🧡", name: "orange heart" },
                { emoji: "💛", name: "yellow heart" },
                { emoji: "💚", name: "green heart" },
                { emoji: "💙", name: "blue heart" },
                { emoji: "💜", name: "purple heart" },
                { emoji: "🖤", name: "black heart" },
                { emoji: "🤍", name: "white heart" },
                { emoji: "🤎", name: "brown heart" },
                { emoji: "💔", name: "broken heart" },
                { emoji: "❣️", name: "heart exclamation" },
                { emoji: "💕", name: "two hearts" },
                { emoji: "💞", name: "revolving hearts" },
                { emoji: "💓", name: "beating heart" },
                { emoji: "💗", name: "growing heart" },
                { emoji: "💖", name: "sparkling heart" },
                { emoji: "💘", name: "heart with arrow" },
                { emoji: "💝", name: "heart with ribbon" }
            ]
        },
        {
            category: "Flags",
            emojis: [
                { emoji: "🏁", name: "chequered flag" },
                { emoji: "🚩", name: "triangular flag" },
                { emoji: "🎌", name: "crossed flags" },
                { emoji: "🏴", name: "black flag" },
                { emoji: "🏳️", name: "white flag" },
                { emoji: "🏳️‍🌈", name: "rainbow flag" },
                { emoji: "🏳️‍⚧️", name: "transgender flag" },
                { emoji: "🏴‍☠️", name: "pirate flag" },
                { emoji: "🇦🇨", name: "flag: Ascension Island" },
                { emoji: "🇦🇩", name: "flag: Andorra" },
                { emoji: "🇦🇪", name: "flag: United Arab Emirates" },
                { emoji: "🇦🇫", name: "flag: Afghanistan" },
                { emoji: "🇦🇬", name: "flag: Antigua & Barbuda" },
                { emoji: "🇦🇮", name: "flag: Anguilla" },
                { emoji: "🇦🇱", name: "flag: Albania" },
                { emoji: "🇦🇲", name: "flag: Armenia" }
            ]
        }
    ];

    // DOM elements
    const emojiGrid = document.getElementById('emoji-grid');
    const searchBar = document.getElementById('search-bar');

    // Function to create emoji grid
    function createEmojiGrid(emojis = []) {
        emojiGrid.innerHTML = '';

        if (emojis.length === 0) {
            // Display all categories
            emojiData.forEach(category => {
                const categoryHeader = document.createElement('div');
                categoryHeader.className = 'category-header';
                categoryHeader.textContent = category.category;
                emojiGrid.appendChild(categoryHeader);

                category.emojis.forEach(emojiItem => {
                    addEmojiToGrid(emojiItem);
                });
            });
        } else {
            // Display search results
            if (emojis.length === 0) {
                const noResults = document.createElement('div');
                noResults.className = 'no-results';
                noResults.textContent = 'No emojis found';
                emojiGrid.appendChild(noResults);
            } else {
                emojis.forEach(emojiItem => {
                    addEmojiToGrid(emojiItem);
                });
            }
        }
    }

    // Function to add a single emoji to the grid
    function addEmojiToGrid(emojiItem) {
        const emojiElement = document.createElement('div');
        emojiElement.className = 'emoji-item';
        emojiElement.textContent = emojiItem.emoji;
        emojiElement.setAttribute('data-name', emojiItem.name);
        emojiElement.title = emojiItem.name;
        
        // Add click event for copying
        emojiElement.addEventListener('click', function() {
            navigator.clipboard.writeText(emojiItem.emoji)
                .then(() => {
                    emojiElement.classList.add('copied');
                    setTimeout(() => {
                        emojiElement.classList.remove('copied');
                    }, 1500);
                })
                .catch(err => {
                    console.error('Could not copy text: ', err);
                });
        });
        
        emojiGrid.appendChild(emojiElement);
    }

    // Search functionality
    searchBar.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            createEmojiGrid();
            return;
        }
        
        // Find matching emojis
        const filteredEmojis = [];
        emojiData.forEach(category => {
            category.emojis.forEach(emojiItem => {
                if (emojiItem.name.toLowerCase().includes(searchTerm)) {
                    filteredEmojis.push(emojiItem);
                }
            });
        });
        
        // Display results
        emojiGrid.innerHTML = '';
        if (filteredEmojis.length === 0) {
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.textContent = 'No emojis found';
            emojiGrid.appendChild(noResults);
        } else {
            filteredEmojis.forEach(emojiItem => {
                addEmojiToGrid(emojiItem);
            });
        }
    });

    // Initial load
    createEmojiGrid();
});
