<template>
    <section>
        <p class="content"><b><h3>Auto-complete</h3></b></p>
        <b-field label="For quick help, use Auto-complete">
            <b-autocomplete
                rounded
                v-model="name"
                :data="filteredDataArray"
                placeholder="e.g. My fitness Tracker"
                icon="magnify"
                clearable
                @select="option => selected = option">
                <template slot="empty">No results found</template>
            </b-autocomplete>
        </b-field>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                data: [
                    'exercises',
                    'vue',
                    'fit',
                    'sleep',
                    'workout',
                    'track_run',
                    'food_plan',
                    'diet_plan',
                    'working_hours',
                    'burnt_calories',
                    'walked distance',
                    'Vue.js',
                    'fitness fight',
                    'gym',
                    'equipment',
                    'about',
                    'strength',
                    'training',
                    'web',
                    'sleep_tack',
                    'day_slept_time',
                    'night_slept_time',
                    'pushups',
                    'pullups',
                    'akash dev',
                    'gagan ashi',
                    'ad1',
                    'ga1',
                    'ad1@gmail.com',
                    'ga@gmail.com',
                    '2020',
                    '1234',
                    'New paltz',
                    'NY',
                    'Albany'
                ],
                name: '',
                selected: null
            }
        },
        computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        }
    }
</script>