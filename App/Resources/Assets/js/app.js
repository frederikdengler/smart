$(document).ready(function () {
    console.log(intents);
    if (annyang) {

        var commands = {
            'hello': function() { alert('Hello world!'); }
        };

        // Add our commands to annyang
        annyang.addCommands(commands);

        // Start listening.
        annyang.start();
    }
});