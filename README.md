## Yelppi

* Add Landing Page
* Add Campgrounds Page that lists all compgrounds

Each Compground has:
* Name
* Image

## Layout and Bootstrap styling

* Create our header and footer partials
* Add in Bootstrap

## Creating New Campgrounds

* Setup new compground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

## Style the campground page

* Add a better header/title
* Make campground display in a grid

## Style the Navbar and Form

* Add a navbar to all templates
* Style the new campground form

## Databases - install Mongo DB

killall mongod

sudo apt-get purge -y mongodb-org*

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5

echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list

sudo apt-get update

echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list

sudo apt-get install -y mongodb-org

rm -rf mongod
$ echo "mongod --dbpath=data --nojournal" > mongod
$ chmod a+x mongod
$ mkdir data

in order to run mongod you'll first need to cd into root ~ then run ./mongod 

If you leave it running then Cloud 9 could timeout and cause mongo to crash. If this happens, try the following steps to repair it. 

From the command line, run:

cd ~
./mongod --repair

If you're still having trouble getting it to run then find the /data directory (it should be inside of ~) and cd into it. Once inside, run rm mongod.lock then cd back into ~ and run ./mongod again (see below).

cd ~/data
rm mongod.lock
cd
./mongod

M : MongoDB
E : Express
A : Angular
N : Node

## Mongo Commands

* mongod
* mongo
* help
* show dbs
* use
* insert
* find
* update
* remove
* 
**=================
```
use demo
show dbs
db.dogs.insert({name: "Rusty", breed: "Mutt"})
show collections
db.dogs.find()
db.dogs.find({name: "Rusty"})
db.dogs.update({name: "Coco"}, {breed: "Jack"})
db.dogs.update({name: "Rusty"}, {$set: {name: "Tater", isCute: true}})
```

## Mongoose

* Mongoose is elegant mongodb object modeling for node.js
* Interact with a Mongo Database with Mongoose
* 
```
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");//if not found, create automatically

// define pattern
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);
// Cat.create(), Cat.update(), Cat.find(), ..

// adding a new cat to the DB ================
// Method 1
var kid = new Cat({
    name: "Kiddy",
    age: 11,
    temperament: "Grouchy"
});

kid.save(function(err, cat) {
    if(err){
        console.log("SOMETHING WRONG!");
    } else {
        console.log("SAVED!!");
        console.log(cat);
    }
});

// Method 2 --- simpler versioncd 
Cat.create({
    name: "Kiddy",
    age: 15,
    temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log("SOMETHING WRONG!");
    } else {
        console.log("SAVED!!");
        console.log(cat);
    }
});

$ node cats.js

$ mongo
> show dbs
> db.cats.find()

// retrieve all cats from the DB and console.log each one ====

Cat.find({}, function(err, cats) {
    if(err){
       console.log("ERROR!");
       console.log(err);
    } else {
       console.log(cats);
    }
});

```

## Add Mongoose

* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes


## show page

* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

RESTFUL ROUTES (camp: campground)

name        url             verb        description
========================================================================
INDEX       /camps           GET         Display a list of all camp
NEW         /camps/new       GET         Display form to make a new camp
CREATE      /camps           POST        Add new camp to DB
SHOW        /camps/:id       GET         Shows info about one camp
