var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    seedDB      = require("./seeds");

   
mongoose.connect("mongodb://localhost/yelppi");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
seedDB(); 

app.get('/', function(req, res){
  res.render("landing");
});

// INDEX - show all campgrounds
app.get('/campgrounds', function(req, res){
  // Get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds){
    if(err){
      console.log(err);
    } else {
      res.render("index", {campgrounds:allCampgrounds});
    }
  });
});

// CREATE - add new campground to DB
app.post('/campgrounds', function(req, res){
  // get data from foem and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = {name: name, image: image, description: desc}
  // Create a new campground and save to DB
  Campground.create(newCampground, function(err, newlyCreated){
    if(err){
      console.log(err);
    } else {
      // redirect back to campground page
      res.redirect("/campgrounds");
    }
  });
});

// NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res){
  res.render("new");
});

// SHOW - show single page
app.get("/campgrounds/:id", function(req, res){
  // find the campground with provided ID
  Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
    if(err){
      console.log(err);
    } else {
      // render show template with that campground
      res.render("show", {campground: foundCampground});
    }
  });
});

app.listen(process.env.PORT, process.env.IP, function(req, res){
  console.log("The Yeppi server has started!!!");
});