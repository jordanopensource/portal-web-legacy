<template>
    <div class="flex flex-wrap">
        <div class="w-full p-8">
            <h3>{{event['title_' + $i18n.locale]}}</h3>
            <p class="">{{ $t('events.hostedBy') }}</p>
            <div class="flex flex-col lg:flex-row mt-8 mb-4">
                <appImage v-if="event.thumbnail" :image="event.thumbnail" size="small"
                    class="thumbnail w-full lg:w-1/2 lg:ltr:mr-2 lg:rtl:ml-2" />
                <img v-else class="thumbnail md:ltr:mr-6 md:rtl:ml-6 w-full" :src="placeholderImage" />
                <div class="w-full lg:w-1/2 lg:ltr:ml-2 lg:rtl:mr-2 mt-4">
                    <div class="flex">
                        <font-awesome-icon class="flex icon ltr:mr-2 rtl:ml-2" size="lg"
                            :icon="['fas', 'exclamation-triangle']" />
                        <p class="text-lg uppercase mb-2">{{ $t('events.notStarted')}}</p>
                    </div>
                    <p>{{ $t('events.waitMessage')}}</p>
                    <p class="font-bold">{{ from | dayFullDate($i18n.locale) }}</p>
                    <p class="font-bold">{{ $t('timeCard.from') }} {{ from | time($i18n.locale) }}
                        {{ $t('timeCard.to') }} {{ to | time($i18n.locale) }} {{ $t('timeString.time') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import appImage from '~/components/UI/appImage';
    export default {
        name: 'NotStarted',
        data() {
            return {
                form: {
                    fullName: '',
                    password: ''
                },
                placeholderImage: process.env.baseUrl + '/uploads/josabots_88f0a93786.jpeg'
            }
        },
        components: {
            appImage
        },
        props: {
            event: {
                type: Object,
                required: true
            },
            from: {
                required: true
            },
            to: {
                required: true
            }
        },

    }
</script>

<style scoped>
    .thumbnail {
        @apply object-cover object-center;
    }

    h3 {
        @apply text-2xl;
    }

    /deep/ label {
        @apply font-bold mb-1;
    }

    .icon {
        @apply ml-0;
    }

    [dir="rtl"] .icon {
        transform: rotate(180deg);
    }
</style>