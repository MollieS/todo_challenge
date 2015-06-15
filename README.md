# Todo Challenge

![Build Status](https://travis-ci.org/MollieS/todo_challenge.svg?branch=master)


## Challenge

![Todo mockup](https://makersacademy.mybalsamiq.com/mockups/2914603.png?key=afabb09aef2901a2732515ae4349c1ec0458294b)

Build a Todo list as a mini front-end application.

Here are the core user stories:

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice
```

Here are some other user stories you may choose to implement:

```
As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

## Completed Steps

* A user is able to add items to the To Do list
* A user is able to edit items in the To Do list
* A user can check items off the list
* A user can filter items in the list by completed tasks or active tasks
* A user can see a count of the items on the list

## Future Tasks

* Refactor controller functions into services
* DRY out tests
* Add function to remove items
* Add persistence with a database
* Add CSS & styling

## How to run

* bower install & npm install will download all dependecies
* npm start will start up the http-server and serve the page on localhost:8080

## Languages

* written in Javascript/Angularjs
* tested with jasmine and protractor
* tests can be run with npm test for all karma/jasmine tests
* protractor test/e2e/conf.js will run protractor tests
