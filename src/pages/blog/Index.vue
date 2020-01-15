<template>
    <div class="Index">
        <HeaderBar/>

        <div class="blog-body">

            <div class="BlogEntryPreview" v-for="{ node } in $page.allBlogPost.edges" :key="node.id">

                <img :src="node.image" :alt="node.title"/>
                <div class="preview-text-container">
                    <div class="preview-heading">
                        <router-link :to="node.path">{{node.title}}</router-link>
                    </div>
                    <div class="preview-sub-heading"> {{node.description}}</div>

                </div>
            </div>

        </div>

        <PageFooter/>
    </div>
</template>

<script>
    import HeaderBar from "../../components/HeaderBar";
    import PageFooter from "../../components/PageFooter";
    export default {
        name: "Index",
        components: {PageFooter, HeaderBar},
        metaInfo: {
            title: 'Blog'
        }
    }
</script>

<page-query>
    query Home ($page: Int) {
            allBlogPost (page: $page, sortBy: "date", order: DESC) {
                edges {
                    node {
                        id
                        title
                        date (format: "D MMMM, YYYY")
                        description
                        path
                        image
                    }
                }
            }
    }
</page-query>

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

    .Index {
        .blog-body {
            width: 100%;
            max-width: $max-deskop-width;
            min-height: calc(100vh - 200px);
            margin: 0 auto;

            box-sizing: border-box;
            padding: 64px;
        }
    }

    .BlogEntryPreview {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 320px;
        margin: 64px 0;
        padding: 24px;
        color: $primary-font-color;
        text-decoration: none;

        &:hover {
            background-color: rgba(black, .05);
        }

        img {
            height: 100%;
            width: 480px;
            object-fit: cover;
        }

        .preview-text-container {
            margin-left: 36px;
            height: 100%;
            width: 350px;

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;

            .preview-heading {
                font-size: 2rem;
                font-weight: bold;
                line-height: 2rem;
            }

            .preview-sub-heading {
                font-size: 1.2rem;
                opacity: .54;
            }
        }
    }
</style>
