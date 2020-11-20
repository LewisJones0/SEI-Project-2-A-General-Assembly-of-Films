# SEI Project Two: A General Assembly of Films

## TLDR

- **Project Duration** - 2 Days
- **App** - Film Index
- **Technologies Used** - React, HTML5, Sass, Bulma, Axios, React-Router-Dom
- **Developer Tools** - VSCode, Eslint, Git, Github
- **Teammates** - Pair Project
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

After scouring through websites with lists of APIs, some of which were working but alot were not - we discovered TMDB (https://www.themoviedb.org/)

TMDB had extensive documentation which helped us a lot when figuring out how to the database is organised and how we can access the necessary parts to create a working product.  

____

# Final Product Examples

## Example 1 - Full film index
 ![filmindex](/src/read-me-images/filmindex.jpg)
## Example 2 - Post search function
 ![filmsearch](/src/read-me-images/filmsearch.jpg)
## Example 3 - More details
 ![filmshow](/src/read-me-images/filmshow.png)

____

# Successes, Challenges and Bugs

Overall myself and my partner were quite happy with how this application turned out. Learning and developing my first React application was a challenge but felt easier to grasp than learning vanilla JavaScript for the first time. 

For the the whole project my partner and I pair programmed. This helped me develop skills to describe technical solutions and enabled me to articulate what problems I was detecting in the code.

For myself personally, the biggest win was the search functonality. The search function caused alot of problems to both me and my partner. We spent alot of time getting it to function. One of the main hurdles was that we had an index page and a search functionality in different JS files. the onclick handler needed to be on the parent page (FilmIndex.js) but the input state needed to be in SearchBar.js

To get around this issue, we developed a solution to pull the text that was in the text box inside SearchBar.js into the parent JS file. This solution to the search functionality taught me alot about how data flows between files in react. 

 ![searchBarCode](/src/read-me-images/codeExample.png)

____
