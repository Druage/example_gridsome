<template>
    <div class="error-404">

        <HeaderBar/>

        <div class="page-body">
            <div class="heading">Page Not Found - 404</div>
            <div class="sub-heading">
                We cannot find the page you are looking for, try visiting our website at
                <g-link to="/"> www.ghi.design</g-link>
                or experience our projects at
                <g-link to="/blog"> www.ghi.design/blog</g-link>.
            </div>
        </div>


        <PageFooter/>
    </div>
</template>

<script>
    import HeaderBar from "../components/HeaderBar";
    import PageFooter from "../components/PageFooter";

    export default {
        name: "404",
        components: {PageFooter, HeaderBar},
        metaInfo: {
            title: 'Page Not Found'
        }
    }
</script>

<style scoped lang="scss">
    .error-404 {
        color: $primary-font-color;

        .page-body {
            margin: 0 auto;
            width: 800px;
            padding: 64px * 4 64px;

            .heading {
                width: 100%;
                text-align: center;
                font-size: 3rem;
                font-weight: bold;
            }

            .sub-heading {
                font-size: 1.5rem;

                a {
                    text-decoration: underline;
                    color: #0066FF;
                }
            }
        }


    }
</style>
