document.addEventListener('DOMContentLoaded', function() {
    
    const inputTag = "<input>".replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const divTag = `<div>`.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const spanTag = `<span>`.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const selectTag = `<select>`.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const textAreaTag = `<textarea>`.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const scriptTag = '<script>'.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const code_1 = `
    <nav>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
        <a style="display: none">Pricing</a>
    </nav>`.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const innerHTML_output =` 
    <a>Home</a>
    <a>About</a>
    <a>Contact</a>
    <a style="display: none">Pricing</a>`.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const innerText_output = `
     Home About Contact`.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const textContent_output = `
    Home
    About
    Contact
    Pricing`.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const input_value_code = `
        <input type="text" id="myInput" value="Hello, World!">
        
        // Getting the value of the input
        console.log(document.getElementById('myInput').value); 
        //OUTPUT "Hello, World!"
        
        // Setting a new value to the input
        document.getElementById('myInput').value = "New Value";
        //OUTPUT "New Value"
        `.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/`/g, " ");

    var dom =`<ul><li> DOM is the complete representation of the HTML file so that we can manipulate it later.</li>
    <li> The DOM Methods and Properties for DOM Manipulation such as "document.querySelector()" are not part of JavaScript.</li>
    <li> Well, DOM and DOM Methods are actually part of WebAPIs</ul>
Some of the manipulation properties discussed are :
<ul><li><b>document.getElementById("demo").textContent</b></li>
<ul>
    <li>This property is used to get or set the text content of an element and all its children</li>
    <li>Returns the content of an element as plain text along with spaces, and doesn't account for styles. 
It's useful for handling raw text content.</li> 
    <li><span class= "code-word">textContent</span> applies to text within HTML elements like \`${divTag}\`, \`${spanTag}\`, etc. and 
it does not work well with form elements like \`${inputTag}\`,\`${selectTag}\` , or \`${textAreaTag}\` .
</ul>
<li><b>document.getElementById("demo").value</b></li>
<ul>
    <li>This is used to get or set the current value of an \`${inputTag} element (or other form elements like \`${textAreaTag}\`  and \`${selectTag}\`),
when you're getting or setting the user's input in a text field, checkbox, radio button, etc. </li>
    <li> When a user types in the input field, the value of the input element updates automatically, and you can access that value using <span class= "code-word">.value</span> </li>
    <li> The value of an \`${inputTag} element reflects the data entered by the user or the data set in JavaScript, not the HTML content
</ul>
<li><b>document.getElementById("demo").innerHTML</b></li>
<ul>
    <li>Returns all text, including  all spaces and HTML tags, that is contained by an element. 
It recognizes HTML tags and formats the content accordingly. </li>
    <li>InnerHTML is the easiest way to modify the content of an HTML element</li>
    <li>But, be cautious if you're inserting content from user input or any untrusted source with innerHTML. 
Attackers can use the HTML \`${scriptTag}\` tag to insert and run malicious code in your app</li>
</ul>
<li><b>document.getElementById("demo").innerText</b></li>
<ul>
    <li>This property focuses on the rendered text content. </li>
    <li>When you use innerText to read the content of an element, it returns the text as it appears on screen. </li>
    <li> It ignores HTML tags and it also does not include text that is hidden with CSS styles.</li>
</ul>
</ul>
Let us see how the below code is rendered when used with innerHTML,textContent,innerText
<div class="code">\`${code_1}\`

    const navElement1 = document.querySelector('nav')
    console.log("innerHTML",navElement.innerHTML) 
    //OUTPUT\`${innerHTML_output}\`

    const navElement2 = document.querySelector('nav')
    console.log("innerText",navElement.innerText)
    //OUTPUT \`${innerText_output}\`

    const navElement3 = document.querySelector('nav')
    console.log("textContent",navElement.textContent)
    //OUTPUT \`${textContent_output}\`

</div>
Example for input.value
<div class= "code">\`${input_value_code}\`
</div>
NOTE: Executable code is attached as HTML files for practical visual.
    
`
   document.getElementById("dom").innerHTML = dom;
})