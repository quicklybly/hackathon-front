export default {
    data() {
        return {
            monthNames: [
                "Январь", "Февраль", "Март", "Апрель",
                "Май", "Июнь", "Июль", "Август",
                "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
            ]
        }
    },
    methods: {
        formatDate(date) {
            let arr = date.split('-');
            return arr[2] + ' ' + this.monthNames[+arr[1]
                - 1]
                + `'${arr[0].slice(2)}`
        }
    }
};