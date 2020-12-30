<template>
  <div id="login">
      
        <div class="wrapper">
            <div class="login">
                <form @submit.prevent="submitForm" class="container offset1 loginform">
                    <div id="owl-login">
                        <div class="hand"></div>
                        <div class="hand hand-r"></div>
                        <div class="arms">
                            <div class="arm"></div>
                            <div class="arm arm-r"></div>
                        </div>
                    </div>
                    <div class="form-container">
                        <div class="label-box">
                            <label class="mail-box">
                                <a-icon class="icon" type="mail" />
                                <input type="text" autocomplete="off" placeholder="Email" v-model="form.email">
                            </label>
                            <label class="pass-box">
                                <a-icon class="icon" type="lock" />
                                <input type="password" autocomplete="off" placeholder="Password"  id="password" v-model="form.password">
                            </label>
                        </div>
                        

                        <div class="form-bottom">
                            <span class="forgot" @click="onSignUp">Forgot password?</span>
                            <div class="btn-box">
                                <span @click="onSignUp" class="sign-up">Sign Up</span>
                                <button type="submit" class="btn">Login</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <a-modal
            title="验证码"
            :visible="visible"
            :footer="null"
            @cancel="hideModal"
            >
                <slide-verify 
                    ref="slideblock"
                    :l="42"
                    :r="10"
                    :w="472"
                    :h="220"
                    slider-text="向右滑动"
                    @success="verifySuccess"
                    @fail="verifyFail"
                    @refresh="onRefresh"
                    ></slide-verify>
            </a-modal>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    data() {
        return {
            visible: false,
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {

        showModal() {
            this.visible = true;
        },
        hideModal() {
            this.visible = false;
            this.$refs.slideblock.reset();
        },
        // 滑块验证成功
        verifySuccess() {
            
            this.hideModal();

            console.log(this.form);
            this.$loading.start();
            setTimeout(() => {
                this.$loading.finish();
                this.$router.push('/');
            },5000)
            

        },
        // 滑块验证失败
        verifyFail() {

        },
        // 刷新滑块验证
        onRefresh() {

        },
        // 验证表单
        validateForm() {
            if (this.form.email == '' || this.form.email.trim().length == 0) {
                this.$message.error({
                    content: '请输入邮箱账号！'
                });

                return false;
            } else if (this.form.password == '' || this.form.password.trim().length == 0) {
                this.$message.error({
                    content: '请输入密码！'
                });

                return false;
            }

            return true;
        },
        submitForm() {
            const flag = this.validateForm();

            if (flag) {
                this.showModal();
            }
            
        },
        resetForm() {
            this.form.email = '';
            this.form.passoword = '';
        },
        onSignUp() {
            this.$message.warning({
                content: '抱歉，暂不支持该功能！'
            })
        }
    },
    mounted() {
        $('#login #password').focus(function() {
                $('#owl-login').addClass('password');
            }).blur(function() {
                $('#owl-login').removeClass('password');
            });
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/login.scss';
</style>
