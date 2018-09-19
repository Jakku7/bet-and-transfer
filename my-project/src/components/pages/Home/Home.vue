<template>
   <v-app row justify-space-around>
    <v-toolbar class="nav">
      <v-toolbar-title class="link"><router-link to="/login">Login</router-link></v-toolbar-title>
    </v-toolbar>
    <v-content>
    <!--Removed
         <section>
        <v-parallax :src="require('./../../../assets/night-small.jpg')" height="900">
          <div class="greetingsContainer"> 
            <img :src="require('./../../../assets/logo.png')" class="logotype" />
            <h1 id="greeting">{{ greetings }}</h1>
          </div>
        </v-parallax>
      </section>
      <section class="test">
        <my-slider class="slider" />
      </section>
         -->
         <section style="position: relative">
           <img :src="require('./../../../assets/nightpart.jpg')" width="100%" />
           <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0">
              <div style="display: flex; width: 100%; height: 100%; justify-content: center; align-items: center;"><h1 id="greeting">{{ greetings }}</h1></div>
           </div>
          </section>
          <section style="position: relative;">
           <img :src="require('./../../../assets/daypart.jpg')" width="100%" />
           <div id="ball"></div>
          </section>
      <section class="test2">
        <div class="storyContainer"><h2 class="story">{{ story }}</h2></div>
      </section>
      <section class="test3">
          <v-parallax :src="require('./../../../assets/storia2.jpg')" height="500">
            <v-layout column align-center justify-center>
            <div class="test5">Lorem Ipsum something Lorem Ipsum something</div>
            <em>Lorem Ipsum something Lorem Ipsum something</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Lorem Ipsum something
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Lorem Ipsum something</h2>
              <span class="subheading">
                Lorem Ipsum something
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">Lorem Ipsum something</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Lorem Ipsum something</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">Lorem Ipsum something</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Lorem Ipsum something</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">Lorem Ipsum something</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Lorem Ipsum something</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="https://vuetifyjs.com/themes/parallax-starter/assets/hero.jpeg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Lorem Ipsum something Lorem Ipsum something</div>
            <em>Lorem Ipsum something Lorem Ipsum something</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Lorem Ipsum something
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Lorem Ipsum something Lorem Ipsum something</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Lorem Ipsum something</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">Lorem Ipsum something</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Lorem Ipsum something</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">Lorem Ipsum something</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Lorem Ipsum something</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">Lorem Ipsum something</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Lorem Ipsum something</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <v-footer class="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              Lorem Ipsum something
              <v-icon class="red--text">Lorem Ipsum something</v-icon>
              Lorem Ipsum something <a class="white--text" href="https://vuetifyjs.com" target="_blank">Lorem Ipsum something</a>
              Lorem Ipsum something <a class="white--text" href="https://github.com/vwxyzjn">Lorem Ipsum something</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </v-app>
</template>
<style>
#ball {
    position: absolute;

    height: 100px;
    width: 100px;
    left: 49%;
    background-size: 75% 75%;
    top: 75%;
  background-image: url('./../../../assets/ball.png');
  cursor: pointer;
    transition: .5s ease-in-out;
    background-position: center;
}
#ball:hover {
  background-image: url('./../../../assets/ball2.png');
    transition: .5s ease-in-out;
    animation: bump 2s linear 2;
  -webkit-animation: bump 2s linear 2;
  
}
@keyframes bump {
  0% {
    transform: rotate(0);
  }
  25% {

  }
  50% {

  }
  75% {

  }
  100% {
  transform: rotate(-360deg);
  }
}
@keyframes rotate-btn {
  0% {
    transform: rotate(0);
    top:74%;
  }
  5% {
    top:73%;
  }
  10% {
    top:72%;
  }
  20% {
    top:71%;
  }
  30% {
    top:70%;
  }
  40% {
    top: 65%;
    left: 50%;
        background-size: 70% 70%;
  }
  50% {
    top: 60%;
    left: 51%;
            background-size: 65% 65%;
  }
  52% {
    top: 54%;
    left: 52%;
            background-size: 60% 60%;
  }
  54% {
    top: 48%;
    left: 53%;
            background-size: 55% 55%;
  }
  56% {
    top: 40%;
    left: 54%;
            background-size: 50% 50%;
  }
  58% {
    top: 33%;
     left: 55%;
             background-size: 45% 45%;
  }
  60% {
    top:  33%;
     left: 55%;
             background-size: 40% 40%;
                     transform: rotate(-360deg);
  }
  65% {
    top:  33%;
     left: 55%;
             background-size: 40% 40%;
  }
    70% {
    top:  33%;
     left: 55%;
             background-size: 40% 40%;
  }
    80% {
    top:  33%;
     left: 55%;
             background-size: 40% 40%;
  }
    90% {
    top:  33%;
     left: 55%;
             background-size: 40% 40%;
  }
    100% {
    top:  33%;
     left: 55%;
             background-size: 40% 40%;
  }
}
.nav {
    background: #1f1a17 !important;
    background-color: #1f1a17;
    position: fixed !important; 
    top: 0 !important;
    left: 0 !important;
    z-index:9;
}
.test {
    background: #ffffff;
    background-color: #ffffff;
} 
.test2 {
    background:#fcfcfc;
    background-color: #fcfcfc;
    height: 350px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-wrap:wrap;
}
.test3 {
    background: #1f1a17;
    color:#ffffff;
}
.test4 {
  height: 100px;
}
.test5 {
    text-align: center;
    font-size: 48px !important;
    max-width: 800px;
    line-height: 1.2 !important;
    letter-spacing: 4px;
    text-transform: uppercase;
    font-weight: 900;
}
.link a {
    color: white !important;
    text-transform: uppercase;
    text-decoration: none;
    font-size:14px;
}
.greetingsContainer {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  bottom:80px;
}
#greeting {
    text-align: center;
    font-size: 48px;
    max-width: 800px;
    line-height: 1.2;
    letter-spacing: 4px;
    text-transform: uppercase;
    font-weight: 900;
    color: #ffffff;
}
.logotype {
  width:90px;
  justify-content: center;
  align-content: center;
  display: block;
}
.v-parallax {
  align-items: center;
  align-content: center;
}
.slider {
  height: 850px !important;
  box-shadow: none !important;
}
.storyContainer {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap:wrap;
}
.story {
  font-family: 'Permanent Marker', cursive;
  font-size: 20px;
  max-width: 50%;
  text-align: center;
}
</style>
<script>
import slider from './homeComponents/slider.vue';
export default {
    name: 'Home',
    components: {
      'my-slider': slider
    },
    data () {
      return {
        greetings: 'Bet and transfer on transfer market',
        story: 'He did that again. He scores like he did that every week in the past. Some people said that he is burned out already but once again he proved they are wrong. And he was right. Unfortunately he decided to move to another club. But, is that true? '
      }
    }
}


/* Not used now
function printLetterByLetter(destination, message, speed){
    var i = 0;
    var interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);
}

printLetterByLetter("notusedyet", "BET AND TRANSFER ON TRANSFER MARKET", 200);*/
</script>