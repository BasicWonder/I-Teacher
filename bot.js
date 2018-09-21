const discord = require("discord.js");
const yourbot = new discord.Client();
const prefix = "/"
const version = "1.0.0"
yourbot.on("ready",()=>{
        console.log("Bot is online");
})

yourbot.on("message",(message)=>{
   mention = message.mention.users.first(); 
   if(!message.content.startsWith(prefix)) return;

   if(message.content.startsWith(prefix + "strain-am " + author + " " + string)){
        if (mention == null) { return;}
        message.delete(); 
        mentionMessage = message.content.slice (8);
        const propety =  MessageChannel.name("events-bulletin")
        propety:postMessage("@everyone [!] Training for **Security** Interns ONLY at" + toString(string) + "am EST. It will be hosted at the training center by **xLxckz**. Try to come 5-10 minutes early so that we can start on time!")
   }
   if(message.content.startsWith(prefix + "rtrain-am " + author + " " + string)){
    if (mention == null) { return;}
    message.delete(); 
    mentionMessage = message.content.slice (8);
    const propety =  MessageChannel.name("events-bulletin")
    propety:postMessage("@everyone [!] Training for **Receptionist** Interns ONLY at" + toString(string) + "am EST. It will be hosted at the training center by **xLxckz**. Try to come 5-10 minutes early so that we can start on time!")
}
if(message.content.startsWith(prefix + "htrain-am " + author + " " + string)){
    if (mention == null) { return;}
    message.delete(); 
    mentionMessage = message.content.slice (8);
    const propety =  MessageChannel.name("events-bulletin")
    propety:postMessage("@everyone [!] Training for **Housekeeping** Interns ONLY at" + toString(string) + "am EST. It will be hosted at the training center by **xLxckz**. Try to come 5-10 minutes early so that we can start on time!")
}
if(message.content.startsWith(prefix + "btrain-am " + author + " " + string)){
    if (mention == null) { return;}
    message.delete(); 
    mentionMessage = message.content.slice (8);
    const propety =  MessageChannel.name("events-bulletin")
    propety:postMessage("@everyone [!] Training for **Bartenders** Interns ONLY at" + toString(string) + "am EST. It will be hosted at the training center by **xLxckz**. Try to come 5-10 minutes early so that we can start on time!")
}
if(message.content.startsWith(prefix + "strain-pm " + author + " " + string)){
    if (mention == null) { return;}
    message.delete(); 
    mentionMessage = message.content.slice (8);
    const propety =  MessageChannel.name("events-bulletin")
    propety:postMessage("@everyone [!] Training for **Security** Interns ONLY at" + toString(string) + "pm EST. It will be hosted at the training center by **xLxckz**. Try to come 5-10 minutes early so that we can start on time!")
}
if(message.content.startsWith(prefix + "rtrain-pm " + author + " " + string)){
if (mention == null) { return;}
message.delete(); 
mentionMessage = message.content.slice (8);
const propety =  MessageChannel.name("events-bulletin")
propety:postMessage("@everyone [!] Training for **Receptionist** Interns ONLY at" + toString(string) + "pm EST. It will be hosted at the training center by **xLxckz**. Try to come 5-10 minutes early so that we can start on time!")
}
if(message.content.startsWith(prefix + "htrain-pm " + author + " " + string)){
if (mention == null) { return;}
message.delete(); 
mentionMessage = message.content.slice (8);
const propety =  MessageChannel.name("events-bulletin")
propety:postMessage("@everyone [!] Training for **Housekeeping** Interns ONLY at" + toString(string) + "pm EST. It will be hosted at the training center by **xLxckz**. Try to come 5-10 minutes early so that we can start on time!")
}
if(message.content.startsWith(prefix + "btrain-pm " + author + " " + string)){
if (mention == null) { return;}
message.delete(); 
mentionMessage = message.content.slice (8);
const propety =  MessageChannel.name("events-bulletin")
propety:postMessage("@everyone [!] Training for **Bartenders** Interns ONLY at" + toString(string) + "pm EST. It will be hosted at the training center by **xLxckz**. Try to come 5-10 minutes early so that we can start on time!")
}
}),
yourbot.login("NDkyNDI0Mjk5MjM2NDI1NzI4.DobrNQ.g6eF7rBI9gWmcw6V1mW2KoJVrIk")
