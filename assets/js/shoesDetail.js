const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const { ref, createApp } = Vue;

const shoesId = params.id; // get ID from params

const shoesDetailApp = Vue.createApp({
  setup() {
    const shoesDetail = ref({});

    let id = 1;

    if (Number(shoesId)) {
      id = Number(shoesId);
    }

    axios
      .get(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`)
      .then((res) => {
        shoesDetail.value = res.data.content;
        console.log(shoesDetail.value);
      });

    return { shoesDetail };
  },
});

shoesDetailApp.mount('#shoesDetail');
