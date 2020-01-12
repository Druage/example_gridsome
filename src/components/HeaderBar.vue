<template>
    <div class="HeaderBar">

        <div class="header-container">
            <img src="@/assets/img/blog_logo.svg"/>
            <div class="social-links-container">
                <a>H</a>
                <a>H</a>
                <a>H</a>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "HeaderBar"
    }
</script>

<style scoped lang="scss">
    .HeaderBar {
        width: 100%;
        background: white;
        height: 100px;

        .header-container {
            width: 100%;
            height: 100%;
            max-width: $max-deskop-width;
            margin: 0 auto;
            box-sizing: border-box;
            padding: 0 64px;

            display: flex;
            align-items: center;
            justify-content: flex-start;

            border-bottom: 1px solid rgba(#000, .1);

            .social-links-container {
                display: flex;
                align-items: center;
                justify-content: center;

                margin-left: auto;

                a {
                    height: 32px;
                    width: 32px;
                    border-radius: 50%;
                    background-color: #E3E3E3;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    margin-right: 12px;

                    &:last-of-type {
                        margin-right: 0;
                    }
                }
            }
        }
    }
</style>
