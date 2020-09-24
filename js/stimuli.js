    var trial = {
      type: 'moving-window',
      words: "The dog chased the car but the car stood still so well, we had to redesign the layout of the trial and make a bunch of handy-dandy trial info shizzle js blocks. I wish there was a tool to make json objects from csv files!. O, wait... it's already made by MaartenUni! StillI wonder what this will look like, layout-wise..."
    }

    var practiceItems = [
    {
        type: "moving-window",
        part: "practice",
        condition: "undefined",
        testlet_index: 1,
        words: "Curious Lee was trying to build a mono summing cable using a resistor network. " + 
            "\n\n" +
        	"He was wondering if he'd be able to fit the soldered comnponents in a small jack plug." +
        	'"There is always the option of using an adapter", he thought, and threw the small jack' + 
        	' back in the container... ',
        question: "Did Curious Lee choose the small jack plug for his project?",
        choices: ["Yes", "No", "I want more than two buttons!"],
        correct: 1

    },
    {
        type: "moving-window",
        part: "practice",
        condition: "undefined",
        testlet_index: 1,
        words: "Polly Ester wanted to make a little custom cap for her audio recorder." + 
        " After some days of keeping it in her pocket, the cable would typically not connect very well." +
        " She found that she could almost knit a sweater from the fabric insidd the connector." + '"' +
        "I'm" + ' glad I bought these tweezers the other day"' + ', she thought....' + "\n\n" + 
        '"But what material to use for the cap?"',
        question: "Did you think of Polyester?",
        choices: ["Yes", "No", "What kind of question is this?"],
        correct: 2
    }
];