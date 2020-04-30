<template>
<div id="footer">
  <div class="container flex flex-col md:flex-row flex-wrap md:flex-no-wrap justify-between ">

    <section>
      <h6>{{ $t('pages.aboutJosa') }}</h6>
      <ul class="links">
        <nuxt-link v-for="(link, label) in aboutLinks" :key="label" tag="li" :to='link' active-class="active"><a>{{ $t('pages.'+label) }}</a></nuxt-link>
      </ul>
    </section>

    <div class="block md:hidden py-8">
      <hr>
    </div>

    <section>
      <h6>{{ $t('pages.ourWork') }}</h6>
      <ul class="links pb-4 md:pb-0">
        <nuxt-link v-for="(link, label) in workLinks1" :key="label" tag="li" :to='link' active-class="active"><a>{{ $t('pages.'+label) }}</a></nuxt-link>
      </ul>
      <div class="hidden md:block py-4">
        <hr>
      </div>
      <ul class="links">
        <nuxt-link v-for="(link, label) in workLinks2" :key="label" tag="li" :to='link' active-class="active"><a>{{ $t('pages.'+label) }}</a></nuxt-link>
      </ul>
    </section>

    <div class="block md:hidden py-8">
      <hr>
    </div>

    <section>
      <h6>{{ $t('pages.takeAction') }}</h6>
      <ul class="links">
        <nuxt-link v-for="(link, label) in actionLinks" :key="label" tag="li" :to='link' active-class="active"><a>{{ $t('pages.'+label) }}</a></nuxt-link>
      </ul>
    </section>

    <div class="block md:hidden py-8">
      <hr>
    </div>

    <section>
      <h6>{{ $t('pages.connect') }}</h6>
      <ul class="links pb-4 md:pb-0">
        <nuxt-link v-for="(link, label) in connectLinks" :key="label" tag="li" :to='link' active-class="active"><a>{{ $t('pages.'+label) }}</a></nuxt-link>
      </ul>
      <div class="hidden md:block py-4">
        <hr>
      </div>
       <ul class="links">
        <li v-for="link in socialMediaLinks" :key="link.id"><a class="whitespace-no-wrap" :href="link.path" target="_blank"><font-awesome-icon class="mr-2" :icon="['fab', link.icon ]"/>{{ link.id }}</a></li>
         </ul>
    </section>

  </div>

  <div id="site-info" class="bg-josa-blue-veryDark">
    <div class="container flex flex-col md:flex-row">
      <div  class="logo">
        <img src="~/static/logo/logo.svg" alt="JOSA Logo">
      </div>
      <div class="block md:hidden py-8">
        <hr>
      </div>
      <div id="copyright-info" class="">
        <img class="cc-logo pr-4" src="~/static/logo/cc.svg" alt="">
        <p class="text-sm text-josa-warm-grey-dark">{{ $t('copyright.info') }}</p>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      aboutLinks: {
        'news': '/',
        'blog': '/',
        'partners': '/',
        'boardStaff': '/',
        'annualReports': '/',
        'CodeOfConduct': '/',
      },
      workLinks1: {
        'openSourceSoftware': '/',
        'openSourceHardware': '/',
        'openData': '/',
        'openInternet': '/',
        'openContent': '/',
      },
      workLinks2: {
        'projectsAndInitiaves': '/',
        'events': '/events',
        'publications': '/',
      },
      actionLinks: {
        'becomeAMember': '/',
        "membersHub": '/',
        'volunteer': '/',
        'suggestASpeaker': '/',
        'donate': '/',
      },
      connectLinks: {
        'contactUs': '/',
        'joinSlack': '/',
        'newsletter': '/',
      },
      socialMediaLinks: [
        { icon: 'facebook-square', path: 'https://facebook.com/jordanopensource', id: '/jordanopensource'},
        { icon: 'twitter', path: 'https://twitter.com/jo_osa', id: '@jo_osa'},
        { icon: 'instagram', path: 'https://instagram.com/jordanopensource', id: '/jordanopensource'},
      ]
    }
  }
}
</script>

<style scoped>
#footer {
  @apply bg-josa-blue-dark text-white font-lato;
  line-height: 1.6;
}

.container {
  @apply p-16 !important;
}
#site-info .container {
  @apply py-10 !important;
}
section {
  @apply flex-grow;
}

h6 {
  @apply uppercase pb-2;
}

hr {
  @apply border-dotted
}

img {
  max-width: 240px;
}
.logo, #copyright-info {
    @apply w-full flex align-middle justify-center;
}
@screen md {
  .logo, #copyright-info {
   @apply w-1/2 justify-start;
  }
}
@screen md {
  section {
    @apply px-4;
  }
}
@screen lg {
  .logo {
   @apply w-2/3;
  }
  #copyright-info {
    @apply w-1/3;
  }
}
</style>
