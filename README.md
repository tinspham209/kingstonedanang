# Project: KingStoneDanang Website

### Date: Mar 2021

### Releases

- Client: https://kingstonedanang.com
- Server: http://server.kingstonedanang.com

### Screenshot

<img src="./template-project-img.png" alt="screenshot">

### Functions

Responsive Design Optimized with 2 screen: Large Screen(>=1280px) and Mobile Screen(<1280px)

**Client:**

- Homepage
- Products / Single Product
- Blogs / Blog post
- Store - Display on Maps
- About us

**Server:**

- Sanity
  - Blog Posts Management
  - Author of Blog Post Management
  - Products Management
  - Images Management

## Installation Guide

### Tech-Stack

- React Hooks
- react-router-dom
- redux-toolkit
- @sanity.io
- Firebase
- styled-components
- Material-UI
- react-icons
- leaflet
- react-lazy-load-image-component
- react-scroll

### Directory Structure

```
.
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── deploy-firebase
├── .firebaserc
├── firebase.json
├── public
└── src
```

For the project to build, these must exist with exact filenames:

- `public/index.html` is the page template
- `src/index.js` is the entry point
- `src/GlobalStyles.js` is the Global Styles
- `src/App.js` is the Router

### Production

**Setup Server**

- Clone this project

- Go to `/server`

```
cd ./server
```

- Install dependencies

```
npm install
```

- Start packager, server is running on **PORT 5000**

```
npm start
```

**Setup Client**

- Go to `/client`

- Install dependencies

```
npm install
```

- Start packager, server is running on **PORT 3000**

```
npm start
```

### Bugs:

- Logo Img on `navbar` & `footer` has margin on IOS devices
- Components is NOT re-usable

### How to Deploy

**Client:**

- cd to `client`
- run this line:

```
npm run deployfirebase
```

**Server:**

- cd to `server`
- run this line:

```
sanity deploy
```

### How to name a folder and a file

- Folder name: - Ex: `InfoSection`
- Component file name: should be -- Ex: `InfoSection.jsx`
- Style component file name: should be -- Ex: `InfoSection.elements.js`

### How to import and export module?

- Import:

```js
//import every thing
import * as React from "react";
import * as ReactDOM from "react-dom";

//for default export
import InfoSection from "./InfoSection";

//for named export
import { InfoSec, InfoRow } from "./InfoSection.elements";
```

### How to style for each component?

- Create a styled-component file. Ex: `InfoSection.elements.js`
- Import to `jsx` file

```js
// InfoSection.jsx

import { InfoSec, InfoRow } from "./InfoSection.elements";
```
