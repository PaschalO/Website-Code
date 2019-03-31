<template>
    <div id="app">
        <navigation-bar></navigation-bar>
        <transition
                appear
                enter-class=""
                enter-active-class="animated fadeInRight delay-2s"
                leave-class=""
                leave-active-class="animated fadeOutRight">
            <router-view></router-view>
        </transition>
        <footer>
            <p>{{footerInfo.copyright}} {{footerInfo.reservedRights}}</p>
        </footer>
    </div>
</template>

<script>
    import navigation from "@/components/Navigation.vue"

    export default {
        components: {
            'navigation-bar': navigation
        },

        data() {
            return {
                footerInfo: {
                    copyright: `&copy 2019 Paschal Oduoza.`,
                    reservedRights: `All rights Reserved.`
                }
            }
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
                &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    /*.animate-page-enter {

    }
    .animate-page-enter-active {
        animation: animate-page-in-right;
    }

    .animate-page-leave {

    }
    .animate-page-enter-leave {
        animation: animate-page-out-right;
    }

    @keyframes animate-page-in-right {
        from {
            transform: translate3d(100%, 0, 0);
            visibility: visible;
        }

        to {
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes animate-page-out-right {
        from {
            transform: translate3d(0, 0, 0);
        }

        to {
            visibility: hidden;
            transform: translate3d(100%, 0, 0);
        }
    }*/
</style>
