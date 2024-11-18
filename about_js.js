document.addEventListener('DOMContentLoaded',function(){
var abj = 
`
JavaScript is
<ul><li> HighLevelLanguage</li>
    <ul><li> Developer has minimal work for setup and everything happens automatically through abstractions </li> </ul>
<li>has Garbage collection</li>
    <ul><li>JS has garbage collection done automatically. It removes unused ojects from time to time so it doesnt effects the memory clog</li></ul>
<li>Interpreted or JIT complied</li>
    <ul><li> Entire code is converted into machine code once and executed immediately </li> </ul>
<li> Multi-paradigm</li>
    <ul><li><b>Paradigm</b> - approach of structuring the code, which will direct our style and technique</li>
    <li> 3 popular paradigm are - <ul> <li> Procedureal Programming </li>
                                        <li> OOP Programming </li>
                                        <li> Functional Programming </li>
                                    </ul><li> Most programming languages only one of the following paradigm But JS supports all the 3 styles of coding </li></ul>
<li>Prototype-based onject-oriented</li>
    <ul><li> Everything in JS are objects except for primitive types. Even arrays are objects! in JS</li></ul>
<li> First class functions</li>
    <ul><li> Means, functions are treated as variablee in JS. Not all programming lanaguages allows this.</li>
    <li> We can pass functions into another functions are return them from anhter functions

Example,
    <div class= "code">
        const model = function(){
        console.log('I'm called');
        }

        btn.addEventListener("clikc",model);
    <div> </li> 
    
    </ul>
<li> Dynamically typed - We dont define the type of the variable </li>
<li> Single threaded </li>
    <ul><li> JS is single threaded, so it can do only on thing at a time </li>
    <li> In this case, if we have long running task, it will block the single thread running. We dont want that </li>
    <li> We can achieve non-blocking by using <b> event loop </b>.</li>
        <ul> <li> It takes the long running taks, executes them in the background and puts them in the main thread once they are finished </li> </ul>
</ul></ul>

<span class= "sub-head"> TDZ </span>
Temporal Dead zone. This comes under the mechanism of Hoisting, Where we call a function or variable before declaring them.
<ul><li> For<span class="code-word"> var</span> returns <span class="code-word">undefined.</span>
<li> But <span class="code-word">let, const</span> return an error. This is because, the JS reads the code and store them in TDZ until it is intitialized.


`
document.getElementById("abj").innerHTML = abj;

});
