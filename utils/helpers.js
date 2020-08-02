import forOwn from 'lodash/forOwn'

// normalize path and remove "/" from last of path
export const normalizePath = (path) => {
    const regex = /\/$/gm
    const subst = ''

    const result = path.replace(regex, subst)

    return result
}

// normalize search fileds to create search url
export const normalizeSearchField = (array) => {
    let normalizedArray = array.map(object => {
        return {
            label: object.label.toLowerCase().replace(' ', '-'),
            value: object.value.trim().toLowerCase(),
            placeholder: object.placeholder
        }
    })
    return normalizedArray
}

// normalize url params to fill search fields
export const normalizeUrl= (urlObj) => {
    let result = []
    let regex = /\b\w/g
    let label
    let placeholder = null
    forOwn(urlObj, (item, key) => {
        placeholder = null
        switch (key) {
            case 'issue-date-from':
                label = 'Issue Date'
                placeholder = 'from'
                break
            case 'issue-date-to':
                label = 'Issue Date'
                placeholder = 'to'
                break
            case 'travel-date-from':
                label = 'Travel Date'
                placeholder = 'from'
                break
            case 'travel-date-to':
                label = 'Travel Date'
                placeholder = 'to'
                break
            case 'route-origin':
                label = 'Route'
                placeholder = 'origin'
                break
            case 'route-dest':
                label = 'Route'
                placeholder = 'destination'
                break

            default:
                label = key
                break
        }
        result.push({
            label: label.replace('-', ' ').replace(regex, (c) => c.toUpperCase()),
            value: item,
            placeholder: placeholder
        })
    })

    return result
}

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
