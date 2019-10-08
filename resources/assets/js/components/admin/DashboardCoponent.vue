<template>

        <v-row>
            <v-col cols="12" sm="6" md="4">
                <v-card color="#385F73" dark>
                    <v-card-text class="white--text">
                        <div class="headline mb-2">Unlimited music now</div>
                        Listen to your favorite artists and albums whenever and wherever, online and offline.
                    </v-card-text>

                    <v-card-actions>
                        <v-btn text>Listen Now</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                <v-card color="#385F73" dark>
                    <v-card-text class="white--text">
                        <div class="headline mb-2">Unlimited music now</div>
                        Listen to your favorite artists and albums whenever and wherever, online and offline.
                    </v-card-text>

                    <v-card-actions>
                        <v-btn text>Listen Now</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                <v-card color="#385F73" dark>
                    <v-card-text class="white--text">
                        <div class="headline mb-2">Unlimited music now</div>
                        Listen to your favorite artists and albums whenever and wherever, online and offline.
                    </v-card-text>

                    <v-card-actions>
                        <v-btn text>Listen Now</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-card class="mb-2">
                    <apexchart width="100%" type="bar" :options="chartOptions" :series="series"></apexchart>
                </v-card>
                <v-card class="mb-2">
                    <apexchart width="100%" type="line" :options="chartOptions" :series="series"></apexchart>
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-card>
                    <apexchart width="100%" type="pie" :options="{}" :series="[44, 55, 41, 17, 15]"></apexchart>
                </v-card>
            </v-col>

        </v-row>


</template>

<script>

    export default {
        name: "DashboardCoponent",
        data: () => ({
            initial: "",
            items: [
                {
                    text: 'Dashboard',
                    disabled: true,
                    href: 'breadcrumbs_dashboard',
                },

            ],
            chartOptions: {
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
            },

            series: [{
                name: 'series-1',
                data: [30, 40, 35, 50, 49, 60, 70, 91]
            }]
        }),
        mounted() {
            this.$store.state.title = "Dashboard";

        }

    }
</script>

<style scoped>

</style>
