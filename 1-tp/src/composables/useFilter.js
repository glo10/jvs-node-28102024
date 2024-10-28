import { ref, computed, watchEffect, watch } from "vue";
export const useFilter = (items) => {
  const itemsFiltered = ref([]);
  const criteria = ref(null);
  const progress = computed(() => {
    let count = 0;
    if (items.value.length > 0) {
      items.value.forEach((item) => {
        if (item.isBought) count++;
      });
    }
    return {
      bought: count,
      total: items.value.length,
      percent: Math.round((progress.bought / progress.total) * 100),
    };
  });

  const changeCriteria = (param) => {
    criteria.value = {...criteria.value, ...param};
  };

watch(criteria, (newCriteria, oldValue) => {
  if(oldValue && newCriteria.isBought === null) {
    delete newCriteria.isBought
    console.log('watcher de null isBought', newCriteria)
    criteria.value = newCriteria
  }
  if(oldValue && newCriteria.section === 'all') {
    delete newCriteria.section
    criteria.value = newCriteria
  }
}, { immediate: true })
  watchEffect(() => {
    itemsFiltered.value = items.value.filter((item) => {
      if (criteria.value === null) return items.value;
      return Object.keys(criteria.value).every((key) => {
        const k = key;
        return criteria.value[k] === undefined || item[k] === criteria.value[k];
      });
    });
  });

  const displayCriteria = computed(() => {
    if (criteria.value) {
      let filters = ''
      for (const [k, v] of Object.entries(criteria.value)) {
        const key = k
          .replace(/section/i, "rayon")
          .replace(/isbought/i, "achêté");
        let value = v;
        if (value === true) {
          value = "Oui";
        } else if (value === false) {
          value = "Non";
        }
        if(Object.entries(criteria.value).length > 1) filters += ' et '
        filters += `${key} : ${value}`;
      }
      return filters
    }
    return null;
  });
  return {
    criteria,
    progress,
    changeCriteria,
    displayCriteria,
    itemsFiltered,
  };
};
