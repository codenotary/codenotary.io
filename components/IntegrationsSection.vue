<template>
    <PageSection class="integration-section">
        <i-container>
            <i-row>
                <i-column>
                    <h1>Integrations</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua</p>
                </i-column>
            </i-row>
            <i-row>
                <i-column>
                   <ul class="list -inline button-list">
                       <li class="_margin-bottom-1">
                           <i-button>
                               All
                           </i-button>
                       </li><!--
                    --><li class="_margin-bottom-1"
                           :key="category.id" v-for="category in categories">
                           <i-button>
                               {{category.title}}
                           </i-button>
                       </li>
                   </ul>
                </i-column>
            </i-row>
        </i-container>
    </PageSection>
</template>

<script>
import PageSection from './PageSection';
export default {
    name: 'IntegrationsSection',
    components: {
        PageSection
    },
    data () {
        return {
            categories: [
                {
                    id: 'applicationServer',
                    title: 'Application Server'
                },
                {
                    id: 'cloudProvider',
                    title: 'Cloud Provider'
                },
                {
                    id: 'container',
                    title: 'Container'
                },
                {
                    id: 'database',
                    title: 'Database'
                },
                {
                    id: 'hyperconverged',
                    title: 'Hyperconverged'
                },
                {
                    id: 'infrastructure',
                    title: 'Infrastructure'
                },
                {
                    id: 'operatingSystem',
                    title: 'Operating System'
                },
                {
                    id: 'storage',
                    title: 'Storage'
                },
                {
                    id: 'virtualDesktops',
                    title: 'Virtual Desktops'
                }

            ]
        };
    }
}
</script>

<style lang="scss">
.integration-section {
    display: block;
    text-align: center;
}
.button-list {
    li {
        margin-right: 0.35rem;
    }
}
</style>
