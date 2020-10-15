<template>
    <div class="registration-form">
        <h3>{{ $t('events.register') }}</h3>
        <p>{{ $t('events.registerDesc') }}</p>
        <div class="block py-4">
            <hr>
        </div>
        <p v-if="status === 'success'" class="success mb-4">{{ $t('events.registerSuccess') }}</p>
        <p v-if="status === 'fail'" class="fail mb-4">{{ $t('events.registerFail') }}</p>
        <p v-if="status === 'exist'" class="success mb-4">{{ $t('events.registerExist') }}</p>
        <form @submit.prevent="register">
            <appControlInput id="firstName" v-model="form.firstName" controlType="input" required>
                {{ $t('meta.firstName') }}
            </appControlInput>
            <appControlInput id="lastName" v-model="form.lastName" controlType="input" required>
                {{ $t('meta.lastName') }}
            </appControlInput>
            <appControlInput id="email" v-model="form.email" controlType="email" required>{{ $t('meta.email') }}
            </appControlInput>
            <appButton btnStyle="button-sharp button-dark-blue-full" class="mt-4">{{ $t('button.register') }}
            </appButton>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    import appControlInput from "@/components/FormComponents/AppControlInput";
    import appButton from "@/components/FormComponents/AppButton";

    export default {
        name: 'EventRegisterationForm',
        data() {
            return {
                status: null,
                form: {
                    email: '',
                    firstName: '',
                    lastName: ''
                }
            }
        },
        components: {
            appControlInput,
            appButton
        },
        props: {
            eventId: {
                type: Number,
                required: true
            },
            registrants: {
                type: Array
            }
        },
        computed: {
            ifRegisterd() {
                return this.registrants.some(r => r.email == this.form.email)
            }
        },
        methods: {
            async register() {
                if (this.ifRegisterd) {
                    this.status = 'exist'
                } else {
                    const registrant = {
                        "firstName": this.form.firstName,
                        "LastName": this.form.lastName,
                        "email": this.form.email
                    }
                    return axios.put(process.env.baseUrl + "/events/" + this.eventId + "/register",
                            registrant)
                        .then(res => {
                            this.status = 'success'
                            this.registrants = res.data.registrants
                        })
                        .catch(e => {
                            this.status = 'fail'
                        })
                }
            }
        }
    }
</script>

<style scoped>
    .registration-form {
        @apply bg-josa-warm-grey-light p-8 align-top;
    }

    h3 {
        @apply font-bold mb-2;
    }

    hr {
        @apply border-josa-warm-grey-dark;
    }

    /deep/ label {
        @apply font-bold mb-1;
    }
</style>