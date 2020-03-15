<template>
    <div>
        <h2 class="title relative py-6 px-0">Our Work</h2>
        <div>
            <program :program="program" />
        </div>
    </div>
</template>

<script>
import Program from './program';
export default {
    name: 'OurWork',
    components: {
        'program': Program,
    },
    data () {
        return {
            program: {
                iconUrl:'https://jordanopensource.org/wp-content/uploads/2019/02/program-tech-community.svg',
                title:'Open Jordan', 
                subtitle:'JOSA is building a more open, collaborative Jordan.',
                description:'From artists to creators, from makers to coders, JOSA is promoting openness, collaboration, sharing and crowdsourcing.',
            }
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