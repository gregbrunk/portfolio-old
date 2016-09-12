var db = require('./models');

//Card Array
var project_list = [
  {
    title: "Astronomer Client Portal",
    categories: ["Design", "Development"],
    tagline: "A client onboarding tool, for real!",
    tools: ["Node.JS", "Express.JS", "Angular.JS", "jQuery", "MongoDB", "Mongoose", "Passport", "Mongoose-encrypt", "Bootstrap"],
    summary: "The Astronomer Client Portal is an onboarding tool I was asked to build for a growing, data-analytics startup called Astronomer. The tool is intended to gather secure database, web account, and data-source credentials from new clients, encrypt all data securely on a MongoDB, and deliver the data back to Astronomer admins. I wanted to stretch myself by building the entire app on the MEAN stack, and by applying an existing organization's brand to my own development. The project, especially the encryption and decryption, was a great challenge. I think it turned out great... more to come.",
    keyimage: "http://i.imgur.com/kNcfM1W.png",
    otherimages: ["http://i.imgur.com/AKipHBR.jpg", "http://i.imgur.com/n62gR6A.png", "http://i.imgur.com/kXUHmUg.jpg", "http://i.imgur.com/II41jgN.png"],
    github: "https://github.com/gregbrunk/astronomer-client-portal",
    website: "https://astro-client-portal.herokuapp.com/#/"
  },
  {
    title: "Fourteeners",
    categories: ["Design", "Development"],
    tagline: "An app for Colorado climbers.",
    tools: ["Ruby", "Sinatra", "ActiveRecord", "jQuery", "AJAX", "Bootstrap", "PostgreSQL", "SweetAlerts", "Sketch"],
    summary: "Fourteeners is a prototype app to help climbers track all the 14'ers in Colorado, and identify those they have conquered. The goal of this project was to build a complete RESTful API on Ruby/Sinatra, using Active Record to interact with a PostgreSQL database. I also wanted to test my skills in mobile optimization and building a front-end as close to original design concepts as possible.",
    keyimage: "http://i.imgur.com/cbI2Sax.jpg",
    otherimages: ["http://i.imgur.com/Zbe8ZzR.jpg", "http://i.imgur.com/Do66SaU.jpg"],
    github: "https://github.com/gregbrunk/fourteeners",
    website: "https://fourteeners-app.herokuapp.com/"
  },
  {
    title: "Politicator",  
    categories: ["Design", "Development"],
    tagline: "An app for everyday Americans.",
    tools: ["Ruby on Rails", "ActiveRecord", "jQuery", "AJAX", "Bootstrap", "PostgreSQL", "Sketch"],
    summary: "Politicator is a prototype app that helps users undestand how their political leanings stack up against our presidential candidates. Think you know where you stand? See if you're right! Want to know more about what our candidates think about major current policies? This is the perfect app for you. See supporting quotes from the candidates themselves and take a quick survey to find out who you align with on major current issues. The goal of this project was to work in a 4 person team to build a full-stack app in Ruby on Rails, using Active Record to interact with a PostgreSQL database. That app needed to have multiple models, RESTful routes, users and authentication, authorization, error handling, and password encryption. The app also needed be mobile optimized and showcase an appealing UI. The purpose of the app was to enforce core MVC concepts and explore managing multiple models with User accounts.",
    keyimage: "http://i.imgur.com/pgXOOH4.jpg",
    otherimages: ["http://i.imgur.com/autmsAs.jpg", "http://i.imgur.com/qx6vJQq.png", "http://i.imgur.com/evLCXVk.jpg", "http://i.imgur.com/dhYLLnf.jpg"],
    github: "https://github.com/gregbrunk/politicator",
    website: "http://politicator.herokuapp.com/"
  },
  {
    title: "CMS Brand Guide",  
    categories: ["Design", "Branding", "Copywriting"],
    tagline: "A full-service branding project, from scratch.",
    tools: ["Sketch", "Keynote", "Brand Strategy", "Brand Archetypes"],
    summary: "When I was working as a Product Owner at Mindbox, we had never established any formal branding program, but we had many clients who whe thought could benefit from this service. So, my designer Luke and I decided to invent the process from scratch, after studying the work of some of our branding heros. This was our first ever branding project, and it went exeedingly well.",
    keyimage: "http://i.imgur.com/LkapCNu.jpg",
    otherimages: ["http://i.imgur.com/Fb86qoK.jpg", "http://i.imgur.com/eIm1Lvt.png", "http://i.imgur.com/mS8Hj14.png", "http://i.imgur.com/9dEJfHA.png", "http://i.imgur.com/ZroC0Ga.png", "http://i.imgur.com/OJetcsa.png", "http://i.imgur.com/fxKDH9Z.jpg"],
    github: "https://www.dropbox.com/s/bdit1s1mwopw517/CMS%20Brand%20Guide.pdf?dl=1",
    website: "https://www.completemech.com"
  },
];

// remove all records that match {} -- which means remove ALL records
db.Project.remove({}, function(err, projects){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all cards');
    // create new records based on the array project_list
    db.Project.create(project_list, function(err, projects){
      if (err) { return console.log('err', err); }
      console.log("created", project_list.length, "projects");
      process.exit();
    });
  }
});