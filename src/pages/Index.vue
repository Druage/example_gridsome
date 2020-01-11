<template>

    <div>
        <BlogPage/>

        <PageFooter/>
    </div>

</template>

<script>
    import BlogPage from "../components/BlogPage";
    import PageFooter from "../components/PageFooter";

    export default {
        components: {PageFooter, BlogPage},
        metaInfo: {
            title: 'Website'
        }
    }
</script>

<style lang="scss">

    body {
        color: #333333;
    }

    .home-links a {
        margin-right: 1rem;
    }
</style>
