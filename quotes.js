const localQuotes = [
    {
        text: 'I wipe my a** with your feelings.',
        author: 'Tony Soprano',
    },
    {
        text: 'That was real? I saw that movie, I thought it was bulls**t.',
        author: 'Christopher Moltisanti',
    },
    {
        text: 'From now on everyday is a gift.',
        author: 'Tony Soprano',
    },
    {
        text: 'So what? No f*cking ziti now?!',
        author: 'AJ Soprano',
    },
    {
        text: 'His house looked like s**t.',
        author: 'Cristopher Moltisanti',
    },
    {
        text: "I don't go down enough!",
        author: 'Corrado Soprano Jr.',
    },
    {
        text: 'Satanic black magic. Sick s**t!',
        author: 'Paulie Walnuts',
    },
    {
        text: 'I wanna take action here.',
        author: 'Silvio Dante',
    },
    {
        text: 'Are you in the mafia?',
        author: 'Meadow Soprano',
    },
    {
        text: 'You probably wiped your a** barehanded before you came to this country.',
        author: 'Paulie Walnuts',
    },
    {
        text: "Well you've must've been the top of your f*cking class.",
        author: 'Tony Soprano',
    },
    {
        text: 'No, an actual f*cking cake!',
        author: 'John Sacrimoni',
    },
    {
        text: 'Oh I wish the Lord would take me now.',
        author: 'Livia Soprano',
    },
    {
        text: 'You got to give that s**t a rest, man needs his seven hours.',
        author: 'Paulie Walnuts',
    },
    {
        text: "Send him up!",
        author: "Tony Soprano",
    },
    {
        text: "There are a lot of things I could say that I'm not going to say!",
        author: "Janice Soprano",
    },
    {
        text: "You know, Quasimodo predicted all this.",
        author: "Bobby Baccalieri",
    },
    {
        text: "Better yet, go to the ear, nose and throat department, get your hearing checked!",
        author: "Paulie Walnuts",
    },
    {
        text: "Whatever happened to Gary Cooper, the strong silent type?",
        author: "Tony Soprano",
    },
    {
        text: "There's an old italian saying: You f*ck up once, you lose two teeth.",
        author: "Tony Soprano",
    },
    {
        text: "Just when I thought I was out, they pull me back in!",
        author: "Silvio Dante",
    },
    {
        text: "You probably don't even hear it when it happens, right?",
        author: "Bobby Baccalieri",
    },
    {
        text: "Well the nose is as far as I'm willing to go.",
        author: "Tony Soprano",
    },
    {
        text: "How many Migs you shot down last week?",
        author: "Tony Soprano",
    },
    {
        text: "Where's that f*cking manicot?",
        author: "Corrado Soprano Jr.",
    },
    {
        text: "Your brother Billy, whatever happened there.",
        author: "Carmine Lupertazzi Jr.",
    },
    {
        text: "No more Butchie, no more of this.",
        author: "Phil Leotardo",
    },
    {
        text: "You distracted me, I'm taking a Mulligan.",
        author: "Carmine Lupertazzi Sr.",
    },
    {
        text: "I hate this fucking s**t!",
        author: "Carmine Lupertazzi Sr.",
    },
    {
        text: "Family? I told you, they're a glorified crew!",
        author: "Carmine Lupertazzi Sr.",
    },
    {
        text: "I compromised.",
        author: "Phil Leotardo",
    },
    {
        text: "Wes Calwell, Wes Calwell... West. Caldwell.",
        author: "Tony Blundetto",
    },
    {
        text: "Now that's a hit!",
        author: "Hesh Rabkin",
    },
    {
        text: "Thank you, but I've recorded in Denmark.",
        author: "Lead singer of Visiting Day",
    },
    {
        text: "There are no scraps in my scrapbook. Make it happen.",
        author: "Phil Leotardo",
    },
    {
        text: "I did twenty f*cking years.",
        author: "Phil Leotardo",
    },
    {
        text: "He never had the makings of a varsity athlete",
        author: "Corrado Soprano Jr.",
    },
    {
        text: "Not in the face ok? Can you give me that?",
        author: 'Salvatore "Big Pussy" Bonpensiero',
    },
    {
        text: "Peeps? It's a f*cking nickname, family name is Peparelli.",
        author: "Tony Soprano",
    },
    {
        text: "He was gay Gary Cooper?",
        author: "Christopher Moltisanti",
    },
    {
        text: "I don't feel like I'm sitting at twelve a clock!",
        author: "Phil Leotardo",
    },
    {
        text: "47. He was a f*cking kid.",
        author: "Phil Leotardo",
    },
    {
        text: "I guess you could call that a dick.",
        author: "Paulie Walnuts",
    },
    {
        text: "Welcome to the NFL rookie.",
        author: "Paulie Walnuts",
    },
    {
        text: "A Don doesn't wear shorts.",
        author: "Carmine Lupertazzi Sr.",
    },
    {
        text: "Wastemanagement consultant.",
        author: "Tony Soprano",
    },
    {
        text: "Poppers and weird sex!",
        author: "Tony Soprano",
    },
    {
        text: "Wow, listen to Mr. Mob Boss.",
        author: "Meadow Soprano",
    },
    {
        text: "You got a problem besides those f*cking pants?",
        author: "Tony Soprano",
    },
    {
        text: "How about this humidity?",
        author: "Phil Leotardo",
    },
    {
        text: "Ho finally, I started growing mushrooms out of my a**.",
        author: "Vito Spatafore",
    },
    {
        text: "Easy on the sugar honey, they tell I'm sweet enough.",
        author: "Phil Leotardo",
    },
    {
        text: "She's ready to order.",
        author: "Tony Soprano",
    },
    {
        text: "You know that fat c*cksucker says I look like the Shah of Iran?",
        author: "Phil Leotardo",
    },
    {
        text: "What's the matter with you? You look like a Puerto Rican whore.",
        author: "Phil Leotardo",
    },
    {
        text: "You're entitled to sh*t!",
        author: "Tony Soprano",
    },
    {
        text: "Sacre bleu, where is me mama?",
        author: "Tony Soprano",
    },
    {
        text: "Gabagool? Over here!",
        author: "Silvio Dante",
    },
    {
        text: "I GET IT!",
        author: "Tony Soprano",
    },
    {
        text: "I tell you one thing and I'm not ashamed to say it: My estimation of John Sacrimoni as a man, just f*cking plummeted.",
        author: "Phil Leotardo"
    }
]