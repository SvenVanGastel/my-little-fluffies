# Codelab02 - Basic layout

## Check for routing

Angular asked you if you wanted to include routing to your application during setup.  

Check your `./src/app` folder for a file called `app-routing.module.ts`. Can't find it? Then this part is for you! If you do have it, you can move on to the next part.

In your terminal, type `ng g module app-routing --flat --module=app`. `--flat` puts the file in src/app instead of its own folder. `--module=app` tells the CLI to register it in the imports array of the AppModule. You will see the
file is `app-routing.module.ts` is created now in your app folder. Change its content with the following:

```javascript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

Don't worry yet about the contents of this file. We will learn more about it in a few codelabs. For now, it will suffice to know that this file is going to take care of routing in our app.

## Let's get a basic layout going
When setting up our frontend, there's A LOT of things we want to get working. The best approach is to do this in small steps. 

Our first step was setting
up a basic, working application. We did this in `codelab01`. 

Let's extend on this by creating a basic layout. No specific logic just yet,
only a structured layout. Both in our codebase and in our browser.

### Creating a layout module
Right now, we have a general app module and component in our application. Adding all our logic into this single component is possible, but it defeats the 
purpose of the Angular framework. 

Working with multiple components defines the building blocks that complete our entire app and makes everything more manageable and structured. 

Let's start by separating our layout, by making a dedicated module for this using the Angular CLI (`g` is short for `generate`) :

``ng g module layout --module app``

Notes :
- We used `--module app` to link our new LayoutModule to the root AppModule
- Observe 
  - the addition of the `.src/app/layout` folder containing module file `layout.module.ts`
  - the modifiication of the `app.module.ts` file
- Tip: you can add `--dry-run` to `ng generate` commands to list changes before actual execution

### Creating layout components
Right now we have a `layout` module in our Angular app. We want to divide our layout in three parts :
- a header
- a footer
- the main body in between
 
For both **header** and **footer**, we will create separate (sub) components inside our `layout` module. 
Those components will be used by the **layout** (main) component.  

Before we do this, let's take a look at the difference between a component and a module ...
  
>A **component** instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues
with change detection, as Angular checks to see when data-bound properties change, and updates both the view and the component instance as needed. The lifecycle ends when Angular
destroys the component instance and removes its rendered template from the DOM. A component must belong to an NgModule in order for it to be available to another component or application. 
> To make it a member of an NgModule, list it in the declarations field of the corresponding NgModule metadata.
> 
> **Modules**
In general, a module collects a block of code dedicated to a single purpose. Angular uses standard JavaScript modules and also defines an Angular module, NgModule.
In JavaScript (ECMAScript), each file is a module and all objects defined in the file belong to that module. Objects can be exported, making them public, and public objects can be imported for use by other modules.
Angular ships as a collection of JavaScript modules (also called libraries). Each Angular library name begins with the @angular prefix. Install Angular libraries with the npm package manager and import parts of them with JavaScript import declarations.
> 
> So in short: components are the building blocks of your Angular app. Modules are collections of these blocks dedicated to a single purpose. In this codelab, we will create the layout module which will consist of a header and footer component.

#### Generating the actual components

Let's get back to our code. 
Now that we know what modules and components are, let's make : 
- the **layout** (main) component
- the **header** and **footer** (sub) components 

Once finished, our file structure will look somewhat like this :
```
./src/app/layout/layout.module.ts
                 layout.components.ts
                 ...
./src/app/layout/footer/...
./src/app/layout/header/...
```

#### Generating the actual components - 'layout'
Execute the CLI command `ng g component layout` within the project root folder.

Observe a 'layout' component being created inside the `./src/app/layout` folder. 
(this works because the component name matches the module name)

#### Generating the actual components - 'header' and 'footer'
Navigate to the `./src/app/layout` folder in your terminal. Once inside that folder, execute
`ng g component header` to create a 'header' component. Do the same for 'footer' component.

Observe the addition of a `footer` and `header` folder with component files inside `.src/app/layout`. 

#### Verify the layout module
Want to be sure everything is correctly configured? Head over to `layout.module.ts` and check the contents of that file. 
As said before, the layout, header and footer component should be under declarations. If they are not there, you can add them yourself. 

Your declarations should look like this:
  
```
@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        LayoutComponent
    ],
    ...
```

#### App status
At this point our application will still start, however it will not yet use the new layout components.

We will fix this in the next section ...

## Adapting components
Time to add some html to our html template files. 

Copy the html component templates you find in this codelab to the corresponding files in your application :
- `layout.component.html`
- `header.component.html`
- `footer.component.html`

Don't forget to put `heart.png` the right folder. Don't know where to put it ? It becomes clear at the end of this codelab ...

Still serving your application? You'll no doubt have noticed everything broke.

### Routing
Inside your `layout.component.html`, you'll find the tag `<router-outlet></router-outlet>`. This has to do with us including Routing capabilities to our application.

More on that later, but you'll notice it will (eventually) break your application.
To solve this, our `LayoutModule` needs to know the `RouterModule`. 
Make sure to import this module as well.

### Binding the controller (.ts) with the view (.html)
Can you spot the errors? It includes some things we did in the previous codelab.
  
- The culprits are two variables we haven't declared yet. `{{year}}` and `{{title}}` (again) aren't known yet. Just like we did in the first codelab, we will have to declare them in our corresponding component file. `{{title}}` needs to be declared and set 
in our `header.component.ts`. `{{year}}` needs to be in `footer.component.ts`. While the header is just a title, we want the year to update automatically when we have entered a new one. We'll first guide you through adding the title. 
  * In the previous codelab, we just
  added the title variable and gave it a value. We can do this in a more encapsulated manner. Start by declaring the title as a string. Just like in Java, you can do this at the top of your class. The syntax is slightly different: 
    ```typescript
    private _title: string;
    ```
  * Because we are using encapsulation here, we will find more similarities with Java. In order to **get** our title, we need a constructor. The syntax for this is:
    ```typescript
    constructor() {
      this._title = 'Petinder'
    }
    ```
  * This leaves us with just a getter to be made. For this, the syntax is:
    ```typescript
    get title(): string {
      return this._title;
    }
    ```
     
- This should solve the problems with `{{title}}`. That leaves `{{year}}`. You can do the same actions you did for `{{title}}`, except we want our year to automatically update so some more logic is needed. We're not gonna spoil the fun for this one, you'll have to find
it for yourself. Just a few hints to get you going:
  > - a date is a number in js<br>
  > - just like in Java, you can call methods on certain classes to do things (perhaps there is even a Date class?)
   
### Using the selector of a component
- After finishing this, make sure you are showing the right module and its components. Unless you changed it, you'll probably still seeing the original implementation. The problem lies in the `app.component.html` file. This file doesn't show our layout module yet. You can change this by deleting the contents and writing
`<app-layout></app-layout>`. By doing this, you will instruct this html file to show the contents it can find under the component that is defined by the name `app-layout`. 
- Still not working? Make sure the `LayoutComponent` is being exported and that the `app.module` imports the `LayoutModule`, otherwise our `app.module` can't find it.
- Now is a good time to investigate the missing heart image ... inspect the html source and figure out the correct location.
  
Some more info on this: `app-layout` is the name of our LayoutComponent. You can find it in `layout.component.ts` :
```typescript
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
```
> - Every component has a selector, making it easy to use them as building blocks for your apps.
> - Take a moment to go through each component you made. Check the selectors, check where they are already used and how
> - Everything is tied together. It will help you understand Angular apps and how they work.

## Conclusion
You've learned:
- how to create a module with `ng g module <module_name>`.
- how to create a component with `ng g component <component_name>`.
- the differences between modules and components.
- how to define variables in a controller.
- how to encapsulate variables by adding `private` and using getters/setter.
- how to access a variable in the view using the `{{}}`-operator. 
- how to add a component to your app by using the selector defined in the controller of the component. 

Next codelab we'll start talking to our backend by introducing services.
