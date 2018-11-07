var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
  {name: "Salmon Creek", image: "https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b0144594f5c27ba7e8b4_340.jpg"},
  {name: "Copper River", image: "https://pixabay.com/get/e136b80728f31c22d2524518b7444795ea76e5d004b0144594f5c27ba7e8b4_340.jpg"},
  {name: "Indian Creek", image: "https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104491f1c47aa5edb0b9_340.jpg"},
  {name: "Salmon Creek", image: "https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b0144594f5c27ba7e8b4_340.jpg"},
  {name: "Copper River", image: "https://pixabay.com/get/e136b80728f31c22d2524518b7444795ea76e5d004b0144594f5c27ba7e8b4_340.jpg"},
  {name: "Indian Creek", image: "https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104491f1c47aa5edb0b9_340.jpg"},
  {name: "Salmon Creek", image: "https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b0144594f5c27ba7e8b4_340.jpg"},
  {name: "Copper River", image: "https://pixabay.com/get/e136b80728f31c22d2524518b7444795ea76e5d004b0144594f5c27ba7e8b4_340.jpg"},
  {name: "Indian Creek", image: "https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104491f1c47aa5edb0b9_340.jpg"}
];

app.get('/', function(req, res){
  res.render("landing");
});

app.get('/campgrounds', function(req, res){
  res.render("campgrounds", {campgrounds:campgrounds});
});

app.post('/campgrounds', function(req, res){
  // get data from foem and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image}
  campgrounds.push(newCampground);
  // redirect back to campground page
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

app.listen(4000, function(req, res){
  console.log("The Yeppi server has started!!!");
});