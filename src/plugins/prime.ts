import { App } from 'vue'
import PrimeVue, { PrimeVueConfiguration } from 'primevue/config'
import Tailwind from 'primevue/passthrough/tailwind'

/**
 * To add new components from PrimeVue to be able to use them globally:
 *  1. Import them from its dependency in primevue (Check https://primevue.org)
 *  2. Add them to the components array
 * You can modify options object as you wish, considering PrimeVueConfiguration Options
 */
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import Chip from 'primevue/chip'
import InputText from 'primevue/inputtext'

const options: PrimeVueConfiguration = {
  unstyled: true,
  pt: Tailwind,
}

const components = [Button, Dropdown, InputText, Chip]

export default function (app: App) {
  app.use(PrimeVue, options)

  components.forEach((component) => {
    app.component(component.name, component)
  })
}
