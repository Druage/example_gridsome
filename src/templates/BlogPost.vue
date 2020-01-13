<template>

    <div>
        <HeaderBar/>

        <div class="blog-page">

            <div class="blog-heading">
                <div class="main-heading">{{ $page.blogPost.title }}</div>
                <div class="sub-heading">{{ $page.blogPost.description }}</div>
            </div>


            <img :src="$page.blogPost.image"/>

            <div class="blog-content" v-html="$page.blogPost.content"></div>

        </div>

        <PageFooter/>

    </div>

</template>

<script>

    import PageFooter from "../components/PageFooter";
    import HeaderBar from "../components/HeaderBar";

    export default {
        name: "BlogPost",
        components: {HeaderBar, PageFooter},
        metaInfo() {
            return {
                title: this.$page.blogPost.title
            }
        }
    }
</script>


<page-query>
    query BlogPost ($path: String!) {
    blogPost (path: $path) {
    title
    description
    date (format: "D MMMM, YYYY")
    content
    image
    }
    }
</page-query>

<style lang="scss">

    .blog-page {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 64px;
        max-width: 1200px;
        margin: 0 auto;

        img {
            width: 100%;
            height: unset;
            margin: 24px auto;
        }

        .blog-heading {
            padding-bottom: 24px;
            max-width: 760px;
            margin: 0 auto;

            .main-heading {
                font-weight: bold;
                font-size: 3rem;
            }

            .sub-heading {
                font-size: 1.5rem;
                opacity: .54;
            }
        }

        .blog-content {
            line-height: 2rem;
            max-width: 760px;
            margin: 0 auto;

            p {
                line-height: 2rem;
            }

        }
    }

</style>
