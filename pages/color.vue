<template>
  <div class="hoge">
    <div class="container-didot">
      <div class="title">Didot</div>
      Twilight
    </div>
    <div class="container-helvetica">
      <div class="title">Helvetica</div>
      Twilight
    </div>
    <div class="container-din">
      <div class="title">DIN</div>
      Twilight
    </div>
    <div class="container-udnewgothic">
      <div class="title">UD新ゴ</div>
      Twilight
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'World',
    }
  },
}
</script>

<style lang="scss" scoped>
$title-size: 100px;

div[class^='container'] {
  font-style: normal;
  font-weight: normal;
  color: #082449;
  font-size: 30px;
  .title {
    font-size: $title-size;
  }
}

.hoge {
  padding-left: 15px;
  background-color: #f2743f;
}

.container-didot {
  font-family: linotype-didot, serif;
}

.container-helvetica {
  font-family: neue-haas-grotesk-display, sans-serif;
}

.container-din {
  font-family: din-2014, sans-serif;
}

.container-udnewgothic {
  font-family: a-otf-ud-shin-go-pr6n, sans-serif;
}
</style>
