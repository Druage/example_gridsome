<template>
    <div class="Index">
        <HeaderBar/>

        <div class="blog-body">

            <g-link class="BlogEntryPreview" to="/blog/article-one">
                <img src="https://searchengineland.com/figz/wp-content/seloads/2015/12/google-amp-fast-speed-travel-ss-1920-800x450.jpg"/>
                <div class="preview-text-container">

                    <div class="preview-heading">Article One</div>
                    <div class="preview-sub-heading">Sub heading saying something blah</div>

                    <p>
                        asfaf asfaf asfaf asfaf asfaf asfaf asfaf
                        asfaf asfaf asfaf
                        asfaf asfaf asfaf
                        asfaf asfaf asfaf asfaf asfaf asfaf asfaf asfaf asfaf
                    </p>

                </div>
            </g-link>
            <g-link class="BlogEntryPreview" to="/blog/article-one">
                <img src="https://searchengineland.com/figz/wp-content/seloads/2015/12/google-amp-fast-speed-travel-ss-1920-800x450.jpg"/>
                <div class="preview-text-container">

                    <div class="preview-heading">Article One</div>
                    <div class="preview-sub-heading">Sub heading saying something blah</div>

                    <p>
                        asfaf asfaf asfaf asfaf asfaf asfaf asfaf
                        asfaf asfaf asfaf
                        asfaf asfaf asfaf
                        asfaf asfaf asfaf asfaf asfaf asfaf asfaf asfaf asfaf
                    </p>

                </div>
            </g-link>
            <g-link class="BlogEntryPreview" to="/blog/article-one">
                <img src="https://searchengineland.com/figz/wp-content/seloads/2015/12/google-amp-fast-speed-travel-ss-1920-800x450.jpg"/>
                <div class="preview-text-container">

                    <div class="preview-heading">Article One</div>
                    <div class="preview-sub-heading">Sub heading saying something blah</div>

                    <p>
                        asfaf asfaf asfaf asfaf asfaf asfaf asfaf
                        asfaf asfaf asfaf
                        asfaf asfaf asfaf
                        asfaf asfaf asfaf asfaf asfaf asfaf asfaf asfaf asfaf
                    </p>

                </div>
            </g-link>
            <g-link class="BlogEntryPreview" to="/blog/article-one">
                <img src="https://searchengineland.com/figz/wp-content/seloads/2015/12/google-amp-fast-speed-travel-ss-1920-800x450.jpg"/>
                <div class="preview-text-container">

                    <div class="preview-heading">Article One</div>
                    <div class="preview-sub-heading">Sub heading saying something blah</div>

                    <p>
                        asfaf asfaf asfaf asfaf asfaf asfaf asfaf
                        asfaf asfaf asfaf
                        asfaf asfaf asfaf
                        asfaf asfaf asfaf asfaf asfaf asfaf asfaf asfaf asfaf
                    </p>

                </div>
            </g-link>

        </div>

        <PageFooter/>
    </div>
</template>

<script>
    import HeaderBar from "../../components/HeaderBar";
    import PageFooter from "../../components/PageFooter";
    export default {
        name: "Index",
        components: {PageFooter, HeaderBar}
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
        height: 300px;
        margin: 64px 0;
        padding: 24px;
        cursor: pointer;
        color: $primary-font-color;
        text-decoration: none;

        &:hover {
            background-color: rgba(black, .05);
        }

        img {
            height: 100%;
            width: auto;
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
