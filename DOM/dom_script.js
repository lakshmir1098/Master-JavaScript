document.addEventListener("DOMContentLoaded", function () {
    const inputTag = "<input>".replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const divTag = `<div>`.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const spanTag = `<span>`.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const selectTag = `<select>`.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const textAreaTag = `<textarea>`.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const scriptTag = "<script>".replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const code_1 = `
    <nav>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
        <a style="display: none">Pricing</a>
    </nav>`
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    const innerHTML_output = ` 
    <a>Home</a>
    <a>About</a>
    <a>Contact</a>
    <a style="display: none">Pricing</a>`
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    const innerText_output = `
     Home About Contact`
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    const textContent_output = `
    Home
    About
    Contact
    Pricing`
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    const input_value_code = `
    <input type="text" id="myInput" value="Hello, World!">

    // Getting the value of the input
    console.log(document.getElementById('myInput').value); 
    //OUTPUT "Hello, World!"

    // Setting a new value to the input
    document.getElementById('myInput').value = "New Value";
    //OUTPUT "New Value"
    `
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/`/g, " ");

    const click_event_code = `  
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
        `
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    const hide_elem = `
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
        
    </script>`
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

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
    </script>`
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    const insertAdjEl = `const msg1 = document.createElement("div");
    msg1.classList.add("cookie-btn");
    msg1.innerHTML = "<button class = 'select'> Accept </button> <button class = 'select'> Ignore </button>";
    msg.insertAdjacentElement("afterend", msg1);`
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    const delEl1 = `document.querySelector(".accept").
    addEventListener("click", function () {
        msg.remove(); // Remove the message
        msg1.remove(); // Remove the buttons
    });

    document.querySelector(".ignore").
    addEventListener("click", function () {
        msg.remove();
        msg1.remove();
    });`
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    const delEl2 = `
    document.querySelectorAll(".select").
    forEach((i) => {
        i.addEventListener("click", function () {
            msg.remove(); // Remove the message
            msg1.remove(); // Remove the buttons
        });
    });`
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    const mouse_event = `
    <h1> Hey </h1>
    const dom = document.querySelector('h1');

    const event  = function (e){
        alert('Yay! you are active');
    }
    // similar to hover 
    dom.addEventListener('mouseenter', event);

    dom.onmouseenter =  function(e){
        alert('Yay! you are active');
    }

    // applicable only when the event is added from addEventListener
    setTimeout (() => dom.removeEventListener('mouseenter', event), 3000);`
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    var dom = `<ul><li>DOM is the complete representation of the HTML file so that we can manipulate it later.</li>
    <li>The DOM Methods and Properties for DOM Manipulation such as "document.querySelector()" are not part of JavaScript.</li>
    <li>Well, DOM and DOM Methods are actually part of WebAPIs</li></ul>
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
<i>Example</i> for input.value
<div class= "code">${input_value_code}
</div>
<span class=sub-head>Click Event </span>
    Event Listener in JavaScript is used to listen to any mouse or keyboard clicks or other operations like hover happend over an HTML element
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
<ul><li><span class= "code-word"> Keydown </span> -  when the key is still being pressed and key is down
<li><span class= "code-word"> Keypress </span> -  fired when we continously press the key
<li><span class= "code-word"> Keyup </span> -  when key is pressed and finger is off the keyboard  
</ul>
<li><span class= "code-word">addEventListener</span>  we have used so far is only used to listen to the event. 
<li>We never look at the even object that JS generates when an event happens.
<li>This object is called <span class= "code-word"><b>keyboardEvent</b></span>.This object has a key param which say which key is pressed.</li></ul><div class="code"> ${key_press}
</div><i><b>NOTE:</b> Executable code is attached as HTML files for practical visual.</i>

<span class=sub-head>Capturing Mouse press event </span>
Capture mouse click events using  <span class= "code-word"> addEventListener('mouseenter', event) </span> and  <span class= "code-word"> onmouseenter </span>
<div class = 'code'>  ${mouse_event} </div>  
<span class="sub-head">How DOM API is organized:</span>

<div><img src="assests/DOM.png" alt="How DOM is organized"/></div>
<span class=sub-head>DOM Methods </span>

<span class="sub-sub-head">&#128640; Selecting Elements </span>
<ul><li>brings entire HTMl elements of the page
<div class="code-one-line">console.log(document.documentElement);</div></li>
<li> Return the header elm of the document
<div class="code-one-line">console.log(document.head); </div></li>
<li>Return body elm of the document
<div class="code-one-line">console.log(document.body);  </div></li>
<li>Returns 1st found class of the given name
<div class="code-one-line">console.log(document.querySelector('.subs').innerHTML); </div></li>
<li>Return NodeList of all the class found for the givne class name
<div class="code-one-line">console.log(document.querySelectorAll('.subs')); </div></li>
<li>Returns list of all the class found for the given class name
<div class="code-one-line">const subs = document.querySelectorAll('.subs');
subs.forEach((e) => console.log(e.innerHTML)); </div></li>
<li> Returns HTML Collections of all the tags  
<div class="code-one-line">console.log(document.getElementsByTagName('div'));</div></li>
<li> Return HTML Colletion of all the class 
<div class="code-one-line">console.log(document.getElementsByClassName('sub-sub-head'));</div></li>
<li> Returns node list when the name attr is given for input tag 
<div class="code-one-line">console.log(document.getElementsByName('div'))
</div></li></ul>
<span class="sub-sub-head">&#128640; Creating Elements </span>
<ul><li> Using createElement <div class="code">
const msg = document.createElement("div"); // create div element
msg.classList.add("cookie-msg"); // providing class name for the element
msg.innerHTML = "We use cookies 🍪🤣. Please Agreee! "; // text and other child elements as innnerHTML
const dom = document.body; // where the element to be placed
dom.prepend(msg); // at the begining of the element mentioned (here, body)
dom.append(msg); // at the end of the element mentioned (here, body)
</div></li>
<li> Using insertAdjacentElement <div class="code">
${insertAdjEl}
</div></li> </ul>
<span class="sub-sub-head">&#128640; Deleting Elements </span>
<ul><li> deleting each element on button click
<div class="code"> ${delEl1}
</div></li>
<li> Deleting multiple elements at the same time on button click
<div class="code">${delEl2}
</div></li></ul>
<span class="sub-sub-head">&#128640; Styling Elements </span>
<ul><li><div class="code-one-line">msg.style.height = "10px";
console.log(msg.style.height);
</div></li>
<li>The computed style is the style used on the element after all styling sources have been applied
To know when style is not defined by us e.g.,height
<div class="code">
console.log(getComputedStyle(msg).height); // 10px
msg.style.height = Number.parseFloat(getComputedStyle(msg).height) + 16 + "px"; 
// can be used to change the style

console.log(getComputedStyle(msg).height); //26px
console.log(msg.style.height); //26px
</div></li>
<li>setProperty 
<div class="code-one-line">msg.style.setProperty("color", "rgb(55, 247, 247)"); 
</div></li></ul>
<span class="sub-sub-head">&#128640; Finding Co-ordinates</span>
<div><img  src="assests/coordinates.png" alt="Co-ordinates of elements"/></div>
<ul><li><b>getBoundingClientRect</b> - Returns a DOMRect object which is the smallest rectangle which contains the entire element, including its padding and border-width.
The left, top, right, bottom, x, y, width, and height properties describe the position and size of the overall rectangle in pixels.
<i>Note: top = y and left = x</i>
<div class="code">
console.log(msg.getBoundingClientRect());

// OUPUT:
{
    "x": 20,
    "y": 871.9896240234375,
    "width": 531.6666870117188,
    "height": 26,
    "top": 871.9896240234375,
    "right": 551.6666870117188,
    "bottom": 897.9896240234375,
    "left": 20
}
</div></li>
<li> Current scroll position - basically works on button
<div class="code">
    document.querySelectorAll(".select").addEventListener("click", () => {
        console.log( window.scrollX, window.scrollY)
        });
    // OUTPUT
    0 36760
</div></li>
<li> scrollTo - says, on button click where the page should go
<div class = 'code'>
    document.querySelectorAll(".select").forEach((i) => {
        i.addEventListener("click", () => {
        window.scrollTo(0, 500);
        });
    });
<div></li></ul>
<span class="sub-sub-head">&#128640; Height/ Width of an element</span>
<ul><li> <b>clientHeight</b> - returns the inner height of an element in pixels, including padding but not the horizontal scrollbar height, border, or margin</li>
<li> <b>offsetHeight </b> - is a measurement which includes the element borders, the element vertical padding, the element horizontal scrollbar (if present, if rendered) and the element CSS height.</li>
<li> <b> scrollHeight</b> - is a measurement of the height of an element's content including content not visible on the screen due to overflow </li></ul><div class = 'code'>
    document.querySelectorAll(".select").forEach((i) => {
        i.addEventListener("click", () => {
            console.log(document.documentElement.clientHeight);  //561
            console.log(document.documentElement.clientWidth); //353
            console.log(document.documentElement.scrollHeight); // 37479
        
        });
    });
</div> 
<div class = 'code'>
    document.querySelectorAll(".select").forEach((i) => {
        i.addEventListener("click", () => {
            window.scrollTo({
                left:0, 
                top: 832,
                behavior: "smooth", // [options : auto, instant, smooth]
            });
        });

    });
</div>
<span class=sub-head>Event Delegation Technique </span>
Event Delegation is used to avoid adding events to 1000's of elements at the same time. Cause it creats copies of all 1000 events and slow down the page load
So, what we do?
* Add EventListener to common parent element of all the links we are targetting.
* Determine which elemnt triggered the event

Without Event Delegation technique:
<div class = 'code'>
document.querySelectorAll('.nav__link').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('href');
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    });
  });
</div>
With Event Delegation
<div class = 'code'>
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
</div>

To get the height  from the top of the page to the place where an user clicked 
<div class =' code'>
document.addEventListener("click", function (event) {
  // Get the element under the click position
  const clickedElement = document.elementFromPoint(
    event.clientX,
    event.clientY
  );

  // Get the bounding rectangle of that element
  console.log(
    "Bounding Rect:",
    clickedElement.getBoundingClientRect().top + window.scrollY // to get size from top of the page
  );
});
</div>`;

    document.getElementById("dom").innerHTML = dom;
});
