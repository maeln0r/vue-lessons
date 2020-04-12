export default {
    created() {
        this.unsubscribe = this.$store.subscribe((mutation, state) => {
            localStorage.setItem('store', JSON.stringify(state));
        });
    },
    beforeDestroy() {
        this.unsubscribe();
    }
}
