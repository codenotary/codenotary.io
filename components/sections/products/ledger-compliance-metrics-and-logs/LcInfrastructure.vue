<template>
    <page-section id="lc-infrastructure-section">
        <i-container>
            <i-tabs class="infrastructure-tabs" stretch>
                <i-tab title="Infrastructure Health">
                    <i-row center middle>
                        <i-column xs="12" sm="6" md="6" lg="6">
                            <h5 class="title _text-primary _font-weight-bold">Virtual Infrastructure Health.</h5>
                            <p class="lead">Always stay on top of your virtual infrastructure and feel the pulse of your environment. Monitor vital metrics of your most important virtual machines, check the network utilization of your ESXi host and much more from a single pane of glass.</p>
                        </i-column>
                        <i-column xs="12" sm="6" md="6" lg="6">
                            <img src="/images/cn-lc/features/highlights_virtual_machines_disksize.png" alt="Notarize" >
                        </i-column>
                    </i-row>
                </i-tab>
                <i-tab title="Performance Bottlenecks">
                    <i-row center middle>
                        <i-column xs="12" sm="6" md="6" lg="6">
                            <h5 class="title _text-primary _font-weight-bold">Find performance bottlenecks quick and easy.</h5>
                            <p class="lead">Finding bottlenecks is typically a pain, as you either don’t have the big picture, not the historic data required or you just don’t know the thresholds. We guide you with easy to understand dashboards, embedded help and predefined thresholds.</p>
                        </i-column>
                        <i-column xs="12" sm="6" md="6" lg="6">
                            <img src="/images/cn-lc/features/starter_vmware_virtual_machines.png" alt="Notarize" >
                        </i-column>
                    </i-row>
                </i-tab>
                <i-tab title="Capacity Planning">
                    <i-row center middle>
                        <i-column xs="12" sm="6" md="6" lg="6">
                            <h5 class="title _text-primary _font-weight-bold">Capacity planning of VMs and ESXi hosts.</h5>
                            <p class="lead">Track all kind of changes that happen in the lifetime of a virtual machine. Adding memory, setting a cpu limitation or changing the network portgroup should not happen unnoticed. Correlating changes and performance data can go a long way to find the root cause of an issue.</p>
                        </i-column>
                        <i-column xs="12" sm="6" md="6" lg="6">
                            <img src="/images/cn-lc/features/vmware_capacity_planning_cluster.png" alt="Notarize" >
                        </i-column>
                    </i-row>
                </i-tab>
                <i-tab title="Visual Warnings & Alerts">
                    <i-row center middle>
                        <i-column xs="12" sm="6" md="6" lg="6">
                            <h5 class="title _text-primary _font-weight-bold">Visual warnings and alerts for KPIs.</h5>
                            <p class="lead">Track all kind of changes that happen in the lifetime of a virtual machine. Adding memory, setting a cpu limitation or changing the network portgroup should not happen unnoticed. Correlating changes and performance data can go a long way to find the root cause of an issue.</p>
                        </i-column>
                        <i-column xs="12" sm="6" md="6" lg="6">
                            <img src="/images/cn-lc/features/vmware_capacity_vm_snapshots.png" alt="Notarize" >
                        </i-column>
                    </i-row>
                </i-tab>
                <i-tab title="Change Tracking">
                    <i-row center middle>
                        <!-- <i-column xs="12" sm="6" md="6" lg="6"> -->
                        <i-column xs="12" sm="12" md="6" lg="6">
                            <h5 class="title _text-primary _font-weight-bold">Track VM hardware and configuration changes.</h5>
                            <p class="lead">Track all kind of changes that happen in the lifetime of a virtual machine. Adding memory, setting a cpu limitation or changing the network portgroup should not happen unnoticed. Correlating changes and performance data can go a long way to find the root cause of an issue.</p>
                        </i-column>
                        <!-- <i-column xs="12" sm="6" md="6" lg="6">
                            <img src="/images/cn-lc/features/highlights_virtual_machines_disksize.png" alt="Notarize" >
                        </i-column> -->
                    </i-row>
                </i-tab>
                <i-tab title="Event/Performance Correlation">
                    <i-row center middle>
                        <i-column xs="12" sm="6" md="6" lg="6">
                            <h5 class="title _text-primary _font-weight-bold">Merge Events and Performance data.</h5>
                            <p class="lead">Wouldn’t it be great to correlate the performance data in a chart with events that are happening on the virtual machine or the ESXi that provides the computing stack? We thought about that and added VM and ESXi events to the details and top10 cluster dashboards for VMs and ESXi hosts, so you can explain some of the performance peaks in a simple way.</p>
                        </i-column>
                        <i-column xs="12" sm="6" md="6" lg="6">
                            <img src="/images/cn-lc/features/linux_host_overview.png" alt="Notarize" >
                        </i-column>
                    </i-row>
                </i-tab>
                <i-tab title="Full Stack View">
                    <i-row center middle>
                        <i-column xs="12" sm="6" md="6" lg="6">
                            <h5 class="title _text-primary _font-weight-bold">Not just the hypervisor.</h5>
                            <p class="lead">Everybody is talking about the VM configuration settings and the hypervisor performance as well as the potential performance gap running a VM compared to a bare-metal system. Thanks to our OS agents, integrations with physical network components and storage systems you can check the full stack and compare performance data yourself. Check our integrations page, to find more information about NetApp, Cisco, DataCore, Oracle aso.</p>
                        </i-column>
                        <i-column xs="12" sm="6" md="6" lg="6">
                            <img src="/images/cn-lc/features/linux_host_overview.png" alt="Notarize" >
                        </i-column>
                    </i-row>
                </i-tab>
            </i-tabs>
        </i-container>
    </page-section>
</template>


<script>
export default {
    name: 'LcInfrastructure'
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#lc-infrastructure-section {
    background-color: $color-gray-10;
    overflow: hidden;

    img {
        height: 400px;
        width: 100%;
        object-fit: contain;
    }

    .infrastructure-tabs {
        .button-group {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
        }
    }

    @include breakpoint-down(sm) {
        .infrastructure-tabs {
            .button-group {
                display: block;

                button {
                    width: 100%;
                }
            }
        }
    }
}
</style>
