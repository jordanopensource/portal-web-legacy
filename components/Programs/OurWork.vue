<template>
    <div>
        <h2 class="title relative py-6 px-0">{{ $t('pages.ourWork') }}</h2>
        <div>
            <programList :programs="programs" />
        </div>
    </div>
</template>

<script>
import programList from '@/components/Programs/ProgramsList';
export default {
    name: 'OurWork',
    components: {
        programList,
    },
    data () {
        return {
            programs: [
            {
                id: '1',
                thumbnail:'https://jordanopensource.org/wp-content/uploads/2019/02/program-digital-rights.svg',
                title: this.$t('programs.digitalrights.title'),
                subtitle: this.$t('programs.digitalrights.subtitle'),
                description: this.$t('programs.digitalrights.desc')
            },
             {
                id: '2',
                thumbnail:'https://jordanopensource.org/wp-content/uploads/2019/02/program-open-jordan.svg',
                title: this.$t('programs.openJordan.title'),
                subtitle: this.$t('programs.openJordan.subtitle'),
                description: this.$t('programs.openJordan.desc')
            },
            {
                id: '3',
                thumbnail:'https://jordanopensource.org/wp-content/uploads/2019/02/program-tech-community.svg',
                title: this.$t('programs.techCommunity.title'),
                subtitle: this.$t('programs.techCommunity.subtitle'),
                description: this.$t('programs.techCommunity.desc')
            },
            {
                id: '4',
                thumbnail:'https://jordanopensource.org/wp-content/uploads/2019/02/program-ict-university-students.svg',
                title: this.$t('programs.uniStudents.title'),
                subtitle: this.$t('programs.uniStudents.subtitle'),
                description: this.$t('programs.uniStudents.desc')
            },
            ]
        }
    },

}
</script>

<style scoped>
    .title::before {
        content: '';
        position: absolute;
        width: 20%;
        height: 10px;
        left: 0;
        top: 0;
        border-top: 10px solid #3897c0;
}
</style>
