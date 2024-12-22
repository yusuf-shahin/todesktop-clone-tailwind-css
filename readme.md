# Clone toDesktop Webside Using tailwind css

- [**Want to see the real webside ?**](https://www.todesktop.com/)

### Table of content

- [Setup the tailwind for project]
- [Custom Font extent]
- [Create Navbar]

### Fisrt Step :

- setup **tailwind css** for project

#### Follow the process of tailwind docs

- [tailwind docs](https://tailwindcss.com/docs/installation)

- install **npm**

  ```js
  npm init -y
  ```

  - it's create `package.json` file

- install `npm install -D tailwindcss`

  - it"s set tailwind css as dev dependence for our project
  - in **package.json** we see that :-

  ```js
  "devDependencies": {
   "tailwindcss": "^3.4.17"
  }
  ```

  - in **node_module** file we get our all file from _npm_

- `npx tailwindcss init`

  - it create `tailwing.config.js` file . where we set our all configuration for our project .
  - inside `content:[]` we pass that `"./src/**/*.{html,js}"`
  - `content: ["./src/**/*.{html,js}"],`

- crete a `src` folder where we create `index.html` , `style.css` and `app.js` file .

  - in `style.css` we past this code

  ```js
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

  - a `output.css` will generated by `style.css` file
    - in terminal we write `npx tailwindcss -i ./src/style.css -o ./src/output.css --watch`
    - `output.css` file is ready

- finally we write that link --> `<link href="./output.css" rel="stylesheet">` to our **index.html**
  ```html
  <body>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </body>
  ```
  - our tailwind css is render

### Custom font extent in tailwind

- **tailwind.config.js** file
- we can extend any css property inside `extend` object

  - example , we want to set a color in our tailwind css

  ```js
   colors: {
        shahin: "#A0D0AD",
      },
  ```

  - set the color in the name of **shahin**

  ```html
  <body>
    <h1 class="text-3xl font-bold underline text-shahin">Hello world!</h1>
  </body>
  ```

  - we also set our **font-family** inside extend
  - select font from [google fonts](https://fonts.google.com/selection)
  - @import to our **style.css** file
  - extend object :

  ```
  fontFamily: { yushah: "Poppins", random: "Playwrite Hrvatska Lijeva Guides",
  },
  ```

### Crome Extentation

- install a crome extentation name `css peeper`
  - [click that link to install](https://csspeeper.com/)
- Go `toDesktop` webside . [link](https://www.todesktop.com/)
- `css peeper` extantation go the assets click `Export all`
- download everything as zip file
- fontawesome CDN link and connet it to our project
- ```js
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
  ```

### Create Navber
