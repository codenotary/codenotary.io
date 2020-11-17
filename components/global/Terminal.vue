<template>
    <no-ssr>
        <div class="terminal-wrapper">
            <div class="terminal">
                <div class="bar">
                    <div class="buttons">
                        <span class="circle red" />
                        <span class="circle yellow" />
                        <span class="circle green" />
                    </div>
                    <div class="title">{{ title }}</div>
                </div>
                <div class="body">
                    <prism :lang="language">
                        <slot />
                    </prism>
                </div>
            </div>
        </div>
    </no-ssr>
</template>

<script>
import NoSSR from 'vue-no-ssr';

export default {
    name: 'Terminal',
    components: {
        'no-ssr': NoSSR
    },
    props: {
        title: { type: String, default: 'immudb' },
        language: { type: String, default: 'go' }
    }
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/config";

.terminal-wrapper {
    display: block;
    box-sizing: border-box;
    border-radius: 4px !important;
    position: relative;
    overflow: hidden;

    .bar {
        background: #E8E6E8;
        color: black;
        padding: 5px;
        border-radius: 5px 5px 0 0;

        .buttons {
            position: absolute;
            top: 7px;
            left: 5px;

            .circle {
                width: 12px;
                height: 12px;
                display: inline-block;
                border-radius: 15px;
                margin-left: 2px;
                border-width: 1px;
                border-style: solid;

                    &.red {
                        background: #EC6A5F;
                        border-color: #D04E42;
                    }

                    &.green {
                        background: #64CC57;
                        border-color: #4EA73B;
                    }

                    &.yellow {
                        background: #F5C04F;
                        border-color: #D6A13D;
                    }
            }
        }

        .title {
            text-align: center;
        }

        .clear {
            clear: both;
        }
    }

    .body {
        .prism {
            pre[class*="language-"] {
                display: block;
                margin: 0;
                padding: 1rem;
                background: #282a36;
                box-sizing: border-box;
                overflow: auto;
                min-height: 240px;
                border-radius: 0;
            }

            .toolbar {
                .toolbar-item {
                    margin-left: $spacer-1-2;
                }
            }
        }
    }

}
</style>
