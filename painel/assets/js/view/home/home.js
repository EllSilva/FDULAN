import get_template from '../../components/get_template.js'

export default {
  data: function () {
    return {
      title: "home",
      isloaded: false
    }

  },

  methods: {

  },

  async mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") { 
        this.isloaded = true;
      } 
    }
  },
  template: await get_template('./assets/js/view/home/home')
}