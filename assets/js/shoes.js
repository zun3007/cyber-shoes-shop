const { createApp, ref, reactive } = Vue;

const shoesApp = Vue.createApp({
  setup() {
    let shoes = reactive([]);
    let error = ref(false);

    axios
      .get('https://shop.cyberlearn.vn//api/Product')
      .then((res) => {
        const data = res.data;
        if (data.statusCode !== 200) {
          error.value = true;
        } else {
          shoes.value = data.content;
          // console.log(data.content);
        }
      })
      .catch((err) => {
        error.value = true;
      });

    return {
      error,
      shoes,
    };
  },
});

shoesApp.mount('#shoes');
