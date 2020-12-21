<template>
  <div class="logo">
    <a href="/">
      <img
        src="../assets/img/logo.png"
        alt="logo"
        width="50px"
        height="50px"
      />
      <span class="logo-title">Vue JS</span>
    </a>
  </div>
</template>


<script>
export default {
  name:'Logo',
  data() {
    return {

    };
  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
};
</script>

<style scoped>
.logo {
  position: absolute;
  top: 0;
  left: 0;
  padding: 45px 60px;
  height: 60px;
}

.logo-title {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 20px;
  font-style: oblique;
  font-weight: bold;
}
</style>
