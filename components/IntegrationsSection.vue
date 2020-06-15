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
                           <i-button @click="filterIntegrations()">
                               All
                           </i-button>
                       </li><!--
                    --><li class="_margin-bottom-1"
                           :key="category.id" v-for="category in categories">
                           <i-button @click="filterIntegrations(category.id)">
                               {{category.title}}
                           </i-button>
                       </li>
                   </ul>
                </i-column>
            </i-row>
            <i-row>
                <i-column md="3" :key="integration.title" v-for="integration in filteredIntegrations">
                    <i-card class="integration-item">
                       <img :src="integration.image" :alt="integration.title"/>
                    </i-card>
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
            activeCategory: '',
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

            ],
            integrations: [
                {
                    title: 'Dell EMC PowerMax',
                    image: '/images/integrations/powermax.png',
                    categories: ['storage']
                },
                {
                    title: 'PostgreSQL database',
                    image: '/images/integrations/postgresql.png',
                    categories: ['database']
                },
                {
                    title: 'Kubernetes',
                    image: '/images/integrations/kubernetes.png',
                    categories: ['container', 'infrastructure']
                },
                {
                    title: 'Cisco Nexus',
                    image: '/images/integrations/cisco.png',
                    categories: ['infrastructure']
                },
                {
                    title: 'Brocade',
                    image: '/images/integrations/brocade.png',
                    categories: ['infrastructure']
                },
                {
                    title: 'VMware Photon OS',
                    image: '/images/integrations/photon.png',
                    categories: ['container', 'operatingSystem']
                },
                {
                    title: 'Cisco HyperFlex',
                    image: '/images/integrations/cisco.png',
                    categories: ['hyperconverged', 'infrastructure', 'storage']
                },
                {
                    title: 'Oracle Database',
                    image: '/images/integrations/oracle.png',
                    categories: ['database']
                },
                {
                    title: 'NetApp SolidFire',
                    image: '/images/integrations/solidfire.png',
                    categories: ['infrastructure', 'storage']
                },
                {
                    title: 'VMware Horizon View',
                    image: '/images/integrations/vmwarehorizon.png',
                    categories: ['infrastructure', 'virtualDesktops']
                },
                {
                    title: 'Cisco UCS Management',
                    image: '/images/integrations/ciscoucs.png',
                    categories: ['infrastructure']
                },
                {
                    title: 'Veeam Enterprise Backup Manager',
                    image: '/images/integrations/veeam.png',
                    categories: ['applicationServer', 'infrastructure']
                },
                {
                    title: 'Dell EMC Isilon',
                    image: '/images/integrations/isilon.png',
                    categories: ['storage']
                },
                {
                    title: 'Amazon web services AWS',
                    image: '/images/integrations/aws.png',
                    categories: ['cloudProvider', 'infrastructure']
                },
                {
                    title: 'IBM AIX',
                    image: '/images/integrations/ibmaix.png',
                    categories: ['operatingSystem']
                },
                {
                    title: 'Apache HTTP Server',
                    image: '/images/integrations/apache.png',
                    categories: ['applicationServer']
                },
                {
                    title: 'MongoDB',
                    image: '/images/integrations/mongodb.png',
                    categories: ['database']
                },
                {
                    title: 'Azure SQL',
                    image: '/images/integrations/sqlazure.png',
                    categories: ['cloudProvider', 'database']
                },
                {
                    title: 'Docker Container',
                    image: '/images/integrations/docker.png',
                    categories: ['container', 'infrastructure']
                },
                {
                    title: 'Microsoft SQL Server',
                    image: '/images/integrations/sqlserver.png',
                    categories: ['applicationServer', 'database']
                },
                {
                    title: 'RedHat Enterprise Linux',
                    image: '/images/integrations/redhat.png',
                    categories: ['operatingSystem']
                },
                {
                    title: 'Ubuntu Linux',
                    image: '/images/integrations/ubuntu.png',
                    categories: ['operatingSystem']
                },
                {
                    title: 'Debian Linux',
                    image: '/images/integrations/debian.png',
                    categories: ['operatingSystem']
                },
                {
                    title: 'Microsoft Windows',
                    image: '/images/integrations/windowsserver.png',
                    categories: ['operatingSystem']
                },
                {
                    title: 'VMware vCenter Server Appliance (VCSA)',
                    image: '/images/integrations/vmwarevcsa.png',
                    categories: ['applicationServer', 'infrastructure']
                },
                {
                    title: 'VMware VSAN',
                    image: '/images/integrations/vmwarevsan.png',
                    categories: ['infrastructure', 'storage']
                },
                {
                    title: 'Microsoft Hyper-V',
                    image: '/images/integrations/microsofthyperv.png',
                    categories: ['infrastructure']
                },
                {
                    title: 'NetApp',
                    image: '/images/integrations/netapp.png',
                    categories: ['storage']
                },
                {
                    title: 'DataCore SANSymphony',
                    image: '/images/integrations/datacore.png',
                    categories: ['storage']
                },
                {
                    title: 'VMware VSphere',
                    image: '/images/integrations/vmwaresphere.png',
                    categories: ['infrastructure']
                }
            ]
        };
    },
    methods: {
        filterIntegrations(categoryId) {
            this.activeCategory = categoryId;
        }
    },
    computed: {
        filteredIntegrations() {
            if (!this.activeCategory) {
                return this.integrations;
            }
            return this.integrations.filter((item) => {
                return item.categories.includes(this.activeCategory)
            });
        }
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
.integration-item {
    img {
        height: 40px;
        width: auto;
    }
    margin-bottom: 1rem;
}
</style>
