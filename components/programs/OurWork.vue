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
            programs: [
            {
                id: '1',
                thumbnail:'https://jordanopensource.org/wp-content/uploads/2019/02/program-digital-rights.svg',
                title:'Digital Rights ', 
                subtitle:'JOSA is defending Jordanians’ rights online and promoting an Open Internet in Jordan.',
                description:'JOSA\'s hacktivists, civic engaged techies and policy wonks are working on advocacy, policy recommendations, and promoting the adoption of security and privacy-enhancing technologies.'
            },
             {
                id: '2',
                thumbnail:'https://jordanopensource.org/wp-content/uploads/2019/02/program-open-jordan.svg',
                title:'Open Jordan', 
                subtitle:'JOSA is building a more open, collaborative Jordan.',
                description:'From artists to creators, from makers to coders, JOSA is promoting openness, collaboration, sharing and crowdsourcing.'
            },
            {
                id: '3',
                thumbnail:'https://jordanopensource.org/wp-content/uploads/2019/02/program-tech-community.svg',
                title:'Tech Community', 
                subtitle:'JOSA is pushing the technical skillset for the tech community in Jordan to a global caliber.',
                description:'Several sub-communities that adopts open technologies for web/mobile development, data science and DevOps.'
            },
            {
                id: '4',
                thumbnail:'https://jordanopensource.org/wp-content/uploads/2019/02/program-ict-university-students.svg',
                title:'ICT University Students ', 
                subtitle:'JOSA is ensuring readiness of ICT graduates for the local and global markets.',
                description:'JOSA organizes technical trainings and by promoting Open Source technologies to help IT and Engineering students in Jordanian universities.'
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