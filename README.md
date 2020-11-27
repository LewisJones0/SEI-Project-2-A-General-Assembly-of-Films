# SEI Project Two: A General Assembly of Films

Deployed Application: https://sei-50-project-2.netlify.app/

## TLDR

- **Project Duration** - 2 Days
- **App** - Film Index
- **Technologies Used** - React, HTML5, Sass, Bulma, Axios, React-Router-Dom
- **Developer Tools** - VSCode, Eslint, Git, Github
- **Teammates** - Paired Project ([Natalie Hurst-Knight](https://github.com/nhurstknight/ and myself)
____

### Brief
- Provide a platform for users to search through a database of films
- Utilises a database provided by TMDB -
https://www.themoviedb.org/documentation/api
- Utilises Axios for GET requests from the database
- Randomise function for user to randomly select a film from the database
- Pagination functionality for user to look through the multi-hundered thousand item database

____

# Abstract: Inital Thoughts and Project Overview

While under considerable time pressure due to the project duration being 2 days, my partner and I had to quickly find an API online that could provide the nessessary data for us to create a usable product.

After scouring through websites with lists of APIs, some of which were working but a lot were not - we discovered TMDB (https://www.themoviedb.org/)

TMDB had extensive documentation which helped us a lot when figuring out how to the database is organised and how we can access the necessary parts to create a working product.  
____

# Successes, Challenges and Bugs

Overall myself and my partner were quite happy with how this application turned out. Learning and developing my first React application was a challenge but felt easier to grasp than learning vanilla JavaScript for the first time. 

For the the whole project my partner and I pair programmed. This helped me develop skills to describe technical solutions and enabled me to articulate what problems I was detecting in the code.

For myself personally, the biggest win was the search functonality. The search function caused many problems to both me and my partner. We spent a lot of time getting it to function. One of the main hurdles was that we had an index page and a search functionality in different JS files. the onclick handler needed to be on the parent page (FilmIndex.js) but the input state needed to be in SearchBar.js

To get around this issue, we developed a solution to pull the text that was in the text box inside SearchBar.js into the parent JS file. This solution to the search functionality taught me a lot about how data flows between files in react. 

 ![searchBarCode](/src/read-me-images/searchBarCode.png)
____

## Key Learnings 
1. Pair programming helps develop and tone programming skills - increases articulation skills as well as increases the projects ability to spot problems early.
2. When using a third party API - much research is needed to make sure the API is healthy and is able to product the product the developers need.
3. Some roadblockers may appear that were unforeseen - Natalie and I had a huge problem when dealing with the type of data that the API was giving us. We fixed this through pagination. A fix that took took alot of time as we did not plan to have it before the project began.

## Future Features
1. Adding a filtration system - this filter system should be able to do a API call for genres that the user wants to see
2. True randomisation - the current randomisation function just serves a number between 1-1000 and does a API based upon it. A better feature should have a random number between the length of the database, and if the API call is empty, re-run the function.
___________


# Final Product Examples and Code Examples

## Front End Examples

### Example 1: Full film index
 ![filmindex](/src/read-me-images/filmindex.jpg)
### Example 2: Post search function
 ![filmsearch](/src/read-me-images/filmsearch.jpg)
### Example 3: More details
 ![filmshow](/src/read-me-images/filmshow.png)

____
## Code Examples

### Example 1: Film Index Functions
 ![filmindexFunctions](/src/read-me-images/filmIndexFunction.png)

 ### Example 2: Film Index Render
 ![FilmIndexRender](/src/read-me-images/filmIndexsRender.png)