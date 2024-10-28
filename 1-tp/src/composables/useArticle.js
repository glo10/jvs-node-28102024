import { ref } from 'vue'
export const useArticle = () => {
  const items = ref([])
  const sections = [
    'cosmetiques',
    'frais',
    'liquide',
    'droguerie',
    'boulangerie',
    'boucherie',
    'surgelé'
  ]

  const addItem = (item) => {
    const isExist = items.value.find(i => i.label === item.label)
    if (isExist === undefined && 'label' in item && 'section' in item && 'isBought' in item) {
      items.value.push(item);
    }
    else {
      alert(`article ${item.label} existe déjà dans la liste ou incomplète`)
    }
  };

  return {
    items,
    sections,
    addItem
  }
}