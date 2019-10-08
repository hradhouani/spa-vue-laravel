<template>
    <div>
    <v-card>
        <v-card-title class="pink">

                <div class="h2">Users</div>

        </v-card-title>

        <v-card-text class="p-4">
            <v-card-title>
                Nutrition
                <div class="flex-grow-1"></div>
                <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="desserts"
                :search="search"
                :items-per-page="5"
                class="elevation-1"
            ></v-data-table>
            <v-row justify="center">
                <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                    <template v-slot:activator="{ on }">
                        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
                    </template>
                    <v-card>
                        <v-toolbar dark color="primary">
                            <v-btn icon dark @click="dialog = false">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                            <v-toolbar-title>Settings</v-toolbar-title>
                            <div class="flex-grow-1"></div>
                            <v-toolbar-items>
                                <v-btn dark text @click="dialog = false">Save</v-btn>
                            </v-toolbar-items>
                        </v-toolbar>
                        <v-list three-line subheader>
                            <v-subheader>User Controls</v-subheader>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Content filtering</v-list-item-title>
                                    <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Password</v-list-item-title>
                                    <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                        <v-divider></v-divider>
                        <v-list three-line subheader>
                            <v-subheader>General</v-subheader>
                            <v-list-item>
                                <v-list-item-action>
                                    <v-checkbox></v-checkbox>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>Notifications</v-list-item-title>
                                    <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-action>
                                    <v-checkbox ></v-checkbox>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>Sound</v-list-item-title>
                                    <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-action>
                                    <v-checkbox ></v-checkbox>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>Auto-add widgets</v-list-item-title>
                                    <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-dialog>
            </v-row>
        </v-card-text>


    </v-card>

    </div>
</template>

<script>

    export default {
        name: "UsersCoponent",
        data: () => ({
            search: null,
            searched: [],
            form:{},
            headers: [
                {
                    text: 'Dessert (100g serving)',
                    align: 'left',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Calories', value: 'calories' },
                { text: 'Fat (g)', value: 'fat' },
                { text: 'Carbs (g)', value: 'carbs' },
                { text: 'Protein (g)', value: 'protein' },
                { text: 'Iron (%)', value: 'iron' },
            ],
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: '1%',
                },
                {
                    name: 'Ice cream sandwich',
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    iron: '1%',
                },
                {
                    name: 'Eclair',
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                    iron: '7%',
                },
                {
                    name: 'Cupcake',
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                    iron: '8%',
                },
                {
                    name: 'Gingerbread',
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                    iron: '16%',
                },
                {
                    name: 'Jelly bean',
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                    iron: '0%',
                },
                {
                    name: 'Lollipop',
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                    iron: '2%',
                },
                {
                    name: 'Honeycomb',
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                    iron: '45%',
                },
                {
                    name: 'Donut',
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                    iron: '22%',
                },
                {
                    name: 'KitKat',
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                    iron: '6%',
                },
            ],
            dialog: false

        }),
        methods: {
            newUser () {
                window.alert('Noop')
            },
            searchOnTable () {
                this.searched = searchByName(this.users, this.search)
            },
            save(){
                console.log(this.form);
                if(!this.form.name ||!this.form.email ||!this.form.title ||!this.form.gender ) return toastr.error("fields are requirred");
                this.form.id=this.users[this.users.length - 1].id +1;
                this.users.push(this.form);

                this.form={};
                this.search= '';
                this.showDialog = false;
            }
        },
        created () {
            this.searched = this.users
        },
        mounted() {
            this.$store.state.title="Users";
        }
    }
</script>

<style scoped>


</style>
