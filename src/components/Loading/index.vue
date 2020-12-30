<template>
  <div class="loading-container" v-if="show">
     

    <div :class="{'pageLoading': true}">
        <div class="monster">
            <div class="eye">
                <div class="eyeball"></div>
            </div>
            <div class="mouth"></div>
        </div>
        <!-- 下面是加载条 -->
        <div class="loading">
            <div class="bar"></div>
        </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: 'Loading',
    props: {
        show: Boolean
    },
    methods: {
        close() {
            
            $(".pageLoading").addClass('complete');

            setTimeout(() => {
                this.show = false;
            },1500)
        }
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
