<template>
    <div class="center">
        <div><button v-on:click="ripple" class="ripple">Click Me!</button></div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    
  }
})
export default class Ripple extends Vue {

    ripple(event: MouseEvent) {
        //@ts-ignore
        event.target.style.setProperty('--ripple-origin-x', event.clientX - event.target.offsetLeft);
        //@ts-ignore
        event.target.style.setProperty('--ripple-origin-y', event.clientY - event.target.offsetTop);

        var start = performance.now();
        requestAnimationFrame(function raf(now){
            const count = Math.floor(now - start);
            
            //@ts-ignore
            event.target.style.setProperty('--animation-tick', count);

            if(count > 1000) {
                // @ts-ignore
                event.target.style.setProperty('--animation-tick', 0);
                return;
            }

            requestAnimationFrame(raf);
        });
    }
}
</script>

<style scoped lang="scss">
.center {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ripple {
    height: 250px;
    width: 250px;
    border: 0;
    outline: none;
    color: white;
    font-size: 24px;

    filter: drop-shadow(0px 5px 6px gray);
    border-radius: 8px;
    background-color: #42b993;
    --ripple-color: rgba(0, 0, 0, 0.2);
    --ripple-speed: 1;
    background-image: paint(ripple);
    transition: all 250ms linear;
    margin-top:5px;

    &:hover {
        cursor:pointer;
        filter: drop-shadow(0px 8px 6px gray);
        margin-top:0;
        background-color: #47c79f;
    }
}
</style>