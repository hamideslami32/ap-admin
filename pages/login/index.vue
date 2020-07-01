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
      <v-card class="pa-4" width="100%" max-width="500">
        <div class="mb-6">
          Login
        </div>
        <!-- <v-divider vertical></v-divider> -->
        <!-- <ValidationObserver ref="observer" v-slot="{ validate, reset }"> -->
        <ValidationObserver ref="observer">
          <form>
            <ValidationProvider
              v-slot="{ errors }"
              name="Username"
              rules="required"
            >
              <v-text-field
                v-model="username"
                :counter="11"
                :error-messages="errors"
                label="Username"
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
                label="Password"
                required
              />
            </ValidationProvider>
            <v-btn class="mt-4 light-blue white--text" width="100%" @click="submit">
              submit
            </v-btn>
          </form>
        </ValidationObserver>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
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
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    username: "",
    password: "",
  }),

  methods: {
    submit() {
      this.$refs.observer.validate()
    },
    clear() {
      this.username = ""
      this.password = ""
      this.$refs.observer.reset()
    },
  },
}
</script>
