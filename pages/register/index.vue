<template>
  <v-layout>
    <v-flex class="d-flex justify-center" width="100%">
      <v-card class="pa-8 card" max-width="500">
        <div class="text-h4 mb-6">
          Register
        </div>
        <ValidationObserver ref="observer">
          <form>
            <ValidationProvider
              v-slot="{ errors }"
              name="FirstName"
              rules="required"
            >
              <v-text-field
                v-model="registerFormData.firstName"
                :error-messages="errors"
                label="First Name"
                required
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              name="LastName"
              rules="required"
            >
              <v-text-field
                v-model="registerFormData.lastName"
                :error-messages="errors"
                label="Last Name"
                required
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              name="Email"
              rules="required"
            >
              <v-text-field
                v-model="registerFormData.email"
                :error-messages="errors"
                label="Email"
                required
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              name="Phone"
              rules="required"
            >
              <v-text-field
                v-model="registerFormData.phone"
                :error-messages="errors"
                label="Phone"
                required
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              name="Password"
              rules="required"
            >
              <v-text-field
                v-model="registerFormData.password"
                :error-messages="errors"
                type="password"
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
  name: 'Register',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [alert, loading],
  layout: 'auth',
  data() {
    return {
      registerFormData: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
      }
    }
  },
  methods: {
    async submit() {
      const validate = await this.$refs.observer.validate()
      if (validate) {
        this.loading = true
        const user = await this.$auth.register(this.registerFormData)
        this.loading = false
        this.alert.message = user.message !== 'Wrong username or password' ? 'user is registered' : 'registeration wasnt successfull'
        this.alert.show = true
        this.$store.dispatch('global/setAlertData', this.alert)
  
      }
    },
    clear() {
      this.registerFormData = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
      }
      this.$refs.observer.reset()
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    max-width: 500px;
    width: 100%;
    justify-content: center;
  }
</style>
