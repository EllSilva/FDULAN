import get_template from '../../components/get_template.js' 
import api from "../../../../../static/js/api/adm.js"


export default {
    data: function () {
      return {
        email: null,
        password: null,
        error: null,
        msg: null,
        isloaded: true
      };
    },
  
    methods: {
      async voltar() {
        window.location.href = `#/`;
      },
  
      
      async logar() {
        if(this.email == 'gov' & this.password == '123'){
          this.msg  = 'Bem Vindo de volta';
          iziToast.success({
            title: "OK",
            message: this.msg,
            position: "bottomCenter",
          });
          this.isloaded = false
          setTimeout(() => {
            window.location.href = '#/blog'
          }, 500)
     
      }else{ 
        this.error = 'Usuario ou senha invalido';
        iziToast.error({
          title: "Error",
          message: this.error,
          position: "bottomCenter",
        });
        return null;
      }
      },

      async logar1() {
        this.error = null;
  
        // localStorage.removeItem('token')
        let res = await api.login(this.email, this.password);
  
        if (res.error) {
          this.error = res.message;
          iziToast.error({
            title: "Error",
            message: this.error,
            position: "bottomCenter",
          });
          return null;
        }
  
        this.msg = res.message;
        iziToast.success({
          title: "OK",
          message: this.msg,
          position: "bottomCenter",
        });
        localStorage.setItem("token", res.token.token);
        localStorage.setItem("code", res.usuario.id);
        window.location.href = 'painel/index.html#/' 
      },
    },
 
    template: await get_template('./assets/js/view/login/home')
}