import Vue from 'vue'
import { ValidationObserver, ValidationProvider, setInteractionMode, extend } from 'vee-validate'
import {max, min, required} from 'vee-validate/dist/rules'

setInteractionMode('eager')

extend('min', {
    ...min,
    message: "{_field_} should be {length} characters",
})

extend('max', {
    ...max,
    message: "{_field_} should be {length} characters",
})

extend("required", {
    ...required,
    message: "{_field_} can not be empty",
})

Vue.component('v-provider', {
    extends: ValidationProvider,
    provide() {
        return {
            errors: this.errors
        }
    }
})

Vue.component('v-observer', ValidationObserver)


