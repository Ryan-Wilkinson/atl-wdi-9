# Diagnostic Unit 2.1

### Question 1: What is the Request/Response Cycle?  How does it work?

	its a method computers use to communicate with eachother. The first computer sends a request for some data and the other computer responds to the request.

### Question 2: What are the differences between a GET request and a POST request?

	a POST request creates new data, GET request reads data from a specific source

### Question 3: What does `npm init` do?

	sets up a package.json file in the current directory for you to use for node packages in your app.

### Question 4: What does CRUD stand for?  What are the HTTP verbs that are associated with each function?
	
	"C"reate, "R"ead, "U"pdate, "D"elete(destroy!!), in http verbs = Post, Get, Delete, Put

### Question 5: If we have a form where we want to create new data, what type of `method` do we use in our form?  

	POST

### Question 6: If the following form was submitted, what would `action="myScript.js"` do?

```
<form method="POST" action="myScript.js?_method=PUT">
  <input type="text" value="name"/>
  <button type="submit">Submit</button>
</form>
```
	It would create a post form for people to write in their name and has a submit button to submit it, thought unless there is code written so it knows where to send that name the button wont do anything when clicked, it just takes the information but needs to be told what to do with it.

### Question 7: Write an express route that handles a POST request to the url `/menus` and redirects to the `/homepage`

	router.post('/menus', function(res, req) {
		var newPost = {
			newShit: NJWQ
			moreNewShit: WWWWW
		}
		data.seededPosts.push(newPost);
		res.redirect('/homepage');
	});

### Question 8: In the following express route, write how you would grab the values of `:id` and `:song_id` in javascript.

```
app.get("/artist/:id/song/:song_id"), function(req, res){
  res.render('/artist/:id')
}
```

### Question 9: What is MVC? How have we been using it so far?

	Model View Controller is a software architectural pattern for implementing user interfaces on computers. - We have been using the model to write and make the code, and then the view is where you see the model that you made, such as a webpage as we have been using it and the controller handels the communication between the webpage and the model.

## Bonus Question

### Question 10: Write an express route that handles a GET request to the url `/products` and sends back the JSON object {error: "Bad Request"}
