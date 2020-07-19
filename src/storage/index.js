// Storage封装

const STORAGE_KEY = 'mall'
export default {
  // 获取值
  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  getItem (key, module_name) {
    if (module_name) {
      const val = this.getItem(module_name)
      if (val) return val[key]
    } else {
      return this.getStorage()[key]
    }
  },
  // 存储值
  setItem (key, value, module_name) {
    if (module_name) {
      const val = this.getItem(module_name)
      val[key] = value
      this.setItem(module_name, val)
    } else {
      const val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },
  // 清空值
  clearStorage () {
    window.sessionStorage.removeItem(STORAGE_KEY)
  },
  clear (key, module_name) {
    const val = this.getStorage()
    if (module_name) {
      if(!val[module_name]) return
      delete val[module_name][key]
    } else {
      delete val[key]
    }
  }
}
