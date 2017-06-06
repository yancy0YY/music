<template>
    <div>{{msg}}</div>
</template>


<script>
    import Rq_API from '../api/request';
    import URLS from '../constants/urls';


    export default {
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                requestData:{
                    s:'七里香',
                    limit:10,
                    type:1,
                    offset:0
                }
            }
        },
        methods:{
            search(){
                Rq_API.post(URLS.SEARCH_DETAILS,this.requestData);
            }
        },
        mounted(){
            this.$nextTick(function(){
                this.search();
            });
        }
    }
</script>
