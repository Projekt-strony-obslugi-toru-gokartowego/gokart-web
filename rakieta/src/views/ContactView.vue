<script setup lang="ts">
import Card from 'primevue/card';
import Image from 'primevue/image';
import Divider from 'primevue/divider';
</script>

<template>
  <Card class="contact">
    <template #title>Simple Contact Card</template>
    <template #content>
      <div class="row">
        <div class="contact__details">
          <h3>Address</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
          </p>
          <h3>Contact 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
          </p>
          <h3>Contact 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
          </p>
        </div>
        <Divider layout="vertical"/>
        <Image src="https://i.pinimg.com/736x/31/e2/a1/31e2a17fc75dd7d332086446d8ebb40d.jpg" 
          alt="Image" 
          width="400px"
          class="contact__image"
          preview 
        />
      </div>
    </template>
  </Card>
</template>

<style scoped lang="scss">
.row{
  display: flex; 
  flex-direction: row; 
  gap: 16px;
}

.contact {
  &__details{
    width: calc(100% - 400px); 
    display: flex; 
    flex-wrap: wrap; 
    align-content: flex-start;
  }

  &__image{
    height:fit-content; 
    align-self: center;
  }
}
</style>