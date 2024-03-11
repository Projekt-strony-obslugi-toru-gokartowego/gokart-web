<script setup lang="ts">
import Card from 'primevue/Card';
import Stepper from 'primevue/stepper';
import StepperPanel from 'primevue/stepperpanel';
import Button from 'primevue/button';
</script>

<template>
  <Card class="home">
    <template #title>Simple Home Card</template>
    <template #content>
      <Stepper orientation="vertical">
        <StepperPanel header="Header I">
            <template #content="{ nextCallback }">
                <div>
                    <div>Content I</div>
                </div>
                <div>
                    <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                </div>
            </template>
        </StepperPanel>
        <StepperPanel header="Header II">
            <template #content="{ prevCallback, nextCallback }">
                <div>
                    <div>Content II</div>
                </div>
                <div>
                    <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                    <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                </div>
            </template>
        </StepperPanel>
        <StepperPanel header="Header III">
            <template #content="{ prevCallback }">
                <div>
                    <div>Content II</div>
                </div>
                <div>
                    <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                </div>
            </template>
        </StepperPanel>
      </Stepper>
    </template>
  </Card>
</template>
