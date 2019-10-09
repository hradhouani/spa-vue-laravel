<template>
    <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100">
                <form class="login100-form validate-form" autocomplete="off" v-on:submit.prevent="loginFrom()"
                      action="#"
                      method="post">
					<span class="login100-form-title p-b-43">
						Login to continue
					</span>


                        <v-text-field label="Email" v-model="login.email" type="email"></v-text-field>
                        <v-text-field label="Password" v-model="login.password" type="password"></v-text-field>



                    <div class="flex-sb-m w-full p-t-3 p-b-32">
                        <div class="contact100-form-checkbox">
                            <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
                            <label class="label-checkbox100" for="ckb1">
                                Remember me
                            </label>
                        </div>

                        <div>
                            <a href="#" class="txt1">
                                Forgot Password?
                            </a>
                        </div>
                    </div>


                    <div class="container-login100-form-btn">
                        <button class="btn btn-primary btn-lg btn-block "  :disabled="isSubmited">
                            <span v-if="!isSubmited">
                            Login</span>
                            <span v-else>
                                <i class="fa fa-spinner fa-pulse  fa-fw"></i>
                            </span>


                        </button>
                    </div>

                    <div class="text-center p-t-46 p-b-20">
						<span class="txt2">
							or sign up using
						</span>
                    </div>

                    <div class="login100-form-social flex-c-m">
                        <a href="#" class="login100-form-social-item flex-c-m bg1 m-r-5">
                            <i class="fa fa-facebook-f" aria-hidden="true"></i>
                        </a>

                        <a href="#" class="login100-form-social-item flex-c-m bg2 m-r-5">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                    </div>
                </form>

                <div class="login100-more" style="background-image: url('/images/bg.jpg');">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "LoginComponent",

        data() {
            return {
                login: {email: "", password: ""},
                isSubmited:false

            }

        },

        methods: {
            loginFrom() {
                this.isSubmited=true;
                axios.post('auth/login', this.login)
                    .then(res => {
                            if (res) {
                                localStorage.setItem('token', res.data.token);
                                return  this.$router.push({ name: 'admin.home' });
                            }
                        }
                    ).finally(()=>this.isSubmited=false);


            }
        }
    }
</script>

<style scoped>
    @import "../../styles/main.css";
</style>
