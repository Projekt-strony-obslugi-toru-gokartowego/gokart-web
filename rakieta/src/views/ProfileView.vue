<script setup lang="ts">
import Card from 'primevue/Card';
import Image from 'primevue/image';
</script>

<template>
  <Card class="profile">
    <template #title>Simple Profile Card</template>
    <template #content>
      <div class="row" style="display: flex; flex-direction: row; gap: 16px;">
        <Image src="https://i.pinimg.com/736x/31/e2/a1/31e2a17fc75dd7d332086446d8ebb40d.jpg" alt="Image" width="200px" preview />
        <div class="names" style="width: calc(100% - 200px); display: flex; flex-wrap: wrap; align-content: flex-start;">
          <p class="m-0 first-name" style="width: 50%;">
            First name
          </p>
          <p class="m-0 second-name" style="width: 50%;">
            Second name
          </p>
          <p class="m-0 last-name" style="width: 50%;">
            Last name
          </p>
        </div>
      </div>
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
        quas!
      </p>
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
        quas!
      </p>
    </template>
  </Card>
</template>
