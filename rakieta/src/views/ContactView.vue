<script setup lang="ts">
import Card from 'primevue/Card';
import Image from 'primevue/image';
import Divider from 'primevue/divider';
</script>

<template>
  <Card class="contact">
    <template #title>Kontakt</template>
    <template #content>
      <div class="row" style="display: flex; flex-direction: row; gap: 16px;">
        <div class="names" style="width: calc(100% - 400px); display: flex; flex-wrap: wrap; align-content: flex-start;">
          <h3 style="padding-top: 12px;">Address</h3>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
          </p>
          <h3 style="padding-top: 12px;">Contact 1</h3>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
          </p>
          <h3 style="padding-top: 12px;">Contact 2</h3>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
          </p>
        </div>
        <Divider layout="vertical"/>
        <Image src="https://i.pinimg.com/736x/31/e2/a1/31e2a17fc75dd7d332086446d8ebb40d.jpg" alt="Image" width="400px" style="height:fit-content; align-self: center;" preview />
      </div>
    </template>
  </Card>
</template>
