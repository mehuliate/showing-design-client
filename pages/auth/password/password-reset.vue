<template>
    <section class="authentication">
        <div class="auth-body">
            <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
                Reset Password
            </h1>
            <form class="auth-form" @submit.prevent="submit">
                <alert-success :form="form">
                    {{status}}
                    <p>
                        <nuxt-link :to="{name: 'login'}">
                            Proceed to login
                        </nuxt-link>
                    </p>
                </alert-success>
                <div class="form-group">
                                      <base-input
                    :form="form"
                    field="email"
                    v-model="form.email"
                    placeholder="Email"
                  ></base-input>
                </div>
                <div class="form-group">
                                   <base-input
                  :form="form"
                  field="password"
                  v-model="form.password"
                  placeholder="password"
                  ></base-input>
                </div>
                <div class="form-group">
                                   <base-input
                  :form="form"
                  field="password"
                  v-model="form.password_confirmation"
                  placeholder="Confirm new password"
                  ></base-input>
                    <input
                        type="password"
                        v-model.trim="form.password_confirmation"
                        name="password_confirmation"
                        class="form-control form-control-lg font-14 fw-300"
                        placeholder="Confirm new password"
                    />
                </div>
                
                <div class="text-right">
                    <base-button :loading="form.busy">
                    Reset Password
                  </base-button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import Form from 'vform'
export default {
  data() {
    return {
      status: '',
      form: new Form({
        email: '',
        password: '',
        password_confirmation: '',
        token: '',
      }),
    }
  },
  methods: {
    submit() {
      this.form
        .post('/password/reset')
        .then((res) => {
          this.status = res.data.status
          this.form.reset()
        })
        .catch((e) => console.log(e))
    },
  },
  created() {
    this.form.email = this.$route.query.email
    this.form.token = this.$route.params.token
  },
}
</script>

<style>
</style>