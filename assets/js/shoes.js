const app = Vue.createApp({
  data() {
    return {
      error: false,
      data: { shoes: null },
    };
  },
  created: () => {
    axios
      .get('https://shop.cyberlearn.vn//api/Product')
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data.statusCode !== 200) {
          this.error = true;
        } else {
          this.data.shoes = res.content;
        }
        console.log(this.data.shoes);
      })
      .catch((err) => {
        this.error = true;
      });
  },
  computed: {},
  watch: {},
  methods: {},
});

app.mount('#shoes');
