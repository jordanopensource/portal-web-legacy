<template>
    <div class="flex flex-wrap">
        <div class="w-full md:w-3/5 p-8">
            <h3>{{event['title_' + $i18n.locale]}}</h3>
            <p class="">{{ $t('events.hostedBy') }}</p>
            <div class="flex flex-no-wrap my-8">
                <appImage v-if="event.thumbnail" :image="event.thumbnail" size="small" class="thumbnail w-1/2 pr-2" />
                <img v-else class="thumbnail md:ltr:mr-6 md:rtl:ml-6 w-full" :src="placeholderImage" />
                <div class="w-1/2 pl-2">
                    <p class="live text-xs uppercase mb-2">{{ $t('events.happening')}}</p>
                    <p>{{ $t('events.joinCall')}}</p>
                </div>
            </div>
            <div v-if="event.onlineMeeting.password" class="block py-4">
                <hr>
            </div>
            <p v-if="event.onlineMeeting.password" class="text-xs">{{ $t('events.notRegistered') }}
                <span class="text-josa-blue cursor-pointer" @click="$store.dispatch('setShowModal', false)"> {{ $t('events.here') }}</span>.
            </p>
        </div>
        <div class="join-form w-full md:w-2/5 flex-shrink-0 p-8">
            <h3>{{ $t('events.join') }}</h3>
            <div class="block py-4">
                <hr>
            </div>
            <form @submit.prevent="joinMeeting">
                <appControlInput id="firstName" v-model="form.fullName" controlType="input" required>
                    {{ $t('meta.fullName') }}
                </appControlInput>
                <appControlInput v-if="event.onlineMeeting.password" v-model="form.password" controlType="password" required>{{ $t('meta.password') }}
                </appControlInput>
                <appButton btnStyle="button-sharp button-dark-blue-full" class="mt-4 text-2xl">{{ $t('button.join') }}
                    <font-awesome-icon class="icon" :icon="['fas', 'sign-in-alt' ]" />
                </appButton>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import appImage from '~/components/UI/appImage';
    import appControlInput from "@/components/FormComponents/AppControlInput";
    import appButton from "@/components/FormComponents/AppButton";

    export default {
        name: 'EventJoinForm',
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
            appControlInput,
            appButton,
            appImage
        },
        props: {
            event: {
                type: Object,
                required: true
            }
        },
        methods: {
            removeJoin() {
                this.$route.query.join == 'false'
            },
            createHash(data) {
                const crypto = require('crypto');
                const hash = crypto.createHash('sha1');
                hash.update(data);
                return hash.digest('hex');
            },
            joinMeeting() {
                let fullName = this.form.fullName
                let password = this.form.password
                let meetingID = this.event.onlineMeeting.meetingID
                let url = this.$config.bbbAPIUrl
                let secret = this.$config.bbbAPISecret
                let call
                if(this.event.onlineMeeting.Password) {
                    let password = this.form.password
                    call = `meetingID=${meetingID}&password=${password}&fullName=${fullName}`
                } else {
                    call = `meetingID=${meetingID}&fullName=${fullName}`
                }
                let data = `join${call}${secret}`
                let checksum = this.createHash(data)
                let redirect = `${url}join?${call}&checksum=${checksum}`
                window.open(redirect, '_blank');
            }
        }
    }
</script>

<style scoped>
    .join-form {
        @apply bg-josa-warm-grey-light align-top;
    }

    .thumbnail {
        @apply object-cover object-center;
    }

    h3 {
        @apply text-2xl;
    }

    hr {
        @apply border-josa-warm-grey-dark;
    }

    /deep/ label {
        @apply font-bold mb-1;
    }

    .icon {
        @apply ml-2;
    }

    @keyframes live {
        0% {
            background-color: #f8c0ac;
        }

        100% {
            background-color: #dd4814;
        }
    }

    .live::before {
        content: "";
        height: 14px;
        width: 14px;
        border-radius: 50%;
        display: inline-block;
        margin-right: 6px;
        vertical-align: sub;
        animation-name: live;
        animation-duration: 1s;
        animation-timing-function: ease-out;
        animation-delay: 0;
        animation-direction: alternate;
        animation-iteration-count: infinite;
        animation-fill-mode: none;
        animation-play-state: running;
    }
</style>