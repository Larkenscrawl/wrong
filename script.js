function toggleText(element) {
    const textBlocks = {
        "block1": [
            `She saw her ghost self put a pill on her ghost tongue walk to the ghost trick and stick it in his mouth. She saw the ghost trick swallow it and pass out. Her ghost self then rummaged through the ghost trick’s coat pocket grabbed his wallet and bailed.`,
            `having sex with the ghost trick. Afterwards as the ghost trick was sleeping her ghost self sat down on the floor took a loaded syringe from her purse shot up and nodded off. The ghost trick woke up a while later took her purse and took off.`,
            `giving the ghost trick a few oxys. She noticed that her ghost self put a benzo in there by accident. The ghost trick crushed the pills and smoked them. He lay down in bed and after a while he stopped breathing. Her ghost self tried to shake him out of it but couldn’t. She said “oh shit” and bolted.`
        ],
        "block2": [
            `“Fuck off” she said.
“Don’t be like that now how about fifty?”
“Eat shit I’m fourteen.”
“Stuck-up bitch” he said and left trailing booze stink behind him.`,
            `“Make it a hundred” she said.
“Fifty” he said.
“A hundred or I’m calling the cops” she said.
“Fine…” He said “fuckin’ gold diggers startin’ early these days…”`,
            `“Fuck you even talking to me for? I’m gonna call my dad!”
“Call him he’s a bitch”
“Dad!”
“No wait shitfire shush ok I’m going” he said and left.`
        ],
        "block3": [
            `“Just give me the black tar” she said.
“Fine suit yerself” he said swiveling around and opening the bottom drawer.`,
            `“Ok but gimme a fresh one” she said.
“Fresh spike for the princess…” he said rummaging through the middle drawer.`,
            `“Fine but can I borrow some cash? I need to get a tooth fixed. Tricks are complainin’” She said.
“Shitfire… Sure gimme a second” he unlocked the top drawer. She lunged at him and knocked him to the ground. As he was thrashing she took the money from the drawer and fled.`
        ],
        "block4": [
            `“I can’t Haley… I’ve tried…”
“Try again… You’re not a junkie Maggie you know that…”
“Just give me a few months…”
“You’ve said that before”
“Just a few months so I can get my shit in order.”
“No Maggie… I’m either driving you to rehab right now or you’re on your own.”
 “Haley you’re being mean.”
Haley wiped her tears looked away. “I’m sorry Maggie… You should pack up now.”`,
            `“I can’t Haley…”
“Why? Me and Darryl will cover the expenses!”
“That’s not it…”
“What is it then?”
“Something happened last time” Maggie said.
“What happened?”
“My roommate there… She did stuff to me…”
“Oh my God Maggie… Maggie oh my God why didn’t you tell me?”
“I don’t know…”
“Listen we’ll take you to a different one… Would you be okay with that? Could we do that?”
Maggie went silent.
“Please say yes” Haley said.
“Okay” Maggie said.
“Okay?”
“Okay” Maggie said between sobs.`,
            `“I can’t Haley it’s too much” Maggie said.
“It’s too much for me too Maggie.”
Maggie blurted “Oh fuck off…”
“Sorry?” Haley said.
Maggie turned to her sister “you just watch podcasts all day while Darryl pays the bills. Give me a break.”
“Watch it Maggie he’s paying your bills too.”
Maggie got up “Yeah well he’s fucking the sales manager at his little car dealership! What’s that worth huh?” she gestured around the house “is all this shit worth your dignity?”
“Oh that’s special coming from you! That’s real special! You sell your body for a living Maggie!”
“You’re right! I shoulda sold it for a house!”
“Get out of here! Now!”`
        ],
        "block5": [
            `shooting up her arm closing her eyes and dying thick spit trickling down her hung head.`,
            `shooting up her neck rolling her eyes until it was all white like a statue and dying.`,
            `taking off her heels and shooting up between her toes and slumping over dead arms outstretched like a sleeping child.`,
            `shooting up the artery and flopping around in agony like a fish on a boat screaming so hard her voice cracked and vanished then dying with her hip thrust in the air like a yoga pose.`,
            `dying in the middle of the bandstand.`,
            `dying at the entrance of the bandstand.`,
            `dying facing out.`,
            `dying facing in.`,
            `dying facing up.`,
            `dying facing down.`,
            `dying.`,
            `dying.`,
            `dying.`,
            `dying.`
        ]
    };

    const blockId = element.dataset.block;
    const currentIndex = parseInt(element.dataset.index, 10);
    const nextIndex = (currentIndex + 1) % textBlocks[blockId].length;

    element.innerHTML = textBlocks[blockId][nextIndex];
    element.dataset.index = nextIndex;
    element.style.color = getColorForText(blockId, nextIndex);
}

function getColorForText(blockId, index) {
    const colors = {
        "block1": ["red", "blue", "green"],
        "block2": ["red", "blue", "green"],
        "block3": ["red", "blue", "green"],
        "block4": ["red", "blue", "green"],
        "block5": [
            "red", "blue", "green", "purple", "pink", "magenta", "lightpink", 
            "#000000", "#333333", "#666666", "#999999", "#CCCCCC", "#DDDDDD", "#EEEEEE", "#FFFFFF"
        ]
    };
    return colors[blockId][index] || "black";
}
