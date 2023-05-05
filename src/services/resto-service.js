export default class RestoService {
    async getMenuItems() {
        const SERVER_URL = 'http://localhost:3000/menu'
            const response = await fetch(SERVER_URL)
            const json = await response.json()
            const basse = await json
            return basse
          }
        }
