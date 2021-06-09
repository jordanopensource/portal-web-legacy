<template>
  <div>
    <AppButton @click="OpendDropdown()" btn-style="button-flat">
      <p calss="text">
        {{ $t('addToCalender.add') }}
      </p>
    </AppButton>
    <div v-if="Opened" class="list">
      <div class="py-1">
        <div class="flex">
          <img class="icon rtl:mr-2" src="~/static/images/icons/apple.svg">
          <a @click="makeIcsFile(AppleId)" id="download" download="JOSAEvent.ics"
            class="list-text">{{ $t('addToCalender.apple') }}</a>
        </div>
        <div class="flex">
          <img class="icon rtl:mr-2" src="~/static/images/icons/outlook.svg">
          <a @click="OutlookEncode(OutlookLink)" class="list-text">{{ $t('addToCalender.outlook') }}</a>
        </div>
        <div class="flex">
          <img class="icon rtl:mr-2" src="~/static/images/icons/search.svg">
          <a @click="GoogleEncode(GoogleLink)" class="list-text">{{ $t('addToCalender.google') }}</a>
        </div>
        <div class="flex">
          <img class="icon rtl:mr-2" src="~/static/images/icons/office.svg">
          <a @click="OutlookEncode(OfficeLink)" class="list-text">{{ $t('addToCalender.office') }}</a>
        </div>
        <div class="flex">
          <img class="icon rtl:mr-2" src="~/static/images/icons/android.svg">
          <a @click="makeIcsFile(AndroidId)" id="download2" download="JOSAEvent.ics"
            class="list-text">{{ $t('addToCalender.android') }}</a>
        </div>
        <div class="flex">
          <img class="icon rtl:mr-2" src="~/static/images/icons/download.svg">
          <a @click="makeIcsFile(OtherId)" id="download1" download="JOSAEvent.ics"
            class="list-text">{{ $t('addToCalender.others') }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AppButton from "@/components/FormComponents/AppButton";
  export default {
    name: 'AddToCalender',
    data() {
      return {
        Opened: false,
        GoogleLink: "https://calendar.google.com/calendar/render?",
        OutlookLink: "https://outlook.live.com/calendar/0/deeplink/compose?",
        OfficeLink: "https://outlook.office.com/calendar/0/deeplink/compose?",
        AppleId: "#download",
        OtherId: "#download1",
        AndroidId: "#download2",
      }
    },
    components: {
      AppButton
    },
    methods: {
      OpendDropdown() {
        this.Opened = true;
      },
      CloseDropdown(e) {
        if (!this.$el.contains(e.target)) {
          this.Opened = false;
        }
      },
      convertDate(date) {
        var event = new Date(date).toISOString();
        event = event.replaceAll(":", "");
        event = event.replaceAll("-", "");
        event = event.replaceAll(".", "");
        return event;
      },
      GoogleEncode(Url) {
        var div = document.createElement("div");
        div.innerHTML = this.event['description_' + this.$i18n.locale];
        var desc = div.textContent || div.innerText || "";
        desc = desc.substring(0, 200) + "...";
        let URL =
          `${Url}action=TEMPLATE&text=${this.event['title_' + this.$i18n.locale]}&dates=${this.convertDate(this.event.startDate)}/${this.convertDate(this.event.endDate)}&details=${desc}&sf=true&output=xml`;
        let encoded = encodeURI(URL)
        window.open(encoded, '_blank');
      },
      OutlookDate(date) {
        var event = new Date(date);
        event.setMinutes(event.getMinutes() - event.getTimezoneOffset());
        event = event.toISOString();
        event = event.replaceAll("Z", "");
        return event;
      },
      OutlookEncode(Url) {
        var div = document.createElement("div");
        div.innerHTML = this.event['description_' + this.$i18n.locale];
        var desc = div.textContent || div.innerText || "";
        desc = desc.substring(0, 200) + "...";
        var title = this.event['title_' + this.$i18n.locale];
        let URL =
          `${Url}rru=addevent&subject=${title}&startdt=${this.OutlookDate(this.event.startDate)}&enddt=${this.OutlookDate(this.event.endDate)}&body=${desc}`;
        let encoded = URL
        encoded = encodeURI(encoded)
        window.open(encoded, '_blank');
      },
      makeIcsFile(id) {
        var div = document.createElement("div");
        div.innerHTML = this.event['description_' + this.$i18n.locale];
        var desc = div.textContent || div.innerText || "";
        var icsFile = null;
        var test =
          "BEGIN:VCALENDAR\n" +
          "CALSCALE:GREGORIAN\n" +
          "METHOD:PUBLISH\n" +
          "X-WR-TIMEZONE:Asia/Amman" +
          "PRODID:-//Test Cal//EN\n" +
          "VERSION:2.0\n" +
          "BEGIN:VEVENT\n" +
          "UID:test-1\n" +
          "DTSTART:" +
          this.convertDate(this.event.startDate) +
          "\n" +
          "DTEND:" +
          this.convertDate(this.event.endDate) +
          "\n" +
          "SUMMARY:" +
          this.event['title_' + this.$i18n.locale] +
          "\n" +
          "DESCRIPTION:" +
          desc.substring(0, 200) + "..." +
          "\n" +
          "END:VEVENT\n" +
          "END:VCALENDAR";

        var data = new File([test], {
          type: "text/plain"
        });
        if (icsFile !== null) {
          window.URL.revokeObjectURL(icsFile);
        }
        icsFile = window.URL.createObjectURL(data);
        let link = document.querySelector(id);
        link.href = icsFile
        link.download
      }
    },
    props: {
      event: {
        required: true,
        type: Object,
      }
    },
    mounted() {
      document.addEventListener('click', this.CloseDropdown)
    }
  }
</script>

<style scoped>
  .text {
    @apply text-lg text-center;
  }

  .list {
    @apply origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white;
    z-index: 999;

  }

  .list-text {
    @apply block px-4 py-2 text-lg;
  }

  .icon {
    @apply w-5 ml-2;
  }
</style>