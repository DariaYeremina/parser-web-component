<template>
    <div ref="wrapper"></div>
</template>

<script>
import '../assets/bootstrap/js/bootstrap.min.js'; 
export default {
    name: 'OldPage',
    props: ['htmlElement', 'selector'],
    watch: {
        htmlElement: {
            handler (val) {
                const t = document.createElement('html');
                t.innerHTML = val;
                this.$refs.wrapper.appendChild(t.querySelector(`#${this.selector}`));
            },
            immediate: true
        }
    }
}
</script>

<style>
    @import '../assets/bootstrap/css/bootstrap.min.css';
</style>