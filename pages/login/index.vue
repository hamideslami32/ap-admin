<template>
  <v-layout class="d-flex justify-center ma-auto w-80">
    <v-flex>
      <div class="text-xl-h4 my-8">
        Login From
      </div>
      <v-card class="pa-8 login">
        <!-- <ValidationObserver ref="observer" v-slot="{ validate, reset }"> -->
        <ValidationObserver ref="observer">
          <form>
            <ValidationProvider
              v-slot="{ errors }"
              name="Phone"
              rules="required|max:11"
            >
              <v-text-field
                v-model="phone"
                :counter="11"
                :error-messages="errors"
                label="Phone"
                required
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              name="VerificationCode"
              rules="required"
            >
              <v-text-field
                v-model="verificationCode"
                :error-messages="errors"
                label="Verification Code"
                required
              />
            </ValidationProvider>
            <v-btn class="mt-4" @click="submit">
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
    phone: "",
    verificationCode: "",
    loginCardStyle: {
      'width': '100%',
      'maxWidth': '600px'
    }
  }),

  methods: {
    submit() {
      this.$refs.observer.validate()
    },
    clear() {
      this.phone = ""
      this.verificationCode = ""
      this.$refs.observer.reset()
    },
  },
}
</script>
<style lang="scss" scoped>
  .loginForm {
    width: 100%;
    max-width: 600px;
  }
</style>
