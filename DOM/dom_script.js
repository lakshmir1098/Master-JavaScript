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
    
    const click_event_code =`  
    <input type = "number" class="guess"/>
    <button class="click_btn">click</button>
    <p id="result"></p>
    
    document.querySelector('.click_btn').addEventListener(
    'click',function() {
        // even though the input type is number, the input from user is always of type string 
        console.log(document.querySelector('.guess').value);
        const number_typed = Number (document.querySelector('.guess').value); // converting into number 
        console.log(typeof number_typed); // OUTPUT -> string, number
        document.getElementById('result').innerText = number_typed;
    })
        `.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const hide_elem =`
    <html>
        <div class="block "> </div>
        <button class = "btn-hide">Click to hide</button>
    </html>

    <style>
    .change1{   
        background: rgb(238,174,202);
        background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
        
    }

    .change2{
        background: rgb(174,217,238);
        background: linear-gradient(90deg, rgba(174,217,238,1) 0%, rgba(187,233,148,1) 100%);
    }

    .block {
        width: 300px;         
        height: 200px;       
        background-color: #eb1a1a;  
        border: 2px solid #000;     
        padding: 20px;              
        margin: 50px auto;          
        display: flex;              
        justify-content: center;    
        align-items: center; 
    }       

    .hide{
        display: none;
    }

    .btn-hide{
        align-items: center;
        justify-content: center;
        padding: 10px;              
        margin: 50px auto; 
        display: flex; 
    }

    </style>

    <script>
        const block = document.querySelector('.block');
        const body = document.querySelector('body');
        const btn_hide = document.querySelector('.btn-hide');

        
            document.querySelector('.btn-hide').addEventListener(
                'click',function() {
                    if(btn_hide.innerText === 'Click to show'){
                    block.classList.remove('hide');
                    body.classList.add('change2');
                    btn_hide.textContent = 'Click to Hide';
                    console.log("Block is shown");
                }
                else{
                    block.classList.add('hide');
                    body.classList.add('change1');
                    btn_hide.textContent = 'Click to show';
                    console.log("Block is hidden");
                }
            })
        
    </script>`.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const key_press = `
    <html>
        <body>
        Click ESC to see a change
        </body>
    </html>

    <style>
        body{
            background: rgb(238,174,202);
            background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
        }

        .change{
            background: rgb(174,217,238);
            background: linear-gradient(90deg, rgba(174,217,238,1) 0%, rgba(187,233,148,1) 100%);
        }
    </style>

    <script>
        const body = document.querySelector('body');
        function changeBg(){
            body.classList.add('change');
        }

        document.addEventListener('keydown', function(e){
            console.log(e);
            if(e.key === 'Escape'){
                changeBg();
            }
            else{
                reverseBg();
            }

        //We can use toggle here
            //if(/[0-9]/.test(e.key)){  //using regex
            //or
            if(e.keyCode >= 48 && e.keyCode <= 57){ //using object property
                body.classList.toggle('change');
            }

        })
    </script>`.replace(/</g, "&lt;").replace(/>/g, "&gt;");


    var dom =`<ul><li> DOM is the complete representation of the HTML file so that we can manipulate it later.</li>
    <li> The DOM Methods and Properties for DOM Manipulation such as "document.querySelector()" are not part of JavaScript.</li>
    <li> Well, DOM and DOM Methods are actually part of WebAPIs</ul>
Some of the manipulation properties discussed are :
<ul><li><b>document.getElementById("demo").textContent</b></li>
<ul>
    <li>This property is used to get or set the text content of an element and all its children</li>
    <li>Returns the content of an element as plain text along with spaces, and doesn't account for styles. 
It's useful for handling raw text content.</li> 
    <li><span class= "code-word">textContent</span> applies to text within HTML elements like ${divTag}, ${spanTag}, etc. and 
it does not work well with form elements like ${inputTag},${selectTag} , or ${textAreaTag} .
</ul>
<li><b>document.getElementById("demo").value</b></li>
<ul>
    <li>This is used to get or set the current value of an ${inputTag} element (or other form elements like ${textAreaTag} and ${selectTag}),
when you're getting or setting the user's input in a text field, checkbox, radio button, etc. </li>
    <li> When a user types in the input field, the value of the input element updates automatically, and you can access that value using <span class= "code-word">.value</span> </li>
    <li> The value of an ${inputTag} element reflects the data entered by the user or the data set in JavaScript, not the HTML content
</ul>
<li><b>document.getElementById("demo").innerHTML</b></li>
<ul>
    <li>Returns all text, including  all spaces and HTML tags, that is contained by an element. 
It recognizes HTML tags and formats the content accordingly. </li>
    <li>InnerHTML is the easiest way to modify the content of an HTML element</li>
    <li>But, be cautious if you're inserting content from user input or any untrusted source with innerHTML. 
Attackers can use the HTML ${scriptTag} tag to insert and run malicious code in your app</li>
</ul>
<li><b>document.getElementById("demo").innerText</b></li>
<ul>
    <li>This property focuses on the rendered text content. </li>
    <li>When you use innerText to read the content of an element, it returns the text as it appears on screen. </li>
    <li> It ignores HTML tags and it also does not include text that is hidden with CSS styles.</li>
</ul>
</ul>
Let us see how the below code is rendered when used with innerHTML,textContent,innerText
<div class="code">${code_1}

    const navElement1 = document.querySelector('nav')
    console.log("innerHTML",navElement.innerHTML) 
    //OUTPUT${innerHTML_output}

    const navElement2 = document.querySelector('nav')
    console.log("innerText",navElement.innerText)
    //OUTPUT ${innerText_output}

    const navElement3 = document.querySelector('nav')
    console.log("textContent",navElement.textContent)
    //OUTPUT ${textContent_output}

</div>
Example for input.value
<div class= "code">${input_value_code}
</div>
   
<span class=sub-head>Click Event </span>

Event Listener in JavaScript is used to listen to any mouse or keyboard clicks or other operations
like hover happend over an HTML element
<div class="code"> ${click_event_code}
</div>

<span class=sub-head>Hiding DOM element using class </span>
    
Here we hide HTML element using a class from css. CSS class will be applied to HTML by JS on click of the button.
classList has - add, remove, contains, toggle proper
<div class="code"> ${hide_elem}
</div>

<span class=sub-head>Capturing Key press event </span>

Pressing the key in the keyboard can be captured by <span class= "code-word">addEventListener</span> method followed by 
<ul><li><span class= "code-word"> Keydown, keypress, keyup </span> to indicate when the function should be called </li>
<ul>
<li><span class= "code-word"> Keydown </span> -  when the key is still being pressed and key is down
<li><span class= "code-word"> Keypress </span> -  fired when we continously press the key
<li><span class= "code-word"> Keyup </span> -  when key is pressed and finger is off the keyboard  
</ul>
<li><span class= "code-word">addEventListener</span>  we have used so far is only used to listen to the event. 
<li>We never look at the even object that JS generates when an event happens.
<li>This object is called <span class= "code-word"><b>keyboardEvent</b></span>.This object has a key param which say which key is pressed.</li></ul>
<div class="code"> ${key_press}
</div>
<b>NOTE:</b> Executable code is attached as HTML files for practical visual.
`
   document.getElementById("dom").innerHTML = dom;
})
