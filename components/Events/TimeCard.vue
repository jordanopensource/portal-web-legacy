<template>
  <div class="time-card">
    <font-awesome-icon class="icon ltr:mr-3 rtl:ml-3" :icon="['fas', 'clock']" />
    <div>
      <h5>{{ $t('timeCard.title') }}</h5>
      <p v-if="isRecurringEvent()">{{ from | dayFullDateAmman($i18n.locale) }} - {{ to | dayFullDateAmman($i18n.locale) }}</p>
      <p v-else>{{ from | dayFullDateAmman($i18n.locale) }}</p>
      <p>{{ $t('timeCard.from') }} {{ from | timeAmman($i18n.locale) }} {{ $t('timeCard.to') }} {{ to | timeAmman($i18n.locale) }} ({{ $t('timeString.time') }})</p>
      <br/>
      <div v-if="new Date().getTimezoneOffset() !== -180">
        <p>{{ from | dayFullDate($i18n.locale) }}</p>
        <p>{{ $t('timeCard.from') }} {{ from | time($i18n.locale) }} {{ $t('timeCard.to') }} {{ to | time($i18n.locale) }}
        ({{ $t('timeCard.gmt') }}{{ to | timezone($i18n.locale) }})</p>
      </div>
      <addToCalendar v-if="isOngoingEvent()" class="mt-4" :event="event"/>
    </div>
  </div>
</template>

<script>
  import addToCalendar from '~/components/Events/AddToCalendar';
  export default {
    name: 'TimeCard',
    props: {
      from: {
        required: true
      },
      to: {
        required: true
      },
      event:{
        required: true
      }
    },
    components:{
      addToCalendar
    },
    methods: {
      isOngoingEvent() {
        let endDate = new Date(this.to).getTime();
        let currentDate = new Date().getTime();
        return currentDate < endDate;
      },
      isRecurringEvent() {
        let startDate = new Date(this.from).getDate();
        let endDate = new Date(this.to).getDate();
        return startDate !== endDate;
      }
    }
  }

</script>

<style scoped>
  .time-card {
    @apply bg-josa-warm-grey-light p-8 flex align-top;

  }
  .icon {
    @apply text-josa-warm-grey-dark text-2xl;
  }
</style>
