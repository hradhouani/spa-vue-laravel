<template>
    <div>
        <v-card v-if="!overlay">


            <v-card-text class="p-4">
                <v-card-title>

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
                        :items="users"
                        :search="search"
                        :items-per-page="5"
                        class="elevation-1"
                ></v-data-table>
                <v-row justify="center">

                    <template>
                        <v-row  class="mt-3 ml-1">
                            <v-dialog v-model="dialog" persistent max-width="600px">
                                <template v-slot:activator="{ on }">
                                    <v-btn color="primary" dark v-on="on" fab x-large>
                                        <v-icon>mdi-plus</v-icon>
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">User Profile</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field label="Legal first name*" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field label="Legal middle name"
                                                                  hint="example of helper text only on focus"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field
                                                            label="Legal last name*"
                                                            hint="example of persistent helper text"
                                                            persistent-hint
                                                            required
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field label="Email*" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field label="Password*" type="password"
                                                                  required></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-select
                                                            :items="['0-17', '18-29', '30-54', '54+']"
                                                            label="Age*"
                                                            required
                                                    ></v-select>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-autocomplete
                                                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                                            label="Interests"
                                                            multiple
                                                    ></v-autocomplete>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                        <small>*indicates required field</small>
                                    </v-card-text>
                                    <v-card-actions>
                                        <div class="flex-grow-1"></div>
                                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                                        <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-row>
                    </template>

                </v-row>
            </v-card-text>


        </v-card>
        <v-overlay :value="overlay" dark z-index="1000000">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>

    </div>
</template>

<script>

    export default {
        name: "UsersCoponent",
        data: () => ({
            search: null,
            searched: [],
            overlay:true,
            form: {},
            users:[],
            headers: [
                {
                    text: '#',
                    align: 'left',
                    sortable: false,
                    value: 'id',
                },
                {text: 'name', value: 'name'},
                {text: 'email', value: 'email'},
            ],

            dialog: false

        }),
        methods: {
            newUser() {
                window.alert('Noop')
            },
            searchOnTable() {
                this.searched = searchByName(this.users, this.search)
            },
            save() {
                console.log(this.form);
                if (!this.form.name || !this.form.email || !this.form.title || !this.form.gender) return toastr.error("fields are requirred");
                this.form.id = this.users[this.users.length - 1].id + 1;
                this.users.push(this.form);

                this.form = {};
                this.search = '';
                this.showDialog = false;
            }
        },
        created() {
            this.searched = this.users
        },
        mounted() {
            this.$store.commit("setTitle","Users") ;
            axios.get("users").then((res) =>{
               this.users=res.users
                this.overlay=false;

            } );
        }
    }
</script>

<style scoped>


</style>
