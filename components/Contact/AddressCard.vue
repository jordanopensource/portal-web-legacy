<template>
  <div class="address-card container">
    <div class="px-12 py-20">
      <h4 class="mb-12">{{ $t('contact.address') }}</h4>

      <div class="flex flex-wrap">

        <div class="mb-6 w-full md:w-auto md:mr-20">
          <font-awesome-icon class="icon" :icon="['fas', 'map-marker-alt']" />
          <div class="pl-8">
            <p>{{ info.address.addressOne }}</p>
            <p>{{ info.address.addressTwo }}</p>
            <p class="mt-4">{{ info.address.street }}, {{ info.address.city }}</p>
          </div>
        </div>

        <div class="mb-6 w-full md:w-auto">

          <div class="mb-6">
            <font-awesome-icon class="icon" :icon="['fas', 'clock']" />
            <div class="pl-8">
              <p class="font-bold">{{ $t('contact.workingHours') }}:</p>
              <p>{{ info.workingDays }}</p>
              <p>{{ info.workingHours }}</p>
            </div>
          </div>

          <div class="mb-6">
            <font-awesome-icon class="icon" :icon="['fas', 'phone-alt']" />
            <span>
              <span class="font-bold">{{ $t('contact.voice') }}:</span>
              <span>+{{ info.phone }}</span>
            </span>
          </div>

          <div class="mb-6">
            <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
            <span>
              <span class="font-bold">{{ $t('contact.email') }}:</span>
              <span>{{ info.email }}</span>
            </span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      info: {
        type: Object,
        required: true
      }
    }
  }

</script>

<style scoped>
  .icon {
    @apply text-josa-warm-grey-dark text-2xl mr-3 float-left;
  }

  p {
    @apply
  }

</style>
