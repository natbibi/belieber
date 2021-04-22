# Project: Justin Bieber Fan Page - React

📝 [![Netlify Status](https://api.netlify.com/api/v1/badges/53ecd40e-c56b-4812-a00d-8aa87cc11a4c/deploy-status)](https://app.netlify.com/sites/beliebers/deploys)

A react website to discover all about Justin Bieber; including albums, bio, photos and song lyrics from an API. There is also a quiz where you can test your JB knowlege and see if you are a true fan!

# Description

Built by Justin Bieber's BIGGEST fans. Find all the latest news and info related to the World's Most Popular Artist. 

<img width="800" alt="Screenshot 2021-04-22 at 10 23 58" src="https://user-images.githubusercontent.com/58271566/115690469-fea8fc80-a354-11eb-9215-eaf38b98c5c0.png">
  
# Installation & usage

### For our app to be run on your local machine:

Clone this repo and navigate to the root directory of this repo.

To start up our react app:  
`npm run dev`    

It should automatically open up on your browser at 0.0.0.0:8080   

# Technologies

### Dependencies:
    "devDependencies": {
    "@babel/core": "^7.13.15",
    "@babel/plugin-proposal-class-properties": "^7.13.0",
    "@babel/plugin-transform-runtime": "^7.13.15",
    "@babel/preset-env": "^7.13.15",
    "@babel/preset-react": "^7.13.13",
    "@testing-library/jest-dom": "^5.11.10",
    "@testing-library/react": "^11.2.6",
    "@testing-library/user-event": "^13.1.2",
    "babel-jest": "^26.6.3",
    "babel-loader": "^8.2.2",
    "css-loader": "^5.2.1",
    "html-webpack-plugin": "^5.3.1",
    "jest": "^26.6.3",
    "style-loader": "^2.0.0",
    "webpack": "^5.31.2",
    "webpack-cli": "^4.6.0",
    "webpack-dev-server": "^3.11.2"
    }
    "dependencies": {
    "axios": "^0.21.1",
    "bootstrap": "^4.6.0",
    "react": "^17.0.2",
    "react-bootstrap": "^1.5.2",
    "react-dom": "^17.0.2",
    "react-loader-spinner": "^4.0.0",
    "react-router-dom": "^5.2.0"
    }

# Process
1. Create repo based on react template created previously
2. Set up file structure 
3. Add components 
4. API fetch using axios
5. Set up layout- header and footer
6. Create paths for each 'page', restructure files and refactor code
7. Add :id paths
8. Add show/hide buttons
9. Add intervals
10. Add styling based on a colorhunt theme 

# Bugs 
- [ ] Spotify API token refreshes and doesn't allow access to API
- [x] Show / hide buttons not working on album page
- [x] Lyrics only showing for first song
- [x] /:id not working
- [x] Header and footer spilling over width of page / bottom scroll visible
- [ ] Lyrics show/hide button click affects all of the same button 
- [x] Quiz interval bug
- [x] Error handing for non-existent id's not working properly
- [ ] Unavailable :id paths needs not directing to PageNotFound (shows blank page)
- [ ] When using explore button on homepage - Explore button(?) appears at the end of albums page 
- [ ] activeClassName with NavLink doesn't work

# Wins & Challenges 

## Wins 
- Gaining abetter understanding of react props and file structure and recognising flaws in our code

## Challenges 
- Trouble understanding react file structure which caused problems on expanding application. Needed a code refactor.

# Code Snippet
(insert proud code here)

# Future Features
- ??
