var server = require("./server");
var chalk = require("chalk");
var app = require("./server");

var ds = server.dataSources.db;

async function createData() {

    //User Creation
    var cfUser = await app.models.cfuser.create({
        firstName: "Surya",
        lastName: "Prakash",
        password: "123456",
        mobile: "(+91)9908035150",
        email: "bogadhi.surya424@gmail.com",
        emailVerified: true,
        avatarUrl: "/uploads/profilepics/default-profile.png",
        username: "surya424"
    });
    console.log(chalk.green.bold("User created!! Email: "), cfUser.email);

    var cfUser = await app.models.cfuser.create({
        firstName: "anil",
        lastName: "kumar",
        password: "123456",
        mobile: "(+91)9999999999",
        email: "anil@gmail.com",
        emailVerified: true,
        avatarUrl: "/uploads/profilepics/default-profile.png",
        username: "anil123"
    });
    console.log(chalk.green.bold("User created!! Email: "), cfUser.email);

    var cfUser = await app.models.cfuser.create({
        firstName: "bhanu",
        lastName: "kumar",
        password: "123456",
        mobile: "(+91)9999999999",
        email: "bhanu@gmail.com",
        emailVerified: true,
        avatarUrl: "/uploads/profilepics/default-profile.png",
        username: "bhanu123"
    });
    console.log(chalk.green.bold("User created!! Email: "), cfUser.email);


    // blog creation 
    var cfBlog = await app.models.blog.create({
        title: "Rewatching Catch Me If You Can Through The Lens of Modern Cybersecurity",
        content: "Learn why Real-time Threat Storyboarding is foundational to quickly detecting and responding to threats before attackers can steal valuable data.",
        tags: "Modern Cybersecurity,Storyboarding,Real-time,Confluera ",
        userId: "1"
    });
    console.log(chalk.green.bold("Blog1 posted!!!!"));

    var cfBlog = await app.models.blog.create({
        title: "Don’t Gamble with your Cybersecurity Solution",
        content: "Confluera is changing the game in cybersecurity by bringing automation and storyboarding capabilities to detection and response.",
        tags: "Cybersecurity Solution,Confluera",
        userId: "1"
    });
    console.log(chalk.green.bold("Blog2 posted!!!!"));

    var cfBlog = await app.models.blog.create({
        title: "Exchange Server Attacks — A recurring story",
        content: "In depth analysis of the Microsoft Exchange vulnerabilities and how to detect them before the damage is done.",
        tags: "Microsoft Exchange,Storyboarding,Real-time",
        userId: "1"
    });
    console.log(chalk.green.bold("Blog3 posted!!!!"));



    //comments creation 
    var cfComments = await app.models.comments.create({
        content: "Amazing write-up!",
        userId: "2",
        blogId: "1"
    });
    console.log(chalk.green.bold("Comments added for blog1!!!!"));

    var cfComments = await app.models.comments.create({
        content: "Great share!",
        userId: "2",
        blogId: "1"
    });
    console.log(chalk.green.bold("Comments added for blog1!!!!"));

    ds.disconnect();
}

createData();
