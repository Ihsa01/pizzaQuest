document.addEventListener("DOMContentLoaded", function () {


    const homeContainer = document.getElementById("home-container");
    const gameContainer = document.getElementById("game-container");
    const storyText = document.getElementById("story-text");
    const choicesContainer = document.getElementById("choices");
    const exitBtn = document.getElementById("exit-btn");

    if (!homeContainer || !gameContainer || !storyText || !choicesContainer) {
        console.error("Something missing dude");
        return;
    }

    const storyData = {
        start: {
            text: "You woke up and realised that you overslept and it's Annual Pizza Festival today. You vowed yourself yesterday that you are gonna win the grand prize of the festival, The Mega Cheese Pizza Slice!!!!",
            image: "assets/images/start.webp",
            choices: [
                { text: "Jump out of the window right now!", next: "one" },
                { text: "Slingshot yourself out of the window", next: "two" },
                { text: "Steal your neighbour's skateboard to go to the festival", next: "three" },

            ]
        },

        one: {
            text: "After jumping outta the window you found yourself inside a pizza delivery truck. Choose wisely",
            image: "assets/images/jumpingwind.webp",
            choices: [
                { text: "Eat pizza and hide in the pizza box", next: "four" },
                { text: "Kick out the driver and drive the truck", next: "five" },
                { text: "Pose as pizza delivery boy", next: "six" }
            ]
        },

        two: {
            text: "You find yourself among a marching band",
            image: "assets/images/landingband.webp",
            choices: [
                { text: "Steal a baton and run", next: "seven" },
                { text: "Start a dance battle", next: "eight" },
                { text: "Use a big bass drum and roll down the hill", next: "nine" }
            ]
        },
        three: {
            text: "You get caught in the act. Your neighbour Chase challenge you to race to the fest",
            image: "assets/images/challenge.webp",
            choices: [
                { text: "Accept the race", next: "nine" },
                { text: "Cheat by throwing a banana peel at him", next: "nine" },
                { text: "Convince him to team up for the competition", next: "ten" }
            ]
        },
        four: {
            text: "You get transfered to a pizza warehouse",
            image: "assets/images/hidingbox.webp",
            choices: [
                { text: "Stuff pizza into your shirt and try walking out", next: "six" },
                { text: "Hijack a hotdog cart nearby", next: "eleven" },
                { text: "Make an emergency call to the cops pretending to be the manager", next: "twelve" }
            ]
        },
        five: {
            text: "Now you're geting chased by police",
            image: "assets/images/truckdriver.webp",
            choices: [
                { text: "Drive into a carwash and disguise yourself in soap suds", next: "nine" },
                { text: "Ditch the truck for a food cart nearby", next: "eleven" },
                { text: "Bribe the cops to let you go", next: "nine" }
            ]
        },
        six: {
            text: "You now are pretending to be a pizza delivery boy to not get noticed",
            image: "assets/images/pizzadeli.webp",
            choices: [
                { text: "Start taking customer orders confidently", next: "thirteen" },
                { text: "Get caught and convince the boss you're an intern", next: "fourteen" },
                { text: "Make a fake emergency and evacuate the store", next: "twelve" }
            ]
        },
        seven: {
            text: "Getting chased by an angry band is terrible",
            image: "assets/images/chaseband.webp",
            choices: [
                { text: "Run into a store and disguise youself as the mannequin", next: "nine" },
                { text: "Hijack a hotdog cart nearby", next: "eleven" },
                { text: "Yell FIRE!! loudly and cause a panic", next: "twelve" }
            ]
        },
        eight: {
            text: "Being the centre of attention doesnt sounds good now",
            image: "assets/images/dance.webp",
            choices: [
                { text: "Do an epic backflip & moonwalk away", next: "thirteen" },
                { text: "Steal spotlight and become an influencer", next: "thirteen" },
                { text: "Fake an injury and use it to sneak past everyone", next: "nine" }
            ]
        },
        nine: {
            text: "Somehow reached the festival. You think blending in as a worker will help you win the pizza",
            image: "assets/images/blendingin.webp",
            choices: [
                { text: "Start a performance to distract people", next: "eight" },
                { text: "Bribe a worker to get you the prize pizza", next: "sixteen" },
                { text: "Sneak up to the podium where the prize is kept", next: "fifteen" }
            ]
        },
        ten: {
            text: "With combined efforts you won the competition together and split the pizza. BFF goals fr!!",
            image: "assets/images/bff.webp",

        },
        eleven: {
            text: "Zooming through the alleys in hotodog cart is fun but now is not the time",
            image: "assets/images/hodogcart.webp",
            choices: [
                { text: "Crash into a cotton candy store for soft landing", next: "eight" },
                { text: "Ride the cart straight into the festival ground", next: "nine" }
            ]
        },
        twelve: {
            text: "You have caused a mass panic and its causing chaos",
            image: "assets/images/citypanic.webp",
            choices: [
                { text: "Get arrested", next: "fifteen" },
                { text: "Steal a vehicle", next: "five" }
            ]
        },
        thirteen: {
            text: "Have to be famous to get peoples vote and have a chance to win the pizza",
            image: "assets/images/talking.webp",
            choices: [
                { text: "Convince people to vote for you", next: "seventeen" },
                { text: "Challenge chad to a sphagetti fight and the winner gets the prize", next: "seventeen" }
            ]
        },
        fourteen: {
            text: "You got access to the power room now",
            image: "assets/images/powerroom.webp",
            choices: [
                { text: "Trip over a wire and shut down the lights", next: "eight" },
                { text: "Try to steal the mega prize", next: "fifteen" }
            ]
        },
        fifteen: {
            text: "YGot arrested. YOU LOSE!",
            image: "assets/images/arrest.webp",

        },
        fifteen: {
            text: "You Got arrested. YOU LOSE!",
            image: "assets/images/arrest.webp",

        },
        sixteen: {
            text: "A bit unethical but you got what you wanted.CONGRATS!!!",
            image: "assets/images/win.webp",

        },
        seventeen: {
            text: "YOU WON!!!!",
            image: "assets/images/vote.webp",

        }

    };

    function displayScene(sceneKey) {
        const scene = storyData[sceneKey];

        let backgroundOverlay = document.getElementById("background-overlay");
        if (!backgroundOverlay) {
            backgroundOverlay = document.createElement("div");
            backgroundOverlay.id = "background-overlay";
            document.body.appendChild(backgroundOverlay);
        }
        backgroundOverlay.style.backgroundImage = `url(${scene.image})`;

        document.getElementById("game-container").style.backgroundImage = `url(${scene.image})`;

        const storyText = document.getElementById("story-text");
        storyText.innerText = "";

        const choicesContainer = document.getElementById("choices");
        choicesContainer.innerHTML = "";
        choicesContainer.style.display = "none";

        typeText(scene.text, 0, () => {
            choicesContainer.style.display = "flex";
            scene.choices.forEach(choice => {
                const btn = document.createElement("button");
                btn.classList.add("choice-btn");
                btn.innerText = choice.text;
                btn.onclick = () => displayScene(choice.next);
                choicesContainer.appendChild(btn);
            });
        });
    }

    function typeText(text, index = 0, callback) {
        if (index < text.length) {
            document.getElementById("story-text").innerText = text.substring(0, index + 1);
            setTimeout(() => typeText(text, index + 1, callback), 50);
        } else if (callback) {
            callback();
        }
    }
    let bgMusic = new Audio("assets/sounds/bg.mp3"); 
    bgMusic.loop = true; 
    bgMusic.volume = 0.5; 

    function playBackgroundMusic() {
        if (bgMusic.paused) {
            bgMusic.play().catch(error => console.log("Autoplay blocked:", error));
        }
    }
    function stopBackgroundMusic() {
        bgMusic.pause();
        bgMusic.currentTime = 0; 
    }
    document.getElementById("disclaimer-ok-btn").addEventListener("click", function() {
        document.getElementById("disclaimer-popup").style.display = "none";
    });


    document.getElementById("start-btn").addEventListener("click", function () {
        playBackgroundMusic();
        homeContainer.classList.add("hidden");
        gameContainer.classList.remove("hidden");
        displayScene("start");
    });


    document.getElementById("exit-btn").addEventListener("click", function () {
        stopBackgroundMusic();
        homeContainer.classList.remove("hidden");
        gameContainer.classList.add("hidden");
    })
});