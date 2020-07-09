<template>
  <v-layout>
    <!-- <v-banner two-line @click:icon="alert">
      <v-icon
        slot="icon"
      >
        mdi-bed
      </v-icon>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus nec sem id malesuada.
      Curabitur lacinia sem et turpis euismod, eget elementum ex pretium.
      <template v-slot:actions>
        <v-btn color="primary">Dismiss</v-btn>
        <v-btn text color="primary">Retry</v-btn>
      </template>
    </v-banner> -->
    <v-flex class="d-flex justify-center" width="100%">
      <v-card class="pa-8 rounded" width="100%" max-width="500">
        <div class="mb-6">
          Login
        </div>
        <!-- <v-divider vertical></v-divider> -->
        <!-- <ValidationObserver ref="observer" v-slot="{ validate, reset }"> -->
        <ValidationObserver ref="observer">
          <form>
            <ValidationProvider
              v-slot="{ errors }"
              name="Phone or Email"
              rules="required"
            >
              <v-text-field
                v-model="username"
                :error-messages="errors"
                label="Phone or Email"
                required
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              name="Password"
              rules="required"
            >
              <v-text-field
                v-model="password"
                :error-messages="errors"
                type="password"
                label="Password"
                required
              />
            </ValidationProvider>
            <v-btn class="mt-4 light-blue white--text" :loading="loading" width="100%" @click="submit">
              submit
            </v-btn>
          </form>
        </ValidationObserver>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { alert, loading } from '~/utils/mixins'
import { required, max } from "vee-validate/dist/rules"
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate"

setInteractionMode("eager")

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
})

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
})

export default {
  name: 'Login',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [alert, loading],
  layout: 'auth',
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    async submit() {
      const validate = await this.$refs.observer.validate()
      if (validate) {
        const loginPayload = {
          username: this.username,
          password: this.password,
        }
        this.loading = true
        const user = await this.$auth.login(loginPayload)
        this.loading = false
        if (user.message !== 'Wrong username or password') {
          this.$toast.success('user is login')
        } else {
          this.$toast.error('login wasnt successfull')
        }
      }
    },
    clear() {
      this.username = ""
      this.password = ""
      this.$refs.observer.reset()
    },
  },
}
</script>
