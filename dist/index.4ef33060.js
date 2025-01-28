document.addEventListener('DOMContentLoaded', function() {
    var sliders_code = `
<html>
  <body>
    <h3 class="section__header">
      Millions of Bankists are already making their lifes simpler.
    </h3>

    <div class="slider">
      <div class="slide">
        <div class="testimonial">
          <h5 class="testimonial__header">Best financial decision ever!</h5>
          <blockquote class="testimonial__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium quas quisquam non? Quas voluptate nulla minima deleniti
            optio ullam nesciunt, numquam corporis et asperiores laboriosam
            sunt, praesentium suscipit blanditiis. Necessitatibus id alias
            reiciendis, perferendis facere pariatur dolore veniam autem esse non
            voluptatem saepe provident nihil molestiae.
          </blockquote>
        </div>
      </div>

      <div class="slide">
        <div class="testimonial">
          <h5 class="testimonial__header">The last step to becoming a complete minimalist</h5>
          <blockquote class="testimonial__text">
            Quisquam itaque deserunt ullam, quia ea repellendus provident,
            ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum.
            Incidunt numquam perferendis veritatis neque repellendus. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt
            exercitationem deleniti.
          </blockquote>
        </div>
      </div>

      <div class="slide">
        <div class="testimonial">
          <h5 class="testimonial__header">Finally free from old-school banks</h5>
          <blockquote class="testimonial__text">
            Debitis, nihil sit minus suscipit magni aperiam vel tenetur incidunt
            commodi architecto numquam omnis nulla autem, necessitatibus
            blanditiis modi similique quidem. Odio aliquam culpa dicta beatae
            quod maiores ipsa minus consequatur error sunt, deleniti saepe
            aliquid quos inventore sequi. Necessitatibus id alias reiciendis,
            perferendis facere.
          </blockquote>
        </div>
      </div>

      <div class="slide">
        <div class="testimonial">
          <h5 class="testimonial__header">The last step to becoming minimalist</h5>
          <blockquote class="testimonial__text">
            Quisquam itaque deserunt ullam, quia ea repellendus provident,
            ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum.
            Incidunt numquam perferendis veritatis neque repellendus. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt
            exercitationem deleniti.
          </blockquote>
        </div>
      </div>

      <button class="slider__btn slider__btn--left">&larr;</button>
      <button class="slider__btn slider__btn--right">&rarr;</button>
      <div class="dots"></div>
    </div>
  </body>
</html>

<style>
  .slider {
    max-width: 100rem;
    height: 50rem;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
  }

  .slide {
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* THIS creates the animation! */
    transition: transform 1s;
  }

  .testimonial__text{
    border: 1px dotted #333;
    border-radius: 10px;
    padding: 10px;
    margin: 50px;
  }

  .slider__btn {
    position: absolute;
    top: 19%;
    z-index: 10;
    border: none;
    background: rgba(248, 115, 115, 0.7);
    font-family: inherit;
    color: #333;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    font-size: 1rem;
  }

  .slider__btn--left {
    left: 3%;
    transform: translate(-50%, -50%);

  }

  .slider__btn--right {
    right: 3%;
    transform: translate(50%, -50%);
  }

  .dots {
    position: absolute;
    top : 40%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
  }

  .dots__dot {
    border: none;
    background-color: #cd2a2a;
    opacity: 0.2;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    margin-right: 1.75rem;
    cursor: pointer;
    transition: all 0.5s;

    /* Only necessary when overlying images */
    /* box-shadow: 0 0.6rem 1.5rem rgba(0, 0, 0, 0.7); */
  }

  .dots__dot:last-child {
    margin: 0;
  }

  .dots__dot--active {
    /* background-color: #fff; */
    background-color: #eb5b5b;
    opacity: 1;
  }
</style>

<script>
    const slider_content = document.querySelector('.slider');
    const slide = document.querySelectorAll('.slide');
    const br = document.querySelector('.slider__btn--right')
    const bl = document.querySelector('.slider__btn--left');
    const dots = document.querySelector('.dots')

    let currslide = 0;
    const noOfSlide = slide.length;

    const viewSlide = function(sl) {
        slide.forEach(
            (s, i) => s.style.transform = \`translateX(\${ 100 * (i - sl) }%)\`
        );
    };

    const nextSlide = function(){
        if ( currslide == noOfSlide - 1){
            currslide = 0;
        }
        else{
            currslide++;
        }
        console.log('next slide');
        viewSlide(currslide);
        activeDot(currslide);
    };

    const prevSlide = function(){
        if(currslide == 0) currslide = noOfSlide -1;
        else currslide--;
        console.log('prev slide');
        viewSlide(currslide);
        activeDot(currslide)
    };

// slide using arrow button
    br.addEventListener('click', nextSlide)
    bl.addEventListener('click', prevSlide)

// slide using key press
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') prevSlide();
        e.key === 'ArrowRight' && nextSlide();
    });

// dots
// creating dots
    const createDots = function() {
        slide.forEach(function(_, i){
            dots.insertAdjacentHTML('beforeend',
                \`< button class = 'dots__dot' data - slide = \'\${i}\' ></button > \`
            )
        })
    }

// slide using dot    
    dots.addEventListener('click', function(e){
        if (e.target.classList.contains('dots__dot')){
            const currSlide = Number(e.target.dataset.slide);
            viewSlide(currSlide);
            activeDot(currSlide);
        }
    })

    const activeDot = function (slide){
        document.querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'));
        
        document.querySelector(\`.dots__dot[data - slide="\${slide}"]\`)
        .classList.add('dots__dot--active');
    }

// intial trigger
    const init =  function (){
        viewSlide(0);
        createDots();
        activeDot(0);
    }

    init();
</script>`.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var sliders = `<div class='code'> ${sliders_code} 
    </div>`;
    document.getElementById("sliders").innerHTML = sliders;
});

//# sourceMappingURL=index.4ef33060.js.map
