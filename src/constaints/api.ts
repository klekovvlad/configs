const BASE_URL = `https://admin.vsekupeli.ru`

export const API = {
  WORDPRESS: {
    BASE: () => `${BASE_URL}/wp-json/wp/v2`,
    PAGE: (id: string | number) => `${API.WORDPRESS.BASE()}/pages/${id}`
  }
}