<script setup>
import { ref } from 'vue'
import { useArticle } from '@/composables/useArticle';
const emit = defineEmits(['app:add:item'])
let item = ref({})
const { sections } = useArticle()
const addData = (e)  => {
  let k = ''
  if(e.target.type === 'text') {
    k = 'label'
  } else if(e.target.type === 'radio') {
    k = 'section'
  }
  item.value[k] =  e.target.value
}

const sendItem = () => {
  if (item.value.label != '' && item.value.section != '') {
    item.value.isBought = false
    emit('app:add:item', item.value)
    item.value = {}
  }
}
</script>
<template>
  <section class="container">
    <h2>Ajouter un article à la liste d'achat</h2>
    <article>
      <input
        type="text"
        placeholder="nom de l'article"
        @change="addData"
        :value="item.label"
      />
      <h3>Rayons</h3>
      <label v-for="section in sections" :key="section" :for="section">
        <input
          type="radio"
          label="section"
          name="section"
          :value="section"
          :id="section"
          @change="addData"
          v-model="item.section"
        />
        {{ section }}
      </label>
      <input class="btn" type="button" value="Ajouter" @click="sendItem" />
    </article>
  </section>
</template>
<style scoped>
article {
  display: flex;
  flex-direction: column;
}

input[type=radio] {
  margin-top:.5rem;
  margin-bottom: .5rem;
}

h2, input[type=text], input[type=button]  {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

input[type=text], input[type=button] {
  width: 50%;
  padding: .5rem;
}

</style>