<template>
  <div class="flex bg-josa-warm-grey-light">
    <div class="flex m-10 p-2 ">
      <div  v-for="(crumb, index) in crumbs" :key="index" class="m-3">
        <nuxt-link v-if="crumb.path =='/' || crumb.path=='/ar' " :to="crumb.path">
          <span class="capitalize text-black">
            <font-awesome-icon v-show="crumbs.length >= 1" class="ml-2 mr-2" icon="home" size="lg" fixed-width />
          </span>
        </nuxt-link>
        <nuxt-link v-else :to="crumb.path">
          <span property="name" class="capitalize text-black text-2xl font-thin leading-5">{{
          $route.fullPath === crumb.path  && title !== null ? title :  crumb.PageMeta['title_' + $i18n.locale]
        }}</span>
        </nuxt-link>
        <font-awesome-icon v-if="$i18n.locale == 'ar'" v-show="crumbs.length > index +1" class="mr-3" icon="chevron-left"  size="lg" />
        <font-awesome-icon v-else v-show="crumbs.length > index +1" class="ml-3" icon="chevron-right"  size="lg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
      title: {
        type: String,
        default: null,
      },
      pageMeta: {
        type: Object,
        default:null,
      }
    },
    data() {
    return {
      lang: this.$i18n.locale,
      myArray:[0],
      MyData :null
    }
  },
  computed: {
       crumbs() {
        var MypageMeta;
        MypageMeta = this.pageMeta;
        const pageMeta =  MypageMeta;
        const fullPath = this.$route.fullPath
        const _this = this;
        if (this.$store.getters.GetBrcrumbs.length) {
          this.$store.getters.GetBrcrumbs.map(function (crumb) {
            if (_this.$store.getters.GetBrcrumbs[0].path == fullPath ) {
              
              _this.$store.dispatch('removeCrumb', 0);
              return _this.$store.getters.GetBrcrumbs;
            } 
            else if (fullPath == crumb.path) {
              _this.$store.dispatch('removeCrumb', 1);
              return _this.$store.getters.GetBrcrumbs;
            }
          })
        }
        let path = fullPath
        if(pageMeta!==null){
        const PageMeta = pageMeta
        const match = _this.$router.match(path)
        const data = {
          title: path,
          ...match,
          PageMeta
        }
        if(_this.myArray.length){
          _this.$store.dispatch('setCrumbs', data)
        }
        if(this.lang !== this.$i18n.locale){
          _this.$store.dispatch('removeCrumb', 0);
        }
       }
        this.myArray.pop();
        return this.$store.getters.GetBrcrumbs;
      },
   },
 }
</script>
<style scoped>
.loading {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 4px solid #3897c0;
  border-radius: 50%;
  border-top-color: #3897c0;
  animation: spin 1s ease-in-out infinite;
}
</style>