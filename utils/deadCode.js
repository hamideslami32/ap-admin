/* <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
          <p>
            For more information on Vuetify, check out the <a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>.
          </p>
          <p>
            If you have questions, please join the official <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              discord
            </a>.
          </p>
          <p>
            Find a bug? Report it on the github <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board
            </a>.
          </p>
          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout> */


  // <v-layout>
  //   <v-flex class="text-center">
  //     <img
  //       src="/v.png"
  //       alt="Vuetify.js"
  //       class="mb-5"
  //     >
  //     <blockquote class="blockquote">
  //       &#8220;First, solve the problem. Then, write the code.&#8221;
  //       <footer>
  //         <small>
  //           <em>&mdash;John Johnson</em>
  //         </small>
  //       </footer>
  //     </blockquote>
  //   </v-flex>
  // </v-layout>


  // <v-navigation-drawer
  //     v-model="drawer"
  //     :mini-variant="miniVariant"
  //     :clipped="clipped"
  //     fixed
  //     app
  //   >
  //     <v-list>
  //       <v-list-item
  //         v-for="(item, i) in items"
  //         :key="i"
  //         :to="item.to"
  //         router
  //         exact
  //       >
  //         <v-list-item-action>
  //           <v-icon>{{ item.icon }}</v-icon>
  //         </v-list-item-action>
  //         <v-list-item-content>
  //           <v-list-item-title v-text="item.title" />
  //         </v-list-item-content>
  //       </v-list-item>
  //     </v-list>
  //   </v-navigation-drawer>
  //   <v-app-bar
  //     :clipped-left="clipped"
  //     fixed
  //     app
  //   >
  //     <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
  //     <v-btn
  //       icon
  //       @click.stop="miniVariant = !miniVariant"
  //     >
  //       <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
  //     </v-btn>
  //     <v-btn
  //       icon
  //       @click.stop="clipped = !clipped"
  //     >
  //       <v-icon>mdi-application</v-icon>
  //     </v-btn>
  //     <v-btn
  //       icon
  //       @click.stop="fixed = !fixed"
  //     >
  //       <v-icon>mdi-minus</v-icon>
  //     </v-btn>
  //     <v-toolbar-title v-text="title" />
  //     <v-spacer />
  //     <v-btn
  //       icon
  //       @click.stop="rightDrawer = !rightDrawer"
  //     >
  //       <v-icon>mdi-menu</v-icon>
  //     </v-btn>
  //   </v-app-bar>
  //   <v-content>
  //     <v-container>
  //       <nuxt />
  //     </v-container>
  //   </v-content>
  //   <v-navigation-drawer
  //     v-model="rightDrawer"
  //     :right="right"
  //     temporary
  //     fixed
  //   >
  //     <v-list>
  //       <v-list-item @click.native="right = !right">
  //         <v-list-item-action>
  //           <v-icon light>
  //             mdi-repeat
  //           </v-icon>
  //         </v-list-item-action>
  //         <v-list-item-title>Switch drawer (click me)</v-list-item-title>
  //       </v-list-item>
  //     </v-list>
  //   </v-navigation-drawer>
  //   <v-footer
  //     :absolute="!fixed"
  //     app
  //   >
  //     <span>&copy; {{ new Date().getFullYear() }}</span>
  //   </v-footer>