<template>
    <div>
        <h2 class="title relative py-6 px-0">Our Work</h2>
        <div>
            <programList :programs="programs" />
        </div>
    </div>
</template>

<script>
import ProgramList from '@/components/programs/ProgramsList';
export default {
    name: 'OurWork',
    components: {
        'programList': ProgramList,
    },
    data () {
        return {
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