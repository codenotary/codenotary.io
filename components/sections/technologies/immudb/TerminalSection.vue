<template>
    <page-section id="immudb-code-examples-section">
        <i-container>
            <i-row>
                <i-column>
                    <VueSlickCarousel v-bind="settings">
                        <div>
                            <i-row middle class="_padding-1">
                                <i-column xs="12" sm="12" md="6">
                                    <h4 class="title _font-weight-bold _text-primary">Very high throughput, immutable database with cryptographic verification</h4>
                                    <p class="lead">immudb is an indispensable asset when it comes to tamper-proof data:</p>
                                    <ul>
                                        <li>Store every update to sensitive database fields (credit card or bank account data) of an existing application database</li>
                                        <li>Store CI/CD recipes to build and deployment pipelines</li>
                                        <li>Store public certificates</li>
                                        <li>Store tamper-proof log streams (i. e. audit logs)</li>
                                    </ul>
                                </i-column>
                                <i-column xs="12" sm="12" md="6">
                                    <Terminal title="immudb" language="go">
                                        // Store any key, value auditproof and tamperproof
                                        key2, value2 := []byte("myClient"), []byte("Visa 6679499384784022 11/23")
                                        verifiedIndex, err := client.SafeSet(ctx, key2, value2)

                                        if err != nil {
                                        exit(err)
                                        }

                                        fmt.Println("   SafeSet - add and verify entry:")
                                        printItem(key2, value2, verifiedIndex)
                                    </Terminal>
                                </i-column>
                            </i-row>
                        </div>
                        <div>
                            <i-row middle class="_padding-1">
                                <i-column xs="12" sm="12" md="6">
                                    <h4 class="title _font-weight-bold _text-primary">Intuitive setup</h4>
                                    <p class="lead">immudb is built with simplicity in mind:</p>
                                    <ul>
                                        <li>Use the prebuilt binaries or Docker container images for a fast start</li>
                                        <li>Install, manage and run immudb and immugw as services (use 'immuadmin service')</li>
                                        <li>Simple make command integration if you want to build the applications yourself</li>
                                        <li>RESTful interfaces and easy to use clients</li>
                                        <li>Combine with any existing application</li>
                                    </ul>
                                </i-column>
                                <i-column xs="12" sm="12" md="6">
                                    <Terminal title="immudb" language="bash">
                                        # install immudb service
                                        ./immuadmin service immudb install

                                        # check current immudb service status
                                        ./immuadmin service immudb status

                                        # install immugw service
                                        ./immuadmin service immugw install

                                        # check immugw service
                                        ./immuadmin service immugw status
                                    </Terminal>
                                </i-column>
                            </i-row>
                        </div>
                        <div>
                            <i-row middle class="_padding-1">
                                <i-column xs="12" sm="12" md="6">
                                    <h4 class="title _font-weight-bold _text-primary">Consistency check built-in</h4>
                                    <p class="lead">immudb architecture has built-in verification and audit functionality:</p>
                                    <ul>
                                        <li>immudb server is continuously checking disk/memory consistency</li>
                                        <li>immugw is continuously checking the data consistency and integrity</li>
                                        <li>immuclient has built-in data consistency and integrity checks</li>
                                        <li>API's provide data ownership proof, verification and integrity functions</li>
                                    </ul>
                                </i-column>
                                <i-column xs="12" sm="12" md="6">
                                    <Terminal title="immudb" language="go">
                                        // built-in verification for every entry
                                        verifiedItem, err := client.SafeGet(ctx, key2)

                                        if err != nil {
                                            exit(err)
                                        }

                                        fmt.Println("   SafeGet - fetch and verify entry:")
                                        printItem(nil, nil, verifiedItem)
                                    </Terminal>
                                </i-column>
                            </i-row>
                        </div> -->
                    </VueSlickCarousel>
                </i-column>
            </i-row>
        </i-container>
    </page-section>
</template>

<script>
import Terminal from '~/components/global/Terminal';

export default {
    name: 'TerminalSection',
    components: {
        Terminal
    },
    data: () => ({
        settings: {
            slidesToShow: 1,
            arrows: true,
            dots: true,
            focusOnSelect: true,
            lazyLoad: 'progressive'
        }
    }),
    beforeDestroy () {
        this.settings = null;
    }
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

// #codenotary-how-it-works-section {
//     background-color: $color-gray-10;
//     overflow: hidden;

//     .card {
//         margin-bottom: 2rem;
//         background: transparent;

//         img {
//             height: 96px;
//             object-fit: contain;
//         }

//         .body {
//             border: none;
//             text-align: left;
//         }
//     }
// }

#immudb-code-examples-section {
    svg {
        width: 3rem;
        height: 3rem;
        color: $color-primary;
    }

    img {
        width: 4rem;
    }

    h2 {
        margin-top: 1rem;
    }

    .row {
        align-items: center;
        margin-bottom: 5rem;

        &:last-child {
            margin-bottom: 0;
        }
    }

    @media screen and (max-width: 979px) {
        text-align: center;

        .inverse {
            flex-direction: column-reverse;
        }

        p, ul {
            text-align: left;
        }

        .terminal-wrapper {
            margin-bottom: 1rem;
        }
    }
}
</style>
