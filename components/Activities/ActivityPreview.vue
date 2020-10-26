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
    import moment from 'moment';
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
                var dateStart = moment(this.activity.startDate)
                var dateEnd = moment(this.activity.endDate)
                if (dateStart.month() === dateEnd.month()) {
                    return dateStart.locale(this.$i18n.locale).format('MMMM YYYY')
                } else {
                    if (dateStart.year() === dateEnd.year()) {
                        if (dateEnd.month() - dateStart.month() === 1) {
                            return `${dateStart.locale(this.$i18n.locale).format('MMMM')} ${this.$t('meta.and')} ${dateEnd.locale(this.$i18n.locale).format('MMMM YYYY')}`
                        } else {
                            return `${dateStart.locale(this.$i18n.locale).format('MMMM')} ${this.$t('meta.and')} ${dateEnd.locale(this.$i18n.locale).format('MMMM YYYY')}`
                        }
                    } else {
                        return `${dateStart.locale(this.$i18n.locale).format('MMMM YYYY')} ${$t('meta.and')} ${dateEnd.locale(this.$i18n.locale).format('MMMM YYYY')}`
                    }
                }
            }
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