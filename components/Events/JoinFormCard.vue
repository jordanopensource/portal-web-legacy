<template>
    <div class="join-form-card">
        <div>
            <div class="w-full lg:ltr:ml-2 lg:rtl:mr-2 mt-4">
                <p class="live text-xs uppercase mb-2">{{ $t('events.happening')}}</p>
                <p>{{ $t('events.joinCall')}}</p>
            </div>
            <div v-if="event.onlineMeeting.password" class="block py-4">
                <hr>
            </div>
            <p v-if="event.onlineMeeting.password" class="text-xs">{{ $t('events.notRegistered') }}
                <span class="text-josa-blue cursor-pointer" @click="$store.dispatch('modal/setShowModal', false)">
                    {{ $t('events.here') }}</span>.
            </p>
            <div class="join-form w-full lg:ltr:ml-2 lg:rtl:mr-2 mt-4">
                <form @submit.prevent="joinMeeting">
                    <appControlInput id="firstName" v-model="form.fullName" controlType="input" required>
                        {{ $t('meta.fullName') }}
                    </appControlInput>
                    <appControlInput v-if="event.onlineMeeting.password" v-model="form.password" controlType="password"
                        required>{{ $t('meta.password') }}
                    </appControlInput>
                    <appButton btnStyle="button-sharp button-dark-blue-full" class="mt-4 text-xl md:text-2xl">
                        {{ $t('button.join') }}
                        <font-awesome-icon class="buttonicon" :icon="['fas', 'sign-in-alt' ]" />
                    </appButton>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import appControlInput from "@/components/FormComponents/AppControlInput";
import appButton from "@/components/FormComponents/AppButton";
export default {
name: 'JoinFormCard',
    data() {
        return {
           form: {
               fullName: '',
               password: ''
                },
            }
    },
    props: {
        event: {
        type: Object,
        required: true
        }
    },
    components: {
        appControlInput,
        appButton,
    },
    methods: {
        createHash(data) {
            const crypto = require('crypto');
            const hash = crypto.createHash('sha1');
            hash.update(data);
            return hash.digest('hex');
        },
        joinMeeting() {
            let fullName = this.form.fullName.replaceAll(' ', '+')
            let password = this.form.password
            let meetingID = this.event.onlineMeeting.meetingID
            let attendeePW = this.event.onlineMeeting.attendeePW
            let url = this.$config.bbbAPIUrl
            let secret = this.$config.bbbAPISecret
            let call
                if (this.event.onlineMeeting.password) {
                    let password = this.form.password
                    call = `meetingID=${meetingID}&password=${password}&fullName=${fullName}`
                } else {
                    call = `meetingID=${meetingID}&password=${attendeePW}&fullName=${fullName}`
                }
            let data = `join${call}${secret}`
            let encoded = encodeURI(data)
            let checksum = this.createHash(encoded)
            let redirect = `${url}join?${call}&checksum=${checksum}`
            window.open(redirect, '_blank');
            }
        }
    }
</script>

<style scoped>
    .join-form-card {
        @apply bg-josa-warm-grey-light p-8 flex align-top;
    }

    .icon {
        @apply text-josa-warm-grey-dark text-2xl;
    }

    .buttonicon {
        @apply ml-2;
    }

    .join-form {
        @apply bg-josa-warm-grey-light align-top;
    }

    hr {
        @apply border-josa-warm-grey-dark;
    }

    [dir="rtl"] .icon {
        transform: rotate(180deg);
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
        margin-left: 0px;
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

    [dir="rtl"] .live::before {
        margin-left: 6px;
        margin-right: 0;
    }
</style>