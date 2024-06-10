document.addEventListener("DOMContentLoaded", function() {
    const textBlocks = {
        block1: [
            "She saw her ghost self put a pill on her ghost tongue walk to the ghost trick and stick it in his mouth. She saw the ghost trick swallow it and pass out. Her ghost self then rummaged through the ghost trick’s coat pocket grabbed his wallet and bailed.",
            "having sex with the ghost trick. Afterwards as the ghost trick was sleeping her ghost self sat down on the floor took a loaded syringe from her purse shot up and nodded off. The ghost trick woke up a while later took her purse and took off.",
            "giving the ghost trick a few oxys. She noticed that her ghost self put a benzo in there by accident. The ghost trick crushed the pills and smoked them. He lay down in bed and after a while he stopped breathing. Her ghost self tried to shake him out of it but couldn’t. She said “oh shit” and bolted."
        ],
        block2: [
            "“Fuck off” she said.<br>“Don’t be like that now how about fifty?”<br>“Eat shit I’m fourteen.”<br>“Stuck-up bitch” he said and left trailing booze stink behind him.",
            "“Make it a hundred” she said.<br>“Fifty” he said.<br>“A hundred or I’m calling the cops” she said.<br>“Fine…” He said “fuckin’ gold diggers startin’ early these days…”",
            "“Fuck you even talking to me for? I’m gonna call my dad!”<br>“Call him he’s a bitch”<br>“Dad!”<br>“No wait shitfire shush ok I’m going” he said and left."
        ],
        block3: [
            "“Just give me the black tar” she said.<br>“Fine suit yerself” he said swiveling around and opening the bottom drawer.",
            "“Ok but gimme a fresh one” she said.<br>“Fresh spike for the princess…” he said rummaging through the middle drawer.",
            "“Fine but can I borrow some cash? I need to get a tooth fixed. Tricks are complainin’” She said.<br>“Shitfire… Sure gimme a second” he unlocked the top drawer. She lunged at him and knocked him to the ground. As he was thrashing she took the money from the drawer and fled."
        ],
        block4: [
            "Maggie started crying “I know… I would like to meet him though” Maggie said. Her sister started crying too. She reached for Maggie’s hand.<br>“Just take rehab and you can stay how hard is that?” Haley said.<br>“I can’t Haley… I’ve tried…”<br>“Try again… You’re not a junkie Maggie you know that…”<br>“Just give me a few months…”<br>“You’ve said that before”<br>“Just a few months so I can get my shit in order.”<br>“No Maggie… I’m either driving you to rehab right now or you’re on your own.”<br>Maggie looked her sister in the eye “Haley you’re being mean.”<br>Haley wiped her tears looked away. “I’m sorry Maggie… You should pack up now.”",
            "“I can’t Haley…”<br>“Why? Me and Darryl will cover the expenses!”<br>“That’s not it…”<br>“What is it then?”<br>“Something happened last time” Maggie said.<br>“What happened?”<br>“My roommate there… She did stuff to me…”<br>“Oh my God Maggie… Maggie oh my God why didn’t you tell me?”<br>“I don’t know…”<br>“Listen we’ll take you to a different one… Would you be okay with that? Could we do that?”<br>Maggie went silent.<br>“Please say yes” Haley said.<br>“Okay” Maggie said.<br>“Okay?”<br>“Okay” Maggie said between sobs.",
            "“I can’t Haley it’s too much” Maggie said.<br>“It’s too much for me too Maggie.”<br>Maggie blurted “Oh fuck off…”<br>“Sorry?” Haley said.<br>Maggie turned to her sister “you just watch podcasts all day while Darryl pays the bills. Give me a break.”<br>“Watch it Maggie he’s paying your bills too.”<br>Maggie got up “Yeah well he’s fucking the sales manager at his little car dealership! What’s that worth huh?” she gestured around the house “is all this shit worth your dignity?”<br>“Oh that’s special coming from you! That’s real special! You sell your body for a living Maggie!”<br>“You’re right! I shoulda sold it for a house!”<br>“Get out of here! Now!”"
        ],
        block5: [
            "shooting up her arm closing her eyes and dying thick spit trickling down her hung head.",
            "shooting up her neck rolling her eyes until it was all white like a statue and dying.",
            "taking off her heels and shooting up between her toes and slumping over dead arms outstretched like a sleeping child.",
            "shooting up the artery and flopping around in agony like a fish on a boat screaming so hard her voice cracked and vanished then dying with her hip thrust in the air like a yoga pose.",
            "dying in the middle of the bandstand.",
            "dying at the entrance of the bandstand.",
            "dying facing out.",
            "dying facing in.",
            "dying facing up.",
            "dying facing down.",
            "dying."
        ]
    };

    document.querySelectorAll('.colored-text').forEach(el => {
        el.addEventListener('click', () => {
            const block = el.dataset.block;
            const index = parseInt(el.dataset.index, 10);
            const nextIndex = (index + 1) % textBlocks[block].length;
            el.innerHTML = textBlocks[block][nextIndex];
            el.dataset.index = nextIndex;
            document.querySelectorAll(`.colored-text[data-block="${block}"]`).forEach(otherEl => {
                if (otherEl !== el) {
                    otherEl.classList.add('hidden');
                }
            });
            el.classList.remove('hidden');
        });
    });
});
