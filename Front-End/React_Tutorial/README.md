1.
install node
npm create vite@latest  //vite = a dev server, a modern replacement to create react-app
cd <my-react-app>
npm install
npm run dev

2.
HOW TO STYLE REACT COMPONENTS WITH CSS
--------------------------------------
(not including external frameworks or prepocessors)  ex. Tailwind

EXTERNAL
MODULES
INLINE

3.
props = read-only properties that are shared between components.
A parent component can send data to a child component.
<Component key=value/>

4.
conditional rendering = allows you to control what gets rendered 
in your application based on certain conditions
(show, hide, or change components)

5.
click event = An interaction when a user clicks on a specific element.
              We can respond to clicks by passing
              a callback to the onClick event handler

6.
onChange = event handler used primarily with form elements
           ex. <input>, <textarea>, <select>, <radio> ...
           Trigger a function every time the value of the input changes

7.
updater function = A function passed as an argument to setState() usually
                   ex. setYear(y => y + 1)(arrow function)
                   Allow for safe updates based on the previous state
                   Used with mutiple state updates and asynchronous functions
                   Good pratice to use updater functions















