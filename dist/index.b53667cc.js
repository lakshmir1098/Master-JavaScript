document.addEventListener("DOMContentLoaded", function() {
    var js_development_steps = `
  <span class = "sub-head">JavaScript Development Map</span>
    <img src = "assests/js_dev_map.png" alt = "js_development_map">

<span class = "sub-sub-head">Module</span>
    * Reusable piece of code the encapsulates implementation details.
    * Usally a single file with import (dependency) and export (public api) statements.
Why modules?
    I. Isolation of components without worring entire codebase.
    II. Compose later into a larger application.
    III. Abstract code -  implement in one modeule and can be used in another module.
How modules work?
    * Imported Modules are loaded first and then the actual module code gets executed.
    * So, modules are imported <b>synchronously</b>. But downloading modules are done <b>asynchronously</b>.
    * Variables declared inside a module are private by default and to be accessed by another module we have to export from current module and import into the required module.
Importing/Exporting module to another module:
    There are 3 ways to import modules:
    I. Importing necessary object
    II. Importing all the exported items as an object
    III. Importing default export 

<span class = "sub-sub-head">Top level await</span>
Await not inside async function is possible in modules.  This is called top level await.
Using top level await can block the entire module execution of the imported module until the promise is resolved and<b> this is not recommmended</b>
<div class ="code">
  // Top level await
  const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // fake rest api
  const data = await response.json();
  console.log(data);
  // without async this has to wait for response to complete
  console.log("Top level await executed without async function");


  // Top level await with async function
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // fake rest api
    const data = await response.json();
    console.log(data);
  };
  getData();
  console.log("Top level await executed with async function");


  // return from aync
  const getLastPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // fake rest api
    const data = await response.json();
    return { data: data.at(\`-1\`) };
  };
  console.log("Only last post", await getLastPost());
</div>
`;
    document.getElementById("js_development_steps").innerHTML = js_development_steps;
});

//# sourceMappingURL=index.b53667cc.js.map
