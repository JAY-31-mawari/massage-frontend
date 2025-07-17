export const storageType = 'localStorage'

const convertType = (value: any) => {
  const v = Number(value)
  return !isNaN(v)
    ? v
    : value === 'undefined'
    ? undefined
    : value === 'null'
    ? null
    : value === 'true'
    ? true
    : value === 'false'
    ? false
    : value
}

export const storageAvailable = (type: 'localStorage' | 'sessionStorage') => {
  const storage = window[type] as Storage
  try {
    const x = '__storage_test__'
    storage.setItem(x, x)
    storage.removeItem(x)
    return true
  } catch (e) {
    return false
  }
}

export const getStorageItem = (key: string, storageType_: 'localStorage' | 'sessionStorage' = storageType) => {
  let returnValue = null
  if (storageAvailable(storageType_)) {
    returnValue = (window[storageType_] as Storage).getItem(key)
  }
  return convertType(returnValue)
}

export const setStorageItem = (key: string, value: any, storageType_: 'localStorage' | 'sessionStorage' = storageType) => {
  if (storageAvailable(storageType_)) {
    (window[storageType_] as Storage).setItem(key, value)
  }
}

export const deleteStorageItem = (key: string, storageType_: 'localStorage' | 'sessionStorage' = storageType) => {
  if (storageAvailable(storageType_)) {
    (window[storageType_] as Storage).removeItem(key)
  }
}

export const clearStorage = (storageType_: 'localStorage' | 'sessionStorage' = storageType) => {
  if (storageAvailable(storageType_)) {
    (window[storageType_] as Storage).clear()
  }
}
