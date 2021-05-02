<template>
    <div class="preview mt-8 md:grid md:grid-cols-2 col-gap-8 row-gap-0">
        <appImage v-if="activity.image" :image="activity.image" size="medium" class="thumbnail" />
        <img v-else :src="placeholderImage" class="thumbnail" />
        <div class="my-auto">
            <div class="text-josa-warm-grey-dark font-bold uppercase">{{ date }}</div>
            <h2 class="mb-4 mt-2 text-3xl">{{ activity['title_' + $i18n.locale] }}</h2>
            <div v-html="activity['description_' + $i18n.locale]"></div>
        </div>
    </div>
</template>

<script>
    import appImage from '~/components/UI/appImage';
    export default {
        name: 'ActivityPreview',
        data() {
            return {
                placeholderImage: process.env.baseUrl + '/uploads/josabots_88f0a93786.jpeg'
            }
        },
        components: {
            appImage
        },
        props: {
            activity: {
                type: Object,
                required: true
            }
        },
        computed: {
            date() {
                const startDate = new Date(this.activity.startDate)
                const endDate = new Date(this.activity.endDate)

                const startMonth = startDate.getMonth()
                const startYear = startDate.getFullYear()
                const endMonth = endDate.getMonth()
                const endYear = endDate.getFullYear()

                const monthYearDateFilter = this.$options.filters.monthYearDate
                const monthDateFilter = this.$options.filters.monthDate
                const locale = this.$i18n.locale

                // Spans more than one year: May 2021 to January 2022
                if (startYear !== endYear) {
                    return `${monthYearDateFilter(startDate, locale)} ${this.$t('meta.to')} ${monthYearDateFilter(endDate, locale)} `
                }

                // Within a single month: May 2021
                if (startMonth === endMonth) {
                    return monthYearDateFilter(startDate, locale)
                }

                // Ends the next month within the same year: May and June 2021
                if (endMonth - startMonth === 1) {
                    return `${monthDateFilter(startDate, locale)} ${this.$t('meta.and')} ${monthYearDateFilter(endDate, locale)}`
                }

                // Spans more than 2 months but within the same year: May to Augest 2021
                return `${monthDateFilter(startDate, locale)} ${this.$t('meta.to')} ${monthYearDateFilter(endDate, locale)}`
            },
        }
    }
</script>

<style scoped>
    [lang="en"] p {
        @apply leading-golden;
    }

    [lang="ar"] p {
        @apply leading-normal;
    }

    .preview .thumbnail,
    .preview .thumbnail img {
        width: 100%;
        padding: 0;
    }
</style>