// normalize path and remove "/" from last of path

export const normalizePath = (path) => {
    const regex = /\/$/gm
    const subst = ''
        
    const result = path.replace(regex, subst)
        
    return result
}
export const normalizeSearchField = (array) => {
    let normalizedArray = array.map(object => {
        return {
            label: object.label.toLowerCase().replace(' ', '-'), 
            value: object.value.toLowerCase()
        }
    })
    return normalizedArray
}