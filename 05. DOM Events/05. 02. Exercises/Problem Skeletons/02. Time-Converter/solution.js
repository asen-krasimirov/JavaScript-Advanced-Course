function attachEventsListeners() {

    function converterConstructor() {
        const converter = {
            minuteScaler: 60,
            hourScaler: 60,
            dayScaler: 24,

            fromDays() {},
            fromHours() {},
            fromMinutes() {},
            fromSeconds() {},
        };

        function fromSeconds(seconds) {
            let minutes = Number(seconds/converter.minuteScaler);
            let hours = Number(seconds/(converter.minuteScaler*converter.hourScaler));
            let days = Number(seconds/(converter.minuteScaler*converter.hourScaler*converter.dayScaler));
            return [seconds, minutes, hours, days];
        }

        function fromMinutes(minutes) {
            return converter.fromSeconds(minutes*converter.minuteScaler);
        }

        function fromHours(hours) {
            return converter.fromSeconds(hours*converter.minuteScaler*converter.hourScaler);
        }

        function fromDays(days) {
            return converter.fromSeconds(days*converter.minuteScaler*converter.hourScaler*converter.dayScaler);
        }

        converter['fromSeconds'] = fromSeconds;
        converter['fromMinutes'] = fromMinutes;
        converter['fromHours'] = fromHours;
        converter['fromDays'] = fromDays;
        
        return converter;
    }

    const converter = converterConstructor();
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');


    document.getElementById('daysBtn').addEventListener('click', (event) => {changeInputs(converter.fromDays(daysInput.value));})
    document.getElementById('hoursBtn').addEventListener('click', (event) => {changeInputs(converter.fromHours(hoursInput.value));})
    document.getElementById('minutesBtn').addEventListener('click', (event) => {changeInputs(converter.fromMinutes(minutesInput.value));})
    document.getElementById('secondsBtn').addEventListener('click', (event) => {changeInputs(converter.fromSeconds(secondsInput.value));})

    function changeInputs(values) {
        let [curSeconds, curMinutes, curHours, curDays] = values;
        daysInput.value = curDays;
        hoursInput.value = curHours;
        minutesInput.value = curMinutes;
        secondsInput.value = curSeconds;
    }

}
