<template>
    <i-header class="_text-center" id="home-header">
        <i-container>
            <i-row class="_align-items-center">
                <i-column class="_text-left" md="6">
                    <h1>The one-stop-shop for monitoring key metrics</h1>
                    <p>Real-time VM performance analysis, day by day statistics,
                        VMware, Vsphere, VMware vSAN, VMware VCSA overview in one place</p>
                    <i-button variant="primary" class="_margin-right-1">Download now</i-button>
                    <i-button variant="dark">Watch demo</i-button>
                </i-column>
                <i-column md="6">
                    <img class="image -responsive" src="/images/demo-screenshot.png" alt="demo"/>
                </i-column>
            </i-row>
        </i-container>
    </i-header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style lang="scss">

#home-header {
    background-color: #c3cfd9;
    h1{
        margin-top: 0;
    }
}
</style>
