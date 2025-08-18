import get_template from '../../components/get_template.js'

export default {
  data: function () {
    return {
      title: "home"
    }

  },

  methods: {

  },

  async mounted() {



    AOS.init({
      duration: 1000,
    });


    var slider = new KeenSlider(
      "#my-keen-slider",
      {
        loop: true,
      },
      [
        (slider) => {
          let timeout
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 5000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ]
    )


    var swiper = new Swiper(".swiper", {
      loop: true,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 18
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 18
        },
        1188: {
          slidesPerView: 3,
          spaceBetween: 24
        }
      }
    });



  },
  template: await get_template('./assets/js/view/home/home')
}