document.addEventListener("DOMContentLoaded", function() {
    const interactionObsAPI = `
    <html>
        <body>
            <div class="container">
                <div class="block"></div>
            </div>
        </body>
    </html>

    <style>
        .hidden {
            opacity: 0;
            transform: translateX(0px);
        }
        .show {
            opacity: 1;
            transform: translate3d(10px);
        }
        .container {
            margin: 50px 10px 10px 10px;
        }
    </style>

    <script>
        const randomInt = (min, max) =>
            Math.floor(Math.random() * (max - min + 1) + min);
        const randomColor = () =>
            \`rgb(\${randomInt(0, 255)},\${randomInt(0, 255)},\${randomInt(0, 255)})\`;

        // Create new blocks and observe them
        function loadNew() {
            const container = document.querySelector(".container");
            const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                entry.target.classList.toggle("show", entry.isIntersecting);
                });
            },
            { threshold: 1 }
            );

            for (let i = 0; i < 100; i++) {
                const block = document.createElement("div");
                block.classList.add("hidden");
                block.textContent = \`I'm block \${i + 1}\`;
                block.style.cssText = \`
                    background-color: \${randomColor()};
                    padding: 10px;
                    margin: 30px;
                    border: 1px groove rgb(30, 12, 29);
                    border-radius: 10px;
                    letter-spacing: 3px;
                    width: 150px;
                    color : white;
                    \`;
                observer.observe(block);
                container.append(block);
            }
        }

        // Observe the last block to trigger loading new ones
        const lastBlockObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) loadNew();
        });

        // Start by observing the first set of blocks and loading more as needed
        lastBlockObserver.observe(document.querySelector(".block:last-child"));
        loadNew();
    </script>`.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var libandapi = `
<span class=sub-head>Intersection Observer API </span>
Intersection Observer is an API that is used to detect the interaction of a target element with its\u{2019}s ancestor element or the document viewport. For example, if we want to detect if some element is visible in the viewport.

use cases of Intersection Observer are:
* Lazy loading images.
* Detect if an element is in the viewport or not.
* Auto-play a video if in the viewport, otherwise pause the video.
* Infinite scrolling.
* Sticky Navigation bar

This API has 2 inputs:
* A callback function  - contains list of elements to be observed and  <span class = 'code-word'> isIntersecting </span> property of the elment decides if the target is visible or not.
*  An object with <span class = 'code-word'> root, threshold and rootMargin </span> properties.
        **  root - says the ancestor of the target element as viewport, and if not specified then document viewport is the default value.
        ** threshold - can be a number or an array of numbers ranging from 0 to 1. It is used to tell how much of the target element should be visible when the above callback function gets triggered.
        ** rootMargin - used to grow or shrink the  viewport.  if rootMargin is 20px the viewport will be 20px larger so once the target element is 20px from being within the viewport it will be considered intersecting.
<div class = 'code'> ${interactionObsAPI}
</div>
<span class=sub-head>Geolocation API </span>
<div class = 'code'> 
 navigator.geolocation.getCurrentPosition(
        function successCallback(pos){
            const {latitude, longitude} = pos.coords; 
            console.log(latitude, longitude);
    },function errorCallback(){
        alert('Please enable your location service');
    }, options);
</div>
* <b><a href = https://leafletjs.com/>Leaflet library</a> </b>  -  an open-source library for mobile friendly interactive maps.
`;
    document.getElementById("libandApi").innerHTML = libandapi;
});

//# sourceMappingURL=index.059c02a7.js.map
