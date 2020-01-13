<template>

    <div>
        <ul>
            <li v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
                <g-link :to="node.path">
                    <h2 v-html="node.title"/>
                </g-link>
                <span v-html="node.date"/>
                <div v-html="node.description"/>
                <div>{{node.tag}}</div>
            </li>
        </ul>
    </div>

</template>

<script>

    export default {
        metaInfo: {
            title: 'Website'
        }
    }
</script>

<page-query>
    query Home ($page: Int) {
        allBlogPost (page: $page) {
            edges {
                node {
                    id
                    title
                    date (format: "D MMMM, YYYY")
                    description
                    tags
                    path
                }
            }
        }
    }
</page-query>

<style lang="scss">

</style>
