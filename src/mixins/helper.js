export default {
    methods: {
        formatDate(date) {
            return Intl.DateTimeFormat('ru-RU').format(new Date(date));
        }
    },
}
