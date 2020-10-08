export default {
    name: 'colorUtils',

    data: () => ({
        colorOptions: [
            '#333333', // black
            '#F44336', // red
            '#E91E63', // violet
            '#673AB7', // purple
            '#3F51B5', // blue
            '#00BCD4', // cyan
            '#4CAF50', // green
            '#FFC107', // yellow
            '#FF9800', // orange
            '#FF5722', // light red
            '#795548', // brown
            '#607D8B' // grey
        ]
        // colorOptions: [
        //     '#060310',
        //     '#252bc5',
        //     '#7c3d13',
        //     '#535155',
        //     '#9c2f9b',
        //     '#239725',
        //     '#d84b37',
        //     '#2d9f62',
        //     '#8272ec',
        //     '#bf8321',
        //     '#ed6294',
        //     '#5ed6ea'
        // ]
    }),

    beforeDestryed () {
        this.colorOptions = null;
    },

    methods: {
        getColor (idx = 0) {
            if (this.colorOptions && this.colorOptions.length) {
                return this.colorOptions[idx % this.colorOptions.length] || 'grey';
            }
            return 'grey';
        }
    }
};
