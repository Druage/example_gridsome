<template>
    <div class="HeaderBar">

        <div class="header-container">

            <a href="/blog">
                <img src="@/assets/img/blog_logo.svg"/>
            </a>

            <div class="social-links-container">
                <a href="https://www.facebook.com/GenerationalExperts/" target="_blank">
                    <font-awesome :icon="['fab', 'instagram']"/>
                </a>
                <a href="https://www.instagram.com/generational.improvement/" target="_blank">
                    <font-awesome :icon="['fab', 'facebook']"/>
                </a>
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
            border-bottom: 1px solid rgba(#000, .1);

            display: flex;
            align-items: center;
            justify-content: flex-start;

            .social-links-container {
                display: flex;
                align-items: center;
                justify-content: center;

                margin-left: auto;

                @media only screen and (max-width: $mobile-width) {
                    display: none;
                }

                a {
                    height: 36px;
                    width: 36px;
                    border-radius: 50%;
                    background-color: #E3E3E3;

                    font-size: 1.5rem;

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
