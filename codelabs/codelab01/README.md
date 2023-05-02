# Codelab01 - Get started

## Let's fire up an Angular app

### Installing the Angular CLI
Just like setting up a new Java application, we'll have a few steps to follow to get started with a new Angular application. 
Let's see how we can do this! First things first: we'll need to install the Angular CLI. You can do this with the following command: ``npm install -g @angular/cli``.
npm install speaks for itself, the -g means it will be installed globally which makes the CLI available in your entire system.

### Creating a new angular app
We will start by creating our new application folder. No need to start right-clicking and making new directories straight away. 
Angular has a nice way of doing multiple steps by issuing one single command: `ng new`! Create a new app by typing `ng new <appName>` 
in the terminal. You can choose any name, just remember we're making a dating service for pets :heart_eyes:. Be creative.
  
- You'll notice some questions being asked while generating your app. We want to enable routing and work with CSS.
  This means selecting:
    - `Would you like to add Angular routing ?` -> Yes
    - `Which stylesheet format would you like to use ?` -> Regular `CSS` as styling
- After doing this, a new app will be created, and it will even work if you fire it up.
  - Note that your new app is automatically also a .git repository, complete with a first 'initial commit'

### Starting your app  
- Angular applications can be started by typing
`ng serve` in the terminal. Doing so will compile your code and start a server. By default, you'll be be able to access it through
  http://localhost:4200. Start up your freshly made application and check what it looks like in your browser.

### Application file structure
Take a moment to inspect the directory structure and files inside your application's folder :
- `.` : root dir holds project config files, e.g. `angular.json` and `package.json` 
- `.vscode` : some config files for the Visual Studio Code editor
- `/node_modules` : where `npm` places all package dependencies (never committed to Git !)
- `/src` : root directory for Angular application code 

## Your first changes
### Setting your own title
- For now, we have a default Angular application running. Time to start making some changes! Let's start with a baby-steps though. We're going
to do two things.
  - Remove the default template Angular is showing us right now. You can do this by deleting the html code from `app.component.html`. Replace it with `<h1>Petinder</h1>` for now.
  - Observe the automatic refresh in your browser after you save the file: this is Angular's `live reloading`, a very useful dev tool. 
    
- We just hardcoded the title in our html code, but that feels a bit basic right? When you open up `app.component.ts`, you can see where the title is being set. 
  Change its value to the title you chose (or just stick with our million-dollar idea: Petinder :moneybag: :moneybag: :moneybag:)
  

- You changed the title in `app.component.ts` but nothing is showing yet in your browser? Well, you just emptied your `app.component.html` file, which kinda
explains a lot. This html is your template file. It contains what you will be showing. So we'll need a small adjustment there as well. `<h1>{{title}}</h1>` should
  do the trick!
  * Some extra info: The double curly braces are also known as interpolation. In our app component (`app.component.ts`), we declared a variable title and gave it a value. 
We can use interpolation to display the value of this variable in the corresponding component template (`app.component.html`).

### Set the styling
- Not necessarily Angular related, but nevertheless very important in a HTML environment. Copy the contents of the `styles.css` file to the `styles.css` file you can find in
the root dir of your app. Doing so should already give your app a different look.

### Commit your work
It's a good habit to commit your local changes regularly. If not done already, do this now.

## Conclusion
We now have a working Angular application. 

We got rid of the default contents and replaced it with the title of the app we're going to build. For now, we only have one component in
this app, which consists of 
- `app.component.ts` containing the component's logic
- `app.component.html` containing the template we will be showing in our browser

Afterwards we also added some prefab styling that we will use throughout the building of our app.

You've learned:
- how to create a new angular app with `ng new`.
- how to start your angular app with `ng serve`.
- that the view of a component can be found in it's `.html`-file.
- that the controller of a component can be found in it's `.ts`-file.
- that the style of a component can be found in it's `.css`-file.

Next codelab we'll show you how to make your first basic layout by creating your own modules and components.
