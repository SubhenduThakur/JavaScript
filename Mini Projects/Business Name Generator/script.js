
        let adjectives = {
            name1: "Crazy",
            name2: "Amazing",
            name3: "Fire",
        }

        let shopName = {
            name1: "Engine",
            name2: "Foods",
            name3: "Garments",
        }

        let anotherWord = {
            name1: "Bros",
            name2: "Limited",
            name3: "Hub",
        }

        let adjectivesValues = Object.values(adjectives);
        let shopNameValues = Object.values(shopName);
        let anotherWordValues = Object.values(anotherWord);

        let random = Math.floor(Math.random() * 3);

        let randomAdjectives = adjectivesValues[random];
        let randomShopName = shopNameValues[random];
        let randomAnotherWord = anotherWordValues[random];

        let output = `${businessName} ${randomAdjectives} ${randomShopName} ${randomAnotherWord}`;
