export default {
    data() {
        return {
            alert: false,
        };
    },
    methods: {
        alertToggle() {
            this.alert = !this.alert;
        },
    },
};