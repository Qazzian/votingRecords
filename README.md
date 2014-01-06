votingRecords
=============

This is a simple nodejs server for polling voting behaviour.


Running the server
==================

To run the server 
cd to the root directory of the project
run "npm install"
run "node index.js"

In a browser navigate to "http://localhost:3000"


Implementation Notes
====================

This was built on the nodejs express framework.
I ended up creating a sort of MVC pattern where each page has a controller and lists the views to display on the page.
Each view is defined as a middleware function which collects and renders it's view widget and saves the html to the response.
Views are defined in the 'views' directory. they have a js file and corresponding mustache template.

The basic data elements are defined in modules.
The data for the constituencies came from the Guardian's data archive. https://docs.google.com/spreadsheet/ccc?key=0AonYZs4MzlZbdFNDWkpPam5ESVZlQnFhcXRpQlFVM2c#gid=0

Voting data unfortunately does not persist past server reloads as I ran out of time before setting up a mongoDB.

Also of Note is that I haven't had time to add client side styles and behaviors.
I was hoping to at least add some client side form validation and hide the party options if the user is not going to vote.


Closing remarks
===============
Hopefully from this you can see my coding style.
I try my best to keep it as clean and modular as possible as I find it makes changes much quicker and easier once the project is more mature.

I'm not sure this task showed off my strongest points as I'm much more of a client side developer and rarely need to setup the server side from scratch, but I tackled this as it looked like an interesting challenge and helped me to further understand the express.js web framework.


I have attached a few links to some of my other projects to the email if you would like to look at them as well.

