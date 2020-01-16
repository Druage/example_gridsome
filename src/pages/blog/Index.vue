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
            padding: 100px 64px 64px 64px;

            @media only screen and (max-width: $mobile-width) {
                padding: 64px 32px 32px 32px;
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
                margin-bottom: 32px;
                padding: 24px;
                color: $primary-font-color;
                text-decoration: none;
                box-sizing: border-box;

                @media only screen and (max-width: $mobile-width) {
                    flex-direction: column;
                    margin-bottom: 64px;
                    padding-left: 0;
                    padding-right: 0;
                }

                &:hover {
                    background-color: rgba(black, .05);
                }

                img {
                    height: 100%;
                    width: 480px;
                    object-fit: cover;

                    @media only screen and (max-width: $mobile-width) {
                        width: 100%;
                    }
                }

                .no-img {
                    height: 100%;
                    width: 480px;

                    @media only screen and (max-width: $mobile-width) {
                        width: 100%;
                    }
                }

                .preview-text-container {
                    margin-left: 36px;
                    height: 100%;
                    width: 350px;

                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;

                    @media only screen and (max-width: $mobile-width) {
                        width: 100%;
                        justify-content: center;
                        margin-left: 0;
                        margin-top: 12px;
                    }

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

    }
</style>
