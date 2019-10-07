<template>

    <v-app>
        <v-navigation-drawer disable-resize-watcher app v-model="sidebar">
            <v-system-bar class="pb-3 pt-2 text-center d-block">
                <img data-v-48c2ebf7="" src="https://mdbootstrap.com/img/Marketing/other/logo/logo-mdb-vue-small.png" class="">
            </v-system-bar>
            <v-list class="text-center">
                <v-list-item class="text-center d-block">

                    <v-list-item-avatar size="80" class="m-0" >
                        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                    </v-list-item-avatar>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-content>
                        <v-list-item-title class="title">John Leider</v-list-item-title>
                        <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
                    </v-list-item-content>


                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list nav dense>
                <v-list-item-group color="primary">
                    <template v-for="(item, i) in items">
                        <v-list-item :key="i" v-if="!item.sub" exact :to="{name:item.to}">
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title v-text="item.text"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-group v-else :prepend-icon="item.icon">
                            <template v-slot:activator>
                                <v-list-item-content :key="i">
                                    <v-list-item-title v-text="item.text"></v-list-item-title>
                                </v-list-item-content>
                            </template>
                            <template v-for=" (sub ,j) in item.sub">
                                <v-list-item  :key="j">
                                    <v-list-item-icon>
                                        <v-icon></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title v-text="sub.text"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </template>
                        </v-list-group>

                    </template>
                </v-list-item-group>

            </v-list>
            <!-- -->
        </v-navigation-drawer>

        <v-app-bar app color="deep-purple accent-4" dark>

            <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>

            <v-toolbar-title>Page title</v-toolbar-title>

            <div class="flex-grow-1"></div>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-menu
                left
                bottom
                offset-y="true"
            >
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon>mdi-account-circle
                        </v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                        v-for="n in 5"
                        :key="n"
                        @click="() => {}"

                    >
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <!-- -->
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-content>

            <!-- Provides the application the proper gutter -->
            <v-container fluid>

                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-content>

        <v-footer app>
            <!-- -->
        </v-footer>
    </v-app>


</template>


<script>
    export default {
        name: 'PersistentFull',
        data: () => ({
            sidebar: true,
            user: {},
            item: 0,
            items: [
                {text: 'Home', icon: 'mdi-home' ,to:'admin.home'},
                {text: 'Users', icon: 'mdi-account-multiple' ,to:'admin.users'},
                {text: 'Shared with me', icon: 'mdi-account-multiple',sub: [
                        {text: 'Starred', icon: 'mdi-star' ,to:'admin.sub'},
                        {text: 'Recent', icon: 'mdi-history'},
                        {text: 'Offline', icon: 'mdi-check-circle'}
                    ]},

            ],
        }),
        mounted() {
            this.user = JSON.parse(localStorage.getItem('user'));
            console.log(this.items[0].sub);
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
