<script setup lang="ts">
import Card from 'primevue/card';
import Stepper from 'primevue/stepper';
import StepperPanel from 'primevue/stepperpanel';
import Button from 'primevue/button';
import TimeCard from '@/components/TimeCard.vue';
import InputNumber from 'primevue/inputnumber';
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar";
import {ref} from 'vue';

const date = ref<undefined | string>(undefined);
const time = ref<undefined | string>(undefined);
const counter = ref<undefined | number>(1);

// Time card
function selectTime(timeString:string, timeCardId:number) {
  time.value = timeString;
  
  const timeCards = document.getElementsByClassName('time__card');
  const selectedTimeCard = document.getElementById('time_card_'+timeCardId);

    for(let card of timeCards){
        card.classList.remove("selected");
    }

    selectedTimeCard?.classList.add("selected");
};

// Calendar
const showDate = ref<undefined | Date>(new Date);

function setShowDate(d:Date){
    showDate.value = d;
}
</script>

<template>
  <Card class="home">
    <template #title>Simple Home Card</template>
    <template #content>
      <Stepper orientation="vertical">
        <StepperPanel header="Wybierz datę">
            <template #content="{ nextCallback }">
                <div class="calendar__wrapper">
                    <h1>My Calendar</h1>
                    <CalendarView
                        :show-date="showDate"
                        class="theme-default holiday-us-traditional holiday-us-official">
                        <template #header="{ headerProps }">
                            <CalendarViewHeader :header-props
                                @input="setShowDate" />
                        </template>
                    </CalendarView>
                </div>
                <div>
                    <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                </div>
            </template>
        </StepperPanel>
        <StepperPanel header="Wybierz godzinę">
            <template #content="{ prevCallback, nextCallback }">
                <div class="timer__cards">
                    <TimeCard time="18:00 - 19:30" class="time__card" id="time_card_1" title="Najman zbiera lanie" @click="selectTime('18:00 - 19:30', 1)"/>
                    <TimeCard time="19:30 - 21:00" class="time__card" id="time_card_2" title="Najman nie wytrzymuje 30 sekund w klatce" @click="selectTime('19:30 - 21:00', 2)"/>
                    <TimeCard time="21:00 - 22:30" class="time__card" id="time_card_3" title="Psy zakuwają Najmana w kajdanki" @click="selectTime('21:00 - 22:30', 3)"/>
                    <br/>
                </div>
                <div>
                    <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                    <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                </div>
            </template>
        </StepperPanel>
        <StepperPanel header="Liczba osób">
            <template #content="{ prevCallback, nextCallback }">
                <div>
                    <InputNumber v-model="counter" inputId="minmax-buttons" mode="decimal" showButtons buttonLayout="horizontal" :min="1" :max="12" />
                </div>
                <br/>
                <div>
                    <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                    <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                </div>
            </template>
        </StepperPanel>
        <StepperPanel header="Potwierdzenie">
            <template #content="{ prevCallback }">
                <div>
                    <div>Data: {{ date }}</div>
                    <div>Godzina: {{ time }}</div>
                    <div>Liczba osób: {{ counter }}</div>
                </div>
                <div>
                    <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                    <Button label="Confirm" icon="pi pi-arrow-right" iconPos="right"/>
                </div>
            </template>
        </StepperPanel>
      </Stepper>
    </template>
  </Card>
</template>

<style scoped lang="scss">
.timer__cards{
    display:flex;
    flex-direction:column;
    gap: 12px;
}

.selected {
    background-color: aliceblue;
}

.callendar__wrapper{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
</style>