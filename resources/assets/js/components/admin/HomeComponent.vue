<template>
    <div class="page-container">
        <md-app>
            <md-app-toolbar class="md-primary">
                <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
                    <md-icon>menu</md-icon>
                </md-button>
                <div class="md-toolbar-section-start">
                    <div class="logo">
                        <a href="#">
                            <img src="/images/icon/logo.png" alt="Cool Admin">
                        </a>
                    </div>
                </div>
                <div class="md-toolbar-section-end">
                    <md-button class="md-icon-button">
                        <md-icon>more_vert</md-icon>
                    </md-button>

                    <md-menu md-size="medium" md-align-trigger>
                        <md-button  md-menu-trigger class="md-icon-button md-mini">

                                <md-icon>account_circle</md-icon>

                        </md-button>
                        <md-menu-content>
                            <md-menu-item>My Item 1</md-menu-item>
                            <md-menu-item>My Item 2</md-menu-item>
                            <md-menu-item v-on:click="logout()">logout</md-menu-item>
                        </md-menu-content>
                    </md-menu>
                </div>
            </md-app-toolbar>

            <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
                <md-toolbar class="md-transparent" md-elevation="0">

                    <div class="md-toolbar-section-end">
                        <md-button class="md-icon-button md-dense" @click="toggleMenu">
                            <md-icon>keyboard_arrow_left</md-icon>
                        </md-button>
                    </div>
                    <br>
                </md-toolbar>
                <div class="w-100  text-center">
                    <md-avatar class="md-avatar-icon md-large md-accent">
                        <md-ripple>MM</md-ripple>
                    </md-avatar>
                    <h2 class="mt-2 ng-star-inserted" style="">{{user.name}}</h2>
                    <p class="secondary-text-color ng-star-inserted" style="">webmaster@gis.ch</p>
                </div>

                <md-list>
                    <md-list-item exact :to="{name:'admin.home'}">
                        <md-icon>move_to_inbox</md-icon>
                        <span class="md-list-item-text">Inbox</span>
                    </md-list-item>

                    <md-list-item exact :to="{name:'admin.users'}">
                        <md-icon>send</md-icon>
                        <span class="md-list-item-text">Sent Mail</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>delete</md-icon>
                        <span class="md-list-item-text">Trash</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>error</md-icon>
                        <span class="md-list-item-text">Spam</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>

            <md-app-content>
                <router-view></router-view>

            </md-app-content>
        </md-app>
    </div>
</template>


<script>
    export default {
        name: 'PersistentFull',
        data: () => ({
            menuVisible: true,
            user: {}
        }),
        mounted() {
            this.user = JSON.parse(localStorage.getItem('user'));
            console.log(localStorage.getItem('user'), this.user);
        },

        methods: {
            toggleMenu() {
                this.menuVisible = !this.menuVisible
            },
            logout() {
                localStorage.clear();
                this.$router.push({name: 'home'});


            }
        }
    }


</script>

<style lang="scss" scoped>
    .page-container {
        height: 100%;
    }

    .md-app {
        height: 100%;
        border: 1px solid rgba(#000, .12);
    }

    // Demo purposes only
    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }
</style>
