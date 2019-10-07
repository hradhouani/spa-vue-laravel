<template>
    <div>
    <md-card>
        <md-card-header>
            <md-card-header-text>
                <div class="md-title">Users</div>

            </md-card-header-text>
        </md-card-header>

        <md-card-content >
            <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header class="w-100">
                <md-table-toolbar>
                    <div class="md-toolbar-section-start">
                        <h1 class="md-title">Users</h1>
                    </div>

                    <md-field md-clearable class="md-toolbar-section-end">
                        <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable"/>
                    </md-field>
                </md-table-toolbar>

                <md-table-empty-state
                        md-label="No users found"
                        :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
                    <md-button class="md-primary md-raised" @click="showDialog = true">Create New User</md-button>
                </md-table-empty-state>

                <md-table-row slot="md-table-row" slot-scope="{ item }" >
                    <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
                    <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
                    <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
                    <md-table-cell md-label="Gender" md-sort-by="gender">{{ item.gender }}</md-table-cell>
                    <md-table-cell md-label="Job Title" md-sort-by="title">{{ item.title }}</md-table-cell>
                </md-table-row>
            </md-table>
        </md-card-content>


    </md-card>
        <md-dialog :md-active.sync="showDialog">
            <md-dialog-title>Preferences</md-dialog-title>

           <md-dialog-content>
               <md-field>
                   <label>Name</label>
                   <md-input v-model="form.name"></md-input>
               </md-field>

               <md-field >
                   <label>Email</label>
                   <md-input v-model="form.email" type="email"></md-input>
               </md-field>

               <md-field >
                   <label>Title</label>
                   <md-input v-model="form.title" type="text"></md-input>
               </md-field>

               <md-field >
                   <label>Gender</label>
                   <md-select v-model="form.gender" name="movie" id="movie">
                       <md-option value="Female">Female</md-option>
                       <md-option value="Male">Male</md-option>

                   </md-select>
               </md-field>
           </md-dialog-content>

            <md-dialog-actions>
                <md-button class="md-primary" @click="showDialog = false">Close</md-button>
                <md-button class="md-primary" @click="save()">Save</md-button>
            </md-dialog-actions>
        </md-dialog>
    </div>
</template>

<script>
    const toLower = text => {
        return text.toString().toLowerCase()
    }

    const searchByName = (items, term) => {
        if (term) {
            return items.filter(item => toLower(item.name).includes(toLower(term)))
        }

        return items
    }
    export default {
        name: "UsersCoponent",
        data: () => ({
            search: null,
            searched: [],
            form:{},
            users: [
                {
                    id: 1,
                    name: "Shawna Dubbin",
                    email: "sdubbin0@geocities.com",
                    gender: "Male",
                    title: "Assistant Media Planner"
                },
                {
                    id: 2,
                    name: "Odette Demageard",
                    email: "odemageard1@spotify.com",
                    gender: "Female",
                    title: "Account Coordinator"
                },
                {
                    id: 3,
                    name: "Vera Taleworth",
                    email: "vtaleworth2@google.ca",
                    gender: "Male",
                    title: "Community Outreach Specialist"
                },

            ],
            showDialog: false

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
        }
    }
</script>

<style scoped>


</style>
