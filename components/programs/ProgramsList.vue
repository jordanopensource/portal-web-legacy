<template>
    <div>
            <Program 
            v-for="program in programs" 
            :key="program.id"
            :id="program.id"
            :thumbnail="program.thumbnail"
            :title="program.title"
            :subtitle="program.subtitle"
            :description="program.description"
            />
    </div>
</template>

<script>
import Program from '@/components/programs/Program';
export default {
    name: 'ProgramsList',
    components: {
        'Program': Program,
        },
    props: {
        programs: {
            type: Array,
            required: true
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