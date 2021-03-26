<template>
    <el-row class="top">
        <geo />
        <m-nav />
    </el-row>
</template>

<script>
import geo from "./geo.vue";
import MNav from "./nav.vue";
export default {
    components:{
        geo,
        MNav,
    }
}
</script>