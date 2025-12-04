import get_template from "../../components/get_template.js";
import api from "../../../../../static/js/api/adm.js";

export default {
  data: function () {
    return {
      img: null,
      id_prod: null,

      produtos: [],
    };
  },

  methods: {
    async visualizar(id) {
      this.$router.push({ name: "editar_blog", params: { id } });
      this.codigo = this.$route.params.id;
      alert(this.codigo);
    },

    async listar() {
      let res = await api.lista_blog();

      return res;
    },

    async eliminarBlog(index) {
      // let res = await api.deleter_Blog(this.id); DELETE
      this.editIndex = index;

      let dataForm = new FormData();

      let res = await fetch(
        `http://localhost:3333/noticias/` + this.editIndex,
        {
          method: "DELETE",
          body: dataForm,
        }
      );

      let data = await res.json();

      if (!data) {
        this.error = data.message;
        iziToast.error({
          title: "Error",
          message: this.error,
          position: "bottomCenter",
        });

        return null;
      }

      this.msg = data.message;
      iziToast.success({
        title: "OK",
        message: this.msg,
        position: "bottomCenter",
      });
      this.produtos = (await this.listar()).data;
    },

    visualizaratual(id) {
      this.$router.push({ name: "encomenda_detalhe", params: { id } });
      this.codigo = this.$route.params.id;
    },
  },

  async mounted() {


    let dados = (await this.listar()).data;

    this.img = "https://api.ark-tracos.com/uploads/";

    this.produtos = (await this.listar()).data;
    // Formatar a data
    this.produtos.forEach((item) => {
      item.createdAt = new Date(item.createdAt).toLocaleDateString("pt-PT");
    });

    console.log(this.produtos);
  },

  template: await get_template("./assets/js/view/blogs/blog"),
};
