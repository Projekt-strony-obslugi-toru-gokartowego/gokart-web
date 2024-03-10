<script setup lang="ts">
import Card from 'primevue/Card';
import Image from 'primevue/image';
</script>

<template>
  <Card class="contact">
    <template #title>Simple Contact Card</template>
    <template #content>
      <div class="row" style="display: flex; flex-direction: row; gap: 16px;">
        <div class="names" style="width: calc(100% - 400px); display: flex; flex-wrap: wrap; align-content: flex-start;">
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
          </p>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
          </p>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
          </p>
        </div>
        <Image src="https://i.pinimg.com/736x/31/e2/a1/31e2a17fc75dd7d332086446d8ebb40d.jpg" alt="Image" width="400px" preview />
      </div>
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
        quas!
      </p>
    </template>
  </Card>
</template>
