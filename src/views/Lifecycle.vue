<template>
    <div>
        <h3>Lifecycle Form</h3>
        <div class="lifecycle">
            <form action="">
                <div><label>Title:</label><input v-model="title" type="text"></div>
                <div><label>Description:</label><textarea rows="5" v-model="description"></textarea></div>
                <div><label>Type:</label><select v-model="type" name="type" id="type">
                    <option value="ONE">One</option>
                    <option value="TWO">Two</option>
                    <option value="THREE">Three</option>
                </select></div>
                <button v-on:click="clear">Clear values</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class Lifecycle extends Vue {

    get title() {
        return (this.$store.state.form || {}).title;
    }
    set title(val) {
        this.$store.commit('updateTitle', val);
    }
    get description() {
        return (this.$store.state.form || {}).description;
    }
    set description(val) {
        this.$store.commit('updateDescription', val);
    }
    get type() {
        return (this.$store.state.form || {}).type;
    }
    set type(val) {
        this.$store.commit('updateType', val);
    }

    clear(e: MouseEvent) {
        // if(navigator && navigator.serviceWorker && navigator.serviceWorker.controller) {
        //     navigator.serviceWorker.controller.postMessage({command: 'ClearDB'});
        // }
        this.ripple(e);
        this.$store.replaceState({
            title: '',
            description: '',
            type: null
        });
    }

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

    .lifecycle {
        display: flex;
        justify-content: center;
    }

    button {
        background-color: #42b993;
        padding: 8px;
        border: 0;
        border-radius: 3px;
        margin: 5px;
        margin-top: 10px;
        margin-left: 0px;
        outline: none;
        filter: drop-shadow(0px 3px 2px gray);
        color: white;
        transition: all 250ms linear;
        --ripple-color: rgba(0, 0, 0, 0.2);
        --ripple-speed: 1;

        background-image: paint(ripple);

        &:hover {
            background-color: #47c79f;
            cursor: pointer;
        }
    }

    form {
        width: 25%;
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        
        div {
            width: 100%;
            display: flex;
            align-items: center;
        }

        input, textarea, select {
            margin: 8px;
            padding: 5px;
            width: 100%;
            border-radius: 3px;
            border: 1px solid #42b993;

            outline-color: #42b993;
        }

        div:nth-child(2) {
            align-items: flex-start;
            label {
                padding-top: 8px;
            }
        }
    }
</style>