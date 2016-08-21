var db = require('./models');

//Card Array
var project_list = [
  {
    title: "Fourteeners",
    categories: ["Design", "Development"],
    tools: ["Ruby", "Sinatra", "ActiveRecord", "jQuery", "AJAX", "Bootstrap", "PostgreSQL", "SweetAlerts", "Sketch"],
    summary: "Fourteeners is a prototype app to help climbers track all the 14'ers in Colorado, and identify those they have conquered. The goal of this project was to build a complete RESTful API on Ruby/Sinatra, using Active Record to interact with a PostgreSQL database. I also wanted to test my skills in mobile optimization and building a front-end as close to original design concepts as possible.",
    keyimage: "http://imgur.com/cbI2Sax",
    otherimages: ["http://imgur.com/Zbe8ZzR", "http://imgur.com/Do66SaU"],
    github: "https://github.com/gregbrunk/fourteeners",
    website: "https://fourteeners-app.herokuapp.com/"
  },
  {
    title: "Politicator",  
    categories: ["Design", "Development"],
    tools: ["Ruby on Rails", "ActiveRecord", "jQuery", "AJAX", "Bootstrap", "PostgreSQL", "Sketch"],
    summary: "Politicator is a prototype app that helps users undestand how their political leanings stack up against our presidential candidates. Think you know where you stand? See if you're right! Want to know more about what our candidates think about major current policies? This is the perfect app for you. See supporting quotes from the candidates themselves and take a quick survey to find out who you align with on major current issues. The goal of this project was to work in a 4 person team to build a full-stack app in Ruby on Rails, using Active Record to interact with a PostgreSQL database. That app needed to have multiple models, RESTful routes, users and authentication, authorization, error handling, and password encryption. The app also needed be mobile optimized and showcase an appealing UI. The purpose of the app was to enforce core MVC concepts and explore managing multiple models with User accounts.",
    keyimage: "http://imgur.com/pgXOOH4",
    otherimages: ["http://imgur.com/autmsAs", "http://imgur.com/qx6vJQq", "http://imgur.com/evLCXVk", "http://imgur.com/dhYLLnf"],
    github: "https://github.com/gregbrunk/politicator",
    website: "http://politicator.herokuapp.com/"
  },
  {
    title: "CMS Brand Guide",  
    categories: ["Design", "Branding", "Copywriting"],
    tools: ["Sketch", "Keynote", "Brand Strategy", "Brand Archetypes"],
    summary: "When I was working as a Product Owner at Mindbox, we had never established any formal branding program, but we had many clients who whe thought could benefit from this service. So, my designer Luke and I decided to invent the process from scratch, after studying the work of some of our branding heros. This was our first ever branding project, and it went exeedingly well.",
    keyimage: "http://imgur.com/Fb86qoK",
    otherimages: ["http://imgur.com/LkapCNu", "http://imgur.com/eIm1Lvt", "http://imgur.com/mS8Hj14", "http://imgur.com/9dEJfHA", "http://imgur.com/ZroC0Ga", "http://imgur.com/OJetcsa", "http://imgur.com/fxKDH9Z"],
    github: "none",
    website: "https://www.dropbox.com/sh/on074edgsa3t3h6/AAA1cavZUHwGABhb01LKo0y_a?dl=0"
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