<template>

    <div>

        <HeaderBar/>

        <BlogPage/>

        <PageFooter/>
    </div>

</template>

<script>
    import BlogPage from "../components/BlogPage";
    import PageFooter from "../components/PageFooter";
    import HeaderBar from "../components/HeaderBar";

    export default {
        components: {HeaderBar, PageFooter, BlogPage},
        metaInfo: {
            title: 'Website'
        }
    }
</script>

<style lang="scss">

    body {
        color: $primary-font-color;
    }

    a {
        color: $primary-font-color;
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    .home-links a {
        margin-right: 1rem;
    }
</style>
