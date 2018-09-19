<template>
  <v-carousel hide-controls hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="require('../../../../assets/sketch2-1.jpg')"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: "https://lh3.googleusercontent.com/2Iu-stDDic6JS2wCoMHKr57O0umqOsrX2PYWy7yvPKA8QS2lz0DQb98a_jKoyeY37oceg-peJXMPovWoH3jUSNE_rjbDisBohpB3PALK=s0"
          },
        ]
      }
    }
  }
</script>