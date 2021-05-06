<template>
    <div>
        <div class="__nuxt-error-page container">
            <div
                class="flex flex-col-reverse md:flex-row justify-between align-middle flex-wrap sm:flex-no-wrap py-12 md:py-6 px-6 md:px-12">
                <div class="my-auto sm:max-w-1/2 lg:max-w-1/3">
                    <h2>{{ $t('error.ops') }}</h2>
                    <p class="description">{{ $t('error.lost') }}</p>
                    <p>{{ $t('error.links') }}</p>
                    <div>
                        <a href="/">{{ $t('pages.home') }}</a>
                        <a href="/blog">{{ $t('pages.blog') }}</a>
                        <a href="/events">{{ $t('pages.events') }}</a>
                    </div>
                </div>

                <img src="/images/icons/lost.svg" alt="lost" class="bot mt-8 md:ltr:pl-8 md:rtl:pr-8 md:py-8" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NuxtError',
        head() {
            return {
                title: '404 - ' + (this.$i18n.locale == 'ar' ? 'الجمعية الأردنية للمصدر المفتوح' :
                    'Jordan Open Source Association'),
                meta: [{
                    name: 'description',
                    content: 'Error 404 page not found'
                }]
            }
        }
    }
</script>

<style>
    .__nuxt-error-page {
        background-color: #fff;
        color: #2e3436;
    }

    .__nuxt-error-page h2 {
        font-size: 5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .__nuxt-error-page p {
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
    }

    .__nuxt-error-page .description {
        font-size: 1.25rem;
        line-height: 1;
        margin-bottom: 2rem;
        margin-top: 2rem;
    }

    .__nuxt-error-page a {
        color: #3897c0;
        display: block;
        margin-bottom: 4px;
    }

    @screen md {
        .__nuxt-error-page h2 {
            font-size: 7rem;
        }
    }
</style>