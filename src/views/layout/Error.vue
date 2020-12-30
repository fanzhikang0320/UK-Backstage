<template>
  <div id="svgContainer"></div>
</template>

<script>
export default {
    metaInfo: {
        title: '404 NOT FOUND',
        script: [
            {
                type: 'text/javascript',
                src: '/script/eEjVBX.js'
            },
            {
                type: 'text/javascript',
                src: '/script/MvBBBj.js'
            }
        ]
    },
    methods: {
        appendScript() {
            this.$nextTick(() => {
                let src = '/script/error.js'
                let script = document.createElement('script');
                script.src = src;
                script.type = 'text/javascript'

                document.body.appendChild(script);
            })
        }
    },
    mounted() {
        this.appendScript();
    }
}
</script>

<style scoped lang="scss">
#svgContainer {
	width: 640px;
	height: 512px;
	background-color: white;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
}
</style>
