<template>
    <div>
    <v-card class="mb-3">
        <v-card-text class="purple lighten-4 " >

                <v-breadcrumbs  :items="items" divider=">"></v-breadcrumbs>

        </v-card-text>
    </v-card>
    <v-card>


            <v-card-text>

                <v-row >
                    <v-col cols="4">
                        <v-card
                            color="#385F73"
                            dark
                        >
                            <v-card-text class="white--text">
                                <div class="headline mb-2">Unlimited music now</div>
                                Listen to your favorite artists and albums whenever and wherever, online and offline.
                            </v-card-text>

                            <v-card-actions>
                                <v-btn text>Listen Now</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="4">
                        <v-card
                            color="#385F73"
                            dark
                        >
                            <v-card-text class="white--text">
                                <div class="headline mb-2">Unlimited music now</div>
                                Listen to your favorite artists and albums whenever and wherever, online and offline.
                            </v-card-text>

                            <v-card-actions>
                                <v-btn text>Listen Now</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>         <v-col cols="4">
                        <v-card
                            color="#385F73"
                            dark
                        >
                            <v-card-text class="white--text">
                                <div class="headline mb-2">Unlimited music now</div>
                                Listen to your favorite artists and albums whenever and wherever, online and offline.
                            </v-card-text>

                            <v-card-actions>
                                <v-btn text>Listen Now</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>


    </v-card>
    </div>
</template>

<script>
    export default {
        name: "DashboardCoponent",
        data:()=>({
            initial:"",
            items: [
                {
                    text: 'Dashboard',
                    disabled: true,
                    href: 'breadcrumbs_dashboard',
                },

            ],
        }),

    }
</script>

<style scoped>

</style>
