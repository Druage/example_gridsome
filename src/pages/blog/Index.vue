<template>
    <Layout class="Index">

        <div class="blog-body">

            <div class="BlogEntryPreview" v-for="{ node } in $page.allBlogPost.edges" :key="node.id">

                <router-link :to="node.path">
                    <div class="link-wrapper">
                        <img v-if="node.image.length > 0" :src="node.image" :alt="node.title" :title="node.title"/>
                        <font-awesome v-else class="no-img" :icon="['far', 'image']"/>

                        <div class="preview-text-container">
                            <div class="preview-heading">
                                {{node.title}}
                            </div>
                            <div class="preview-sub-heading"> {{node.description}}</div>

                        </div>
                    </div>

                </router-link>


            </div>

        </div>
    </Layout>
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

<style scoped lang="scss">

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

        width: 100%;

        .link-wrapper {
            width: 100%;
            height: 320px;

            display: flex;
            align-items: center;
            justify-content: center;
            margin: 64px 0;
            padding: 24px;
            color: $primary-font-color;
            text-decoration: none;
            box-sizing: border-box;

            &:hover {
                background-color: rgba(black, .05);
            }

            img {
                height: 100%;
                width: 480px;
                object-fit: cover;
            }

            .no-img {
                height: 100%;
                width: 480px;
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


    }
</style>
