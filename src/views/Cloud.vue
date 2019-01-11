<template>
    <div>
        <h3>Cloud Demo</h3>
        <div class="cloud-parent">
            <div id="cloud-body" class="cloud-paint"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    
  }
})
export default class Cloud extends Vue {
    cloudElm: Element | null = document.querySelector('#cloud-body');;
}
</script>

<style scoped lang="scss">

.cloud-parent {
    overflow: hidden;
}

.cloud-anim {
    animation: pan infinite 30s linear;
}

.time-1 {
    animation-delay: 1s;
}

.time-2 {
    animation-delay: 10s;
}

.time-3 {
    animation-delay: 20s;
}

@keyframes pan {
    0% {
        transform: translateX(-100%);
    }

    50% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
        
    }
}

div {
    height: 100%;

}


.cloud-paint {
    
    width: 200%;
    position: absolute;
    top: 0;
    --cloud-count: 3;
    --cloud-color: #ececec;
    --cloud-speed: .01;
    --cloud-seed: 445434;
    --cloud-points: '';
    z-index: -100;
    background-image: paint(cloudPattern);
}
</style>