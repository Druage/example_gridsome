<template>
    <div>
        <HeaderBar/>

        <BlogPage/>

        <PageFooter/>
    </div>
</template>

<script>
    import HeaderBar from "../../components/HeaderBar";
    import PageFooter from "../../components/PageFooter";
    import BlogPage from "../../components/BlogPage";

    export default {
        name: "ArticleOne",
        components: {HeaderBar, PageFooter, BlogPage},
    }
</script>

<style scoped>

</style>
