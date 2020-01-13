<template>

    <footer>

        <div class="website-name">
            <a href="/blog">GHI</a>
        </div>
        <a class="item">About</a>
        <a class="item">Portfolio</a>
        <a class="item">Services</a>
        <a class="item">Estimate</a>
        <a class="item last">Contact Us</a>

    </footer>

</template>

<script>
    export default {
        name: "PageFooter"
    }
</script>

<style scoped lang="scss">
    footer {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        @media only screen and (max-width: $mobile-width) {
            flex-direction: column;
        }

        box-sizing: border-box;
        padding: 32px 64px;

        width: 100%;
        max-width: $max-deskop-width;
        margin: 0 auto;
        border-top: 1px solid rgba(black, .1);

        .website-name {
            width: 60%;
            font-weight: bold;
            font-size: 1.5rem;

            @media only screen and (max-width : 1100px)  {
                width: 30%;
            }

            @media only screen and (max-width : $mobile-width)  {
                width: auto;
            }

            a {
                border-bottom: 3px solid #CFB885;
            }
        }

        .item {
            flex: 1;

            @media only screen and (max-width : $mobile-width)  {
                margin-top: 24px;
            }

            &.last {
                margin-left: auto;

                @media only screen and (max-width : $mobile-width)  {
                    margin-left: 0;
                }
            }
        }
    }
</style>
