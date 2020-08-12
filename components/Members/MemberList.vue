<template>
  <div class="w-full">
    <div class="py-6 flex flex-wrap md:flex-no-wrap justify-between">
      <!-- Members Count  -->
      <p class="display-lead text-lg py-2">{{ membersCount }} {{ $t('members.members') }}</p>
      <!-- Sort -->
      <span class="sort py-2">
        <p class="inline-block uppercase text-josa-blue ltr:mr-2 rtl:ml-2">{{$t('sort.sortBy')}}</p>
        <div class="inline-block relative">
          <select name="sortMembers" id="sortMembers" v-model="sortValue"
            class="block appearance-none w-full bg-josa-warm-grey-light px-4 py-2 ltr:pr-10 rtl:pl-10 rounded-md leading-tight focus:outline-none hover:bg-josa-warm-grey">
            <option value="memberSinceACS" @click="currentPage = 1">{{$t('sort.memberSinceACS')}}</option>
            <option value="memberSinceDESC" @click="currentPage = 1" selected>{{$t('sort.memberSinceDESC')}}</option>
            <option value="fullNameASC" @click="currentPage = 1">{{$t('sort.fullNameASC')}}</option>
            <option value="fullNameDESC" @click="currentPage = 1">{{$t('sort.fullNameDESC')}}</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center px-2 text-gray-700  bg-josa-warm-grey ltr:rounded-r-md rtl:rounded-l-md">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
          </div>
        </div>
      </span>
    </div>
    <!-- Members preview -->
    <section>
      <MemberPreview v-for="member in displayedMembers" :key="member.id" :member="member" />
    </section>
    <!-- Pagination -->
    <div class="pagination pt-6 text-center border-t border-dotted">
      <span class="py-2"><a @click="calculateCurrentPage(currentPage - 1)"
          :class="currentPage == 1 ? 'disabled' : ''">{{ $t('pagination.prev') }}</a></span>
      <span class="py-2"><a @click="currentPage = i" v-for="i in calculatePages()" :key="i" class="p-2"
          :class="i == currentPage ? 'active' : ''">{{ $t(i) }}</a></span>
      <span class="py-2"><a @click="calculateCurrentPage(currentPage + 1)"
          :class="currentPage == calculatePages() ? 'disabled' : ''">{{ $t('pagination.next') }}</a></span>
    </div>
  </div>
</template>

<script>
  import Vue2Filters from 'vue2-filters';
  import MemberPreview from '~/components/Members/MemberPreview';
  import axios from 'axios';
  export default {
    mixins: [Vue2Filters.mixin],
    data() {
      return {
        sortValue: 'memberSinceDESC',
        numberPerPage: 10,
        currentPage: 1
      }
    },
    components: {
      MemberPreview
    },
    created() {
      this.$store.dispatch('fetchMembers');
      this.$store.dispatch('countMembers');
    },
    computed: {
      loadedMembers() {
        return this.$store.getters.loadedMembers;
      },
      membersCount() {
        return this.$store.getters.membersCount;
      },
      sortBy() {
        switch (this.sortValue) {
          case 'memberSinceACS':
            return ['memberSince', 1]
            break;
          case 'memberSinceDESC':
            return ['memberSince', -1]
            break;
          case 'fullNameASC':
            return ['fullName', 1]
            break;
          case 'fullNameDESC':
            return ['memberSince', -1]
            break;
          default:
            return ['memberSince', -1]
            break;
        }
      },
      displayedMembers() {
        const sortedArray = this.orderBy(this.loadedMembers, this.sortBy[0], this.sortBy[1])
        const tempArray = this.chunkArray(sortedArray, this.numberPerPage)
        return tempArray[this.currentPage - 1]
      }
    },
    methods: {
      calculatePages() {
        return Math.ceil(this.loadedMembers.length / this.numberPerPage)
      },
      chunkArray(myArray, chunkSize) {
        var index = 0;
        var arrayLength = myArray.length;
        var tempArray = [];

        for (index = 0; index < arrayLength; index += chunkSize) {
          var myChunk = myArray.slice(index, index + chunkSize);
          tempArray.push(myChunk);
        }
        return tempArray;
      },
      limitNumberWithinRange(num, min, max) {
        return Math.min(Math.max(parseInt(num), min), max)
      },
      calculateCurrentPage(num) {
        this.currentPage = this.limitNumberWithinRange(num, 1, this.calculatePages())
        return this.currentPage
      }
    }
  }

</script>

<style scoped>
  a.disabled {
    @apply cursor-default text-josa-warm-grey;
  }

  a.disabled:hover {
    @apply text-josa-warm-grey
  }

</style>
