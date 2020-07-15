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
            value: object.value.trim().toLowerCase()
        }
    })
    return normalizedArray
}

// normalize url params to fill search fields
export const normalizeUrl= (urlObj) => {
    let result = []
    let regex = /\b\w/g
    let label
    let placeholder = ''
    forOwn(urlObj, (item, key) => {
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
    // var urlParams;
    // let normalizedString = () => {
    //     var match,
    //     pl     = /\+/g,  // Regex for replacing addition symbol with a space
    //     search = /([^&=]+)=?([^&]*)/g,
    //     decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
    //     query  = window.location.search.substring(1);

    //     urlParams = {};

    //     while (match = search.exec(query))
    //     urlParams[decode(match[1])] = decode(match[2]);

    //     return urlParams
    // }
    // return normalizedString
}