<template>
    <div class="layout">
        <HeaderBar/>
        <slot/>
        <PageFooter/>
    </div>
</template>

<static-query>
    query {
      metadata {
        siteName
      }
    }
</static-query>

<style lang="scss">

    body {
      color: $primary-font-color;
      font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      margin: 0;
      padding: 0;
      line-height: 1.5;
    }

    a {
      color: $primary-font-color;
      margin: 0;
      padding: 0;
      text-decoration: none;
    }

    .layout {
        width: 100%;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        height: 80px;
    }

    .nav__link {
        margin-left: 20px;
    }
</style>
<script>
    import HeaderBar from "../components/HeaderBar";
    import PageFooter from "../components/PageFooter";

    export default {
        components: {PageFooter, HeaderBar}
    }
</script>
