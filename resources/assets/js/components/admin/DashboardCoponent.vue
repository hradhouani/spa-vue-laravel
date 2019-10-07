<template>
    <md-card>
        <md-card-header>
            <md-card-header-text>
                <div class="md-title">Media card</div>
                <div class="md-subhead">Normal size</div>
            </md-card-header-text>
        </md-card-header>

            <md-card-content>
                <md-field>
                    <label>Initial Value</label>
                    <md-input v-model="initial"></md-input>
                </md-field>
            </md-card-content>

        <md-card-actions>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
        </md-card-actions>
    </md-card>

</template>

<script>
    export default {
        name: "DashboardCoponent",
        data:()=>({
            initial:""
        }),

    }
</script>

<style scoped>

</style>
