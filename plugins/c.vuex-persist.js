import { VuexPersistence } from 'vuex-persist'

export default (context) => {
  const { store } = context

  // Booru state
  new VuexPersistence({
    key: 'vuex-booru',

    storage: window.localStorage,

    reducer: (state) => ({
      booru: {
        history: state.booru.history
      }
    })
  }).plugin(store)

  // Default state
  new VuexPersistence({
    key: 'vuex-root',

    storage: window.localStorage,

    reducer: (state) => ({
      version: state.version,

      statistics: state.statistics
    })
  }).plugin(store)

  // Notifications state
  new VuexPersistence({
    key: 'vuex-notifications',

    storage: window.localStorage,

    reducer: (state) => ({
      notifications: {
        // Double because the state and module are named the same
        notifications: {
          latestTitle: state.notifications.notifications.latestTitle
        }
      }
    })
  }).plugin(store)

  // User state
  new VuexPersistence({
    key: 'vuex-user',

    storage: window.localStorage,

    reducer: (state) => {
      const SETTINGS_OBJ = {}

      // Recreate every setting's value path to save them to localStorage (this way we dont save other data like titles, defaultValue, etc.)
      Object.keys(state.user.settings).forEach((key) => {
        SETTINGS_OBJ[key] = {
          value: state.user.settings[key].value
        }
      })

      return {
        user: {
          custom: state.user.custom,
          settings: SETTINGS_OBJ
        }
      }
    }
  }).plugin(store)
}
