<template>
    <i-navbar id="tos-sub-navbar" class="sub-navbar _margin-bottom-3 _padding-bottom-0" fluid :collapse="false">
        <i-navbar-items class="_justify-content-center">
            <i-nav>
                <i-nav-item :to="{ name: 'terms-of-service-slug', params: { slug: 'services-agreement' } }">
                    Services Agreement
                </i-nav-item>
                <i-nav-item :to="{ name: 'terms-of-service-slug', params: { slug: 'subscription-agreement' } }">
                    Codenotary Ledger Compliance® Subscription Agreement
                </i-nav-item>
                <i-nav-item :to="{ name: 'terms-of-service-slug', params: { slug: 'metrics-and-logs-perpetual-agreement' } }">
                    Metrics and Logs Perpetual Agreement
                </i-nav-item>
            </i-nav>
        </i-navbar-items>
    </i-navbar>
</template>

<script>
export default {
    name: 'TosSubNavbar'
}
</script>

<style lang="scss">
    #tos-sub-navbar {
        &.navbar.sub-navbar {
            .nav {
                .item {
                    border-width: 4px;

                    &.-active {
                        border-bottom: 4px solid #244484;
                    }
                }
            }
        }
    }
</style>

