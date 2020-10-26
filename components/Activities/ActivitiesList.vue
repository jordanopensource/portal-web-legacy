<template>
    <div v-if="ifNotEmpty()">
        <h2>{{ title }}</h2>
        <activityPreview v-for="activity in orderBy(activities, 'startDate', -1)" :key="activity.id" :id="activity.id"
            :activity="activity" />
    </div>
</template>

<script>
    import activityPreview from '@/components/Activities/ActivityPreview';
    import Vue2Filters from 'vue2-filters';
    export default {
        mixins: [Vue2Filters.mixin],
        components: {
            activityPreview
        },
        props: {
            activities: {
                type: Array,
                required: true
            },
            title: {
                type: String,
                required: true
            }
        },
        methods: {
            ifNotEmpty() {
                if (Array.isArray(this.activities) && this.activities.length)
                    return true;
                else
                    return false;
            }
        },
    }
</script>